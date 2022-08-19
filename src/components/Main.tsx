import React, {useEffect, useState} from "react";

import api from "../api/index";
import {Candidate} from "../types/candidate";
import Modal from "../components/Modal";

import Card from "./Card";

const seccciones = ["Entrevista inicial", "Entrevista técnica", "Oferta", "Asignación", "Rechazo"];

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [candidatos, setCandidatos] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem("candidatos") || "[]") || [],
  );

  useEffect(() => {
    if (candidatos.length === 0) {
      api.list().then(setCandidatos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("candidatos", JSON.stringify(candidatos));
  }, [candidatos]);

  const checkCandidate = (seccion: string) => {
    const even = (element: {step: string}) => element.step === seccion;

    return candidatos.some(even);
  };

  return (
    <main className="md:h-[calc(100vh-112px)]">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-2 lg:gap-x-2 p-2">
        {seccciones.map((element, index) => (
          <div key={element} className="bg-indigo-800 p-3 flex flex-col rounded-md">
            <h1 className="p-2 h-20 text-3xl text-center text-slate-100 font-bold"> {element} </h1>
            <section className="bg-indigo-400 my-3 p-2 flex flex-col gap-3 rounded-md">
              {checkCandidate(element) ? (
                candidatos.map((candidato) =>
                  candidato.step === element ? (
                    <Card
                      candidato={candidato}
                      indexSeccion={index}
                      listCandidatos={candidatos}
                      seccion={element}
                      secciones={seccciones}
                      setListCandidatos={setCandidatos}
                    />
                  ) : null,
                )
              ) : (
                <p className="text-indigo-50 text-center text-lg md:text-xl lg:text-2xl font-normal">
                  {" "}
                  No hay candidatos
                </p>
              )}
            </section>
            {element === "Entrevista inicial" ? (
              <>
                <button
                  className="bg-indigo-500 rounded-lg p-2 text-slate-200"
                  onClick={() => setShowModal(true)}
                >
                  {" "}
                  Agregar un nuevo candidato{" "}
                </button>
                {showModal ? (
                  <Modal list={candidatos} setList={setCandidatos} setShow={setShowModal} />
                ) : null}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;

import React, {useState} from "react";

import {Candidate} from "../types/candidate";

const Modal = (props: {[x: string]: any; list: string | any[]}): JSX.Element => {
  const [nombreCandidato, setNombreCandidato] = useState("");
  const [comentariosCandidato, setComentariosCandidato] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombreCandidato(event.target.value);
  };

  const handleChangeComentario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComentariosCandidato(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numId = props.list.length + 1;
    const nuevoCandidato: Candidate = {
      id: nombreCandidato.toLowerCase().replace(".", "").replace(" ", "").concat(numId.toString()),
      name: nombreCandidato,
      step: "Entrevista inicial",
      comments: comentariosCandidato,
    };

    props.setList([...props.list, nuevoCandidato]);
    setNombreCandidato("");
    setComentariosCandidato("");
    props.setShow(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-indigo-500 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center text-indigo-50">
                Agregue un nuevo candidato
              </h3>
            </div>
            {/*body*/}
            <form onSubmit={handleSubmit}>
              <div className="bg-indigo-500 relative p-6 flex flex-col justify-around items-center">
                <div className="my-2 p-3 flex flex-col">
                  <label className="my-1 text-center text-indigo-50" htmlFor="name">
                    Nombre y apellido del candidato:
                  </label>
                  <input
                    required
                    className="p-2 rounded-md"
                    id="name"
                    name="name"
                    type="text"
                    value={nombreCandidato}
                    onChange={handleChangeName}
                  />
                </div>
                <div className="my-2 p-3 flex flex-col">
                  <label className="my-1 text-center text-indigo-50" htmlFor="comentarios">
                    {" "}
                    Comentarios (opcional):
                  </label>
                  <input
                    className="p-2 rounded-md"
                    id="comentarios"
                    name="comentarios"
                    type="text"
                    value={comentariosCandidato}
                    onChange={handleChangeComentario}
                  />
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setShow(false)}
                >
                  Cerrar
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default Modal;

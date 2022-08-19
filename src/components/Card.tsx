import React, {useState} from "react";
import {IoChevronBackOutline, IoChevronForward, IoCloseCircle} from "react-icons/io5";

import {Candidate} from "../types/candidate";

import candidatoMove from "./candidatoMove";

function Card(props: any): JSX.Element {
  // estado para mostrar (o no) el input para actualizar comentario del candidato
  const [modoComentario, setModoComentario] = useState(false);
  // estado y funciones para actualizar el comentario del candidato
  const [nuevoComentario, setNuevoComentario] = useState("");

  // obtener el comentario que se está ingresando
  const handleChangeNuevoComentario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoComentario(event.target.value);
  };

  // funcion para actualizar el comentario del candidato
  const updateComentario = (identificador: string) => {
    const foundCandidato = props.listCandidatos.find(
      (element: {id: string}) => element.id === identificador,
    );

    if (foundCandidato != undefined) {
      foundCandidato.comments = nuevoComentario;
    }

    props.setListCandidatos([...props.listCandidatos]);
    setNuevoComentario("");
    setModoComentario(false);
  };

  // funcion para eliminar un candidato y luego actualizar la lista de candidatos
  const eliminarCandidato = (identificador: string) => {
    const foundCandidato = props.listCandidatos.find(
      (element: {id: string}) => element.id === identificador,
    );

    if (foundCandidato != undefined) {
      const indexCandidato = props.listCandidatos.indexOf(foundCandidato, 0);
      const eliminado = props.listCandidatos.splice(indexCandidato, 1);

      console.log(eliminado);
    }

    props.setListCandidatos([...props.listCandidatos]);
  };

  const updateCandidatos = ({
    identificador,
    seccion,
    movimiento,
    listCandidatos,
    listSecciones,
  }: {
    identificador: string;
    seccion: string;
    movimiento: string;
    listCandidatos: Array<Candidate>;
    listSecciones: Array<string>;
  }) => {
    let listaNueva = candidatoMove({
      identificador,
      seccion,
      movimiento,
      listCandidatos,
      listSecciones,
    });

    if (listaNueva != undefined) {
      props.setListCandidatos(listaNueva);
    }
  };

  return (
    <div key={props.candidato.id} className="p-2 my-2 bg-indigo-500 rounded-md">
      <div className="flex flex-row justify-end">
        <button onClick={() => eliminarCandidato(props.candidato.id)}>
          <IoCloseCircle className="text-xl text-indigo-200" />
        </button>
      </div>
      <div className="my-2 flex flex-col">
        <span className="underline underline-offset-2 text-indigo-50">Nombre del candidato:</span>
        <h1 className="font-bold text-indigo-100">{props.candidato.name}</h1>
      </div>
      <div className="my-4 flex flex-col">
        <span className="underline underline-offset-2 text-indigo-50">Comentarios: </span>
        {modoComentario ? (
          <input
            placeholder="Nuevo comentario"
            type="text"
            onChange={handleChangeNuevoComentario}
          />
        ) : (
          <h3 className="italic font-light  text-indigo-100">{props.candidato.comments}</h3>
        )}
      </div>
      <div>
        {modoComentario ? (
          <button
            className="bg-indigo-900 text-indigo-100 w-full p-2 rounded-md flex flex-row justify-center"
            onClick={() => updateComentario(props.candidato.id)}
          >
            {" "}
            Actualizar
          </button>
        ) : (
          <button
            className="bg-indigo-900 text-indigo-100 w-full p-2 rounded-md flex flex-row justify-center"
            onClick={() => setModoComentario(true)}
          >
            {" "}
            cambiar comentario{" "}
          </button>
        )}
      </div>
      <div className="my-2 flex flex-row justify-between items-center">
        <button
          className="bg-indigo-100 w-1/2 mx-1 p-2 rounded-md flex flex-row justify-center"
          disabled={props.indexSeccion < 1 ? true : false}
          onClick={() =>
            updateCandidatos({
              identificador: props.candidato.id,
              seccion: props.seccion,
              movimiento: "atras",
              listCandidatos: props.listCandidatos,
              listSecciones: props.secciones,
            })
          }
        >
          <IoChevronBackOutline className="text-2xl text-indigo-800" />
        </button>
        <button
          className="bg-indigo-100 w-1/2 mx-1 p-2 rounded-md flex flex-row justify-center"
          disabled={props.indexSeccion >= props.secciones.length - 1 ? true : false}
          onClick={() =>
            updateCandidatos({
              identificador: props.candidato.id,
              seccion: props.seccion,
              movimiento: "adelante",
              listCandidatos: props.listCandidatos,
              listSecciones: props.secciones,
            })
          }
        >
          <IoChevronForward className="text-2xl text-indigo-800" />
        </button>
      </div>
    </div>
  );
}

export default Card;

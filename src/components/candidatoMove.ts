import {Candidate} from "../types/candidate";

const candidatoMove = ({
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
  const foundCandidato = listCandidatos.find(
    (element: {id: string}) => element.id === identificador,
  );
  const foundSeccion = listSecciones.indexOf(seccion, 0);

  if (foundCandidato != undefined) {
    if (movimiento === "atras") {
      switch (foundSeccion - 1) {
        case 0:
          foundCandidato.step = "Entrevista inicial";
          break;

        case 1:
          foundCandidato.step = "Entrevista técnica";
          break;

        case 2:
          foundCandidato.step = "Oferta";
          break;

        case 3:
          foundCandidato.step = "Asignación";
          break;

        case 4:
          foundCandidato.step = "Rechazo";
          break;

        default:
          foundCandidato.step = "Entrevista inicial";
          break;
      }
    }
    if (movimiento === "adelante") {
      switch (foundSeccion + 1) {
        case 0:
          foundCandidato.step = "Entrevista inicial";
          break;

        case 1:
          foundCandidato.step = "Entrevista técnica";
          break;

        case 2:
          foundCandidato.step = "Oferta";
          break;

        case 3:
          foundCandidato.step = "Asignación";
          break;

        case 4:
          foundCandidato.step = "Rechazo";
          break;

        default:
          foundCandidato.step = "Entrevista inicial";
          break;
      }
    }

    return [...listCandidatos];
  }
};

export default candidatoMove;

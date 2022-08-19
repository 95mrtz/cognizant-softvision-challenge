import {Candidate} from "../types/candidate";

const api = {
  list: async (): Promise<Candidate[]> => [
    {
      id: "goncy",
      name: "Gonzalo Pozzo",
      step: "Entrevista técnica",
      comments: "Medio pelo",
    },
    {
      id: "manuelortiz",
      name: "Manuel Ortiz",
      step: "Asignación",
      comments: "Hizo un proyecto muy bueno, hay que contratarlo antes que otra empresa lo haga",
    },
  ],
};

export default api;

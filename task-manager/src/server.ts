import api from "./app";
const port = 3333;

api.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});

// módulo para inicializar o servidor, na porta especificada

import { useQuery } from "react-query";

const fetchClients = async () => {
  const response = await fetch("http://localhost:3001/clients");
  if (!response.ok) {
    throw new Error("Échec de la récupération des clients");
  }
  return response.json();
};

function useClients() {
  return useQuery("clients", fetchClients);
}

export default useClients;

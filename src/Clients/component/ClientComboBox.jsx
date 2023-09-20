import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import useClients from "../hooks/useClients";

export function ClientComboBox({ selectedClientId }) {
  const { data: clients, isLoading, isError } = useClients();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Erreur lors de la récupération des clients.</div>;
  }

  return (
    <Autocomplete
      options={clients} // Utilisez les données récupérées du hook personnalisé
      getOptionLabel={(client) => client.nom} // Remplacez "nom" par le champ que vous souhaitez afficher
      renderInput={(params) => <TextField {...params} label="Clients" />}
      value={clients.find((client) => client.id === selectedClientId) || null}
    />
  );
}

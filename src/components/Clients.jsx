import React from "react";
import { ClientComboBox } from "../Clients/component/ClientComboBox";
import { Card } from "@mui/material";

export function Clients() {
  return <Card><ClientComboBox selectedClientId={2}></ClientComboBox></Card>
  ;
}

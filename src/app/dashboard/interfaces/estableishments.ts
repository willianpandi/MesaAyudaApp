// // Generated by https://quicktype.io

import { District } from "./districts";

export interface Estableishment {
  id:             string;
  // createdAt:      string;
  // apdateAt:       string;
  codigo:         string;
  nombre:         string;
  institucion:    string;
  nivel_atencion: NivelAtencion;
  tipologia:      string;
  provincia:      Provincia;
  canton:         string;
  parroquia:      string;
  district:       District;
}


export enum NivelAtencion {
  Nivel1 = "NIVEL 1",
  Nivel2 = "NIVEL 2",
  Nivel3 = "NIVEL 3",
  ServiciosDeAtencionDeSaludMovil = "SERVICIOS DE ATENCION DE SALUD MOVIL",
}

export enum Provincia {
  CHIMBORAZO = "CHIMBORAZO",
  COTOPAXI = "COTOPAXI",
  PASTAZA = "PASTAZA",
  TUNGURAHUA = "TUNGURAHUA",
}

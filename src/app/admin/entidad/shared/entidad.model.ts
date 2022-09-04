import { Contribuyente } from "../../contribuyente/shared/contribuyente.model";
import { Documento } from "../../documento/shared/documento.model";

export interface Entidad {
  idEntidad:       number;
  documento:       Documento;
  nroDocumento:    string;
  razonSocial:     string;
  nombreComercial: string;
  contribuyente:   Contribuyente;
  direccion:       string;
  telefono:        string;
  estado:          boolean;
}

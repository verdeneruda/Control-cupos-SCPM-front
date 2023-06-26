import { substance } from "./discounts"


export interface License {
    id?: number
    expediente: string
    resolucionModifica: string
    importador: string
    fechaResolucionModifica: string
    resolucionNo: string
    tipoImportador: string
    fechaResolucion: string
    estado: boolean
    sustancias: substance[]

}


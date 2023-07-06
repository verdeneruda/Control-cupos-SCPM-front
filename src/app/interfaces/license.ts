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

export interface LicenseAdd {
    id?: number
    nroExpediente: string
    nitEmpresa: string,
    nombreImportador: string
    nroActoAdtvo: number
    fechaActoAdtvo: Date
    fechaActoAdtvoMod: Date
    nroActoAdtvoMod: number
    paisProcedencia: number
    estado: boolean
    usuarioCreacion: number
    proveedores: LicenseProv[]
}

export interface LicenseProv {
    id?: number
    nombreProveedor: string
}


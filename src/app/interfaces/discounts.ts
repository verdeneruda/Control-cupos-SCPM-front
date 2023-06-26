export interface Discounts {
    id?: number,
    idLicencia: number,
    idSustancia: number,
    cupoAnual: number,
    cupoDisponible: number,
    fechaCreacion: Date,
    usuarioCreacion: number,
    cantidadKg: number
}

export interface substance{
    name: string,
    cupoAnual: number,
    cupoDisponible: number

}

import { BaseError } from "./BaseError";


export class NotFoundError extends BaseError {
    constructor(
        message: string = "Recurso não encontado"
    ){
        super(404, message)
    }
}
import { BaseError } from "./BaseError";


export class BadRequestError extends BaseError {

    constructor(
        message: string = "Requisição não válida"
    ){
        super(400, message)
    }
}
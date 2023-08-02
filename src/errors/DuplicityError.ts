import { BaseError } from "./BaseError";


export class DuplicityError extends BaseError {

    constructor(
        message: string = "Valor já existente"
    ){
        super(409, message)
    }
}
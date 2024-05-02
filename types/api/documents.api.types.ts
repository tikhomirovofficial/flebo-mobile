import { CanLoadPart, HasPart, ResponseStatus } from "../common.types"
import { DocumentApi } from "../entities/documents.types"

//Получить все документы
export type AllDocumentsGetReq = HasPart
export type AllDocumentsGetRes = {
    docx: DocumentApi[]
} & ResponseStatus & CanLoadPart
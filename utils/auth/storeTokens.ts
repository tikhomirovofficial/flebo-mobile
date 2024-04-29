import { JWT } from "../../types/common.types"
import { setStorage, getStorage, deleteStorage } from "../store"


export const storeTokens = async (tokens: JWT) => {
    await setStorage("tokens", tokens)
}

export const getTokens = async (): Promise<JWT> => {
    return await getStorage("tokens") as JWT
}

export const deleteTokens = async () => {
    await deleteStorage("tokens")
}
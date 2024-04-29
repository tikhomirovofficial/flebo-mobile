import { getTokens } from "./storeTokens";


export const checkIsValid = async () => {
    const tokens = await getTokens();
    if (tokens) {
        const refresh: string | undefined = tokens?.refresh;
        return String(refresh)?.length > 20
    } else {
        return false;
    }
}
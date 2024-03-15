import { useCookies } from "@vueuse/integrations/useCookies";

const cookies = useCookies();

export function setToken(token:String) {
    cookies.set("token", token);
}

export function getToken(): String {
    return cookies.get("token")
}
import axios from "@/axios"

export function login(username:String, password:String) {
    return axios.post("/admin/login", {
        username,password
    })
}
export function getinfo() {
    return axios.post("/admin/getinfo", {
       
    })
}
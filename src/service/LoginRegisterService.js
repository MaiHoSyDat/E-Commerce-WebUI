import axios from "axios";
class LoginRegisterService{
    static async login(username,password){
        return await axios.post("http://localhost:8080/login")
    }
    static async register(){
        return await axios.post("http://localhost:8080/register")
    }
}
export default LoginRegisterService;
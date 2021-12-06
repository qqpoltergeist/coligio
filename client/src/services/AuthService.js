import $api from "../http";



export default class AuthService {
    static async login(email,password){
        return $api.post('/login', {email,password})

    }

    static async registration(nickname,email,password){
        return $api.post('/reg', {nickname,email,password})

    }
    static async logout(){
        return $api.post('/logout')

    }
}



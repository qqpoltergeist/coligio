import $api from "../http";



export default class AuthService {
    static async login(email,password){
        return $api.post('/login', {email,password})

    }

    static async registration(nickname,email,password){
        return $api.post('/reg', {nickname,email,password})

    }
    static async edit(id,nickname,level){
        return $api.post('/edit', {id,nickname,level})

    }
    static async editPass(id, oldPassword, newPassword){
        return $api.post('/edit/password ', {id, oldPassword, newPassword})
    }

    static async logout(){
        return $api.post('/logout')

    }
}



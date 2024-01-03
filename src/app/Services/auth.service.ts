import { Injectable } from "@angular/core";
import { UserService } from "./user.services";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private userService: UserService) {}
    isLogged: Boolean = false;

    login(username:string, password: string) {
        let user = this.userService.users.find((u) =>
             u.username === username && u.password === password
        )
        if(user === undefined) this.isLogged = false
        else this.isLogged = true
        return user
    }

    logout() {
        this.isLogged = false
    }

    isAuthenticated() {
        return this.isLogged;
    }
}
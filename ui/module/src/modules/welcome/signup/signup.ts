import {autoinject} from "aurelia-dependency-injection";
import {SecurityService, User} from "aire/api/security";

@autoinject
export class Signup {

    private user: User = new User();

    constructor(private securityService: SecurityService) {
        
        
    }

    attached() {
    }

    signup() {
    }

    login() {
    }

}
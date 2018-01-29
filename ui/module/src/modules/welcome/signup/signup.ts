import {autoinject} from "aurelia-dependency-injection";
import {SecurityService, User} from "aire/api/security";
import {Aurelia} from "aurelia-framework";
import {I18N} from "aurelia-i18n";

@autoinject
export class Signup {

    private user: User = new User();

    constructor(
        private i18n: I18N,
        private securityService: SecurityService
    ) {
        
    }

    attached() {
    }

    signup() {
    }

    login() {
    }

}
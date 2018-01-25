import {autoinject} from "aurelia-dependency-injection";
import {I18N} from "aurelia-i18n";
import {SecurityService, User} from "aire/api/security";


@autoinject
export class Login {

    private user: User = new User();

    constructor(private locale: I18N, private securityService: SecurityService) {

    }

    attached() {
    }

    login() {
        // console.log("login");
        this.securityService.login(this.user);
    }


}
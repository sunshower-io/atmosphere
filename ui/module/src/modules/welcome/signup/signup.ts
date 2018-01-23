import {autoinject} from "aurelia-dependency-injection";
import {SecurityService} from "lib/core/security/security-service";

@autoinject
export class Signup {

    // private user: User;

    constructor(private securityService: SecurityService) {
        // this.user = new User(null, null);
    }

    attached() {
        // const emailField = new mdc.textField.MDCTextField(document.querySelector('#email').parentNode);
        // const passwordField = new mdc.textField.MDCTextField(document.querySelector('#password').parentNode);
    }

    signup() {
        // console.log(this.user);
    }

    login() {
        // this.auth.router.navigateToRoute('login');
    }

}
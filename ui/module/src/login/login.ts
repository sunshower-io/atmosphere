// import * as mdc from 'material-components-web';
import Auth from './auth';
import User from './user';
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class Login {

    private user: User;

    constructor(private auth: Auth) {
        this.user = new User(null, null);
    }

    attached() {
        // const emailField = new mdc.textField.MDCTextField(document.querySelector('#email').parentNode);
        // const passwordField = new mdc.textField.MDCTextField(document.querySelector('#password').parentNode);
    }

    login() {
        console.log(this.user);
    }

    signup() {
        this.auth.router.navigateToRoute('signup');
    }

}
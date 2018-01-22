// import * as mdc from 'material-components-web';
import User from './/user';
import Auth from './auth';
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class Signup {

    private user: User;

    constructor(private auth: Auth) {
        this.user = new User(null, null);
    }

    attached() {
        // const emailField = new mdc.textField.MDCTextField(document.querySelector('#email').parentNode);
        // const passwordField = new mdc.textField.MDCTextField(document.querySelector('#password').parentNode);
    }

    signup() {
        console.log(this.user);
    }

    login() {
        this.auth.router.navigateToRoute('login');
    }

}
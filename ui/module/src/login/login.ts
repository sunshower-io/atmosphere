import {MDCTextField} from '@material/textfield'

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
        let emailField = new MDCTextField(document.querySelector('#email').parentNode);
        let passwordField = new MDCTextField(document.querySelector('#password').parentNode);
        
        console.log(emailField);
    }

    login() {
        console.log(this.user);
    }

    signup() {
        this.auth.router.navigateToRoute('signup');
    }

}
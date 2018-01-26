import {I18N} from "aurelia-i18n";
import {SecurityService, User} from "aire/api/security";
import {Aurelia, autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {AuthenticationPage} from "../authentication-page";

@autoinject
export class Activate extends AuthenticationPage{

    private user: User = new User();


    constructor(private locale: I18N,
                router: Router,
                aurelia: Aurelia,
                securityService: SecurityService) {
        super(router, aurelia, securityService);
    }

    async submit(): Promise<void> {
        let activation = await this.securityService.activate(this.user);
        return this.authenticate(this.user);
    }


}
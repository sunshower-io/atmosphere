import {
    User,
    SecurityService
} from "aire/api/security";

import {Router} from "aurelia-router";
import {Aurelia} from "aurelia-framework";
import {set, StorageMode} from "aire/api/storage";
import {configureClient} from "init/configure-plugins";
import {configureAuthentication} from "main";

export class AuthenticationPage {

    protected message : string;

    constructor(
        private router: Router, 
        private aurelia: Aurelia, 
        protected securityService: SecurityService
    ) {

    }


    protected async authenticate(user:User) : Promise<void> {
        try {
            let authentication = await this.securityService.login(user);
            set(
                "sunshower-auth-token",
                authentication.token.value,
                StorageMode.Local
            );
            configureAuthentication(
                this.aurelia, 
                authentication
            );
            configureClient(
                this.aurelia, 
                authentication.token.value
            );
            this.router.navigate('/', {replace: true, trigger: false});
            await this.aurelia.setRoot('modules/main/index');
        } catch(err) {
            this.message = "We're sorry, we weren't able to log you in.";
            if (err.status === 404) {
                this.message += "\nYou may not be approved."
            } else if (err.status == 401) {
                this.message += "\nPlease check your username/password."
            } else {
                this.message += "\nSomething has gone awry."
            }
            return Promise.reject(err);
        }
    }

}
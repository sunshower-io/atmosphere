import {SecurityService, User} from "aire/api/security";
import {set, StorageMode} from "aire/api/storage";
import {configureClient} from "init/configure-plugins";
import {Router} from "aurelia-router";
import {Aurelia} from "aurelia-framework";

export class AuthenticationPage {

    protected error :string;

    constructor(private router: Router, private aurelia: Aurelia, protected securityService: SecurityService) {

    }


    protected async authenticate(user:User) : Promise<void> {
        try {
            let authentication = await this.securityService.login(user);
            set(
                "sunshower-auth-token",
                authentication.token.value,
                StorageMode.Local
            );
            console.log("FUCK" + JSON.stringify(authentication));
            console.log("TOKEN", authentication.token);
            // await this.securityService.authenticateByToken(authentication.token);
            this.router.navigate('/', {replace: true, trigger: false});
            configureClient(this.aurelia, authentication.token.value);
            await this.aurelia.setRoot('modules/main/index');
        } catch(err) {
            console.log(err);
            this.error = "We're sorry, we weren't able to log you in.";
            if (err.status === 404) {
                this.error += "\nYou may not be approved."
            } else if (err.status == 401) {
                this.error += "\nPlease check your username/password."
            }
            return Promise.reject(err);
        }
    }

}
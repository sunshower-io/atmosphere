import {autoinject} from "aurelia-dependency-injection";
import {I18N} from "aurelia-i18n";
import {SecurityService, User} from "aire/api/security";
import {Aurelia} from "aurelia-framework";
import {Router} from "aurelia-router";
import {configureClient} from "init/configure-plugins";
import {set, StorageMode} from "aire/api/storage";


@autoinject
export class Login {

    private user: User = new User();

    constructor(private locale: I18N,
                private router: Router,
                private aurelia: Aurelia,
                private securityService: SecurityService,) {
    }

    attached() {
    }

    async login(): Promise<void> {
        let authentication = await this.securityService.login(this.user);
        set(
            "sunshower-auth-token", 
            authentication.token.value, 
            StorageMode.Local
        );
        await this.securityService.authenticateByToken(authentication.token);
        this.router.navigate('/', {replace: true, trigger: false});
        configureClient(this.aurelia, authentication.token.value);
        await this.aurelia.setRoot('modules/main/index');
    }


}
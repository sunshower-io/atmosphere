import {I18N} from "aurelia-i18n";
import {autoinject} from "aurelia-dependency-injection";
import {RegistrationRequest} from "lib/auth/signup/model";
import {RegistrationService} from "lib/auth/signup/service";

@autoinject
export class Signup {

    private request: RegistrationRequest = new RegistrationRequest();

    constructor(
        private i18n: I18N,
        private service: RegistrationService
    ) {
        
    }

    attached() {
        
    }

    async signup() {
        let result = await this.service.register(this.request);
    }


}
import {I18N} from "aurelia-i18n";
import {autoinject} from "aurelia-dependency-injection";
import {RegistrationRequest} from "lib/auth/signup/model";
import {RegistrationService} from "lib/auth/signup/service";

@autoinject
export class Signup {

    private request: RegistrationRequest = new RegistrationRequest();

    protected message : string;

    constructor(
        private i18n: I18N,
        private service: RegistrationService
    ) {
        
    }

    attached() {
        
    }

    async signup() : Promise<void> {
        try {
            let result = await this.service.register(this.request);
            this.message = "Thanks for signing up. We'll be in touch."
        } catch(err) {
            if (err.status === 409) {
                this.message = 'Darn, that login seems to be taken.'
            } else {
                this.message = 'Oops! Something has gone awry.'
            }
        }
    }


}
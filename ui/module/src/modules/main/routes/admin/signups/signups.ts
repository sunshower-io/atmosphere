import {User} from "aire/api/security";
import {autoinject} from "aurelia-framework";
import {RegistrationService} from "lib/auth/signup/service";
import {RegistrationRequest} from "lib/auth/signup/model";

@autoinject
export class Approvals {

    private users : RegistrationRequest[];

    constructor(
        private service: RegistrationService
    ) {
    }
    
    async attached() : Promise<void> {
        this.users = await this.service.list();
    }
    
    async approve(req: RegistrationRequest) {
        await this.service.approve(req.registrationId);
    }

}
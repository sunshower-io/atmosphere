import {User} from "aire/api/security";
import {autoinject} from "aurelia-framework";
import {RegistrationService} from "lib/auth/signup/service";
import {RegistrationRequest} from "lib/auth/signup/model";

@autoinject
export class Approvals {

    private users : RegistrationRequest[];

    constructor(private service: RegistrationService) {
        // this.users = [
        //     new User({"first-name": 'Wabo',
        //         "last-name": 'Dabo', "email-address": 'wabo@dabo.com', username: 'wabberino'}),
        //     new User({"email-address": 'schnorp@dorp.com', username: 'wabbleporp'})
        // ];
    }
    
    async attached() : Promise<void> {
        this.users = await this.service.list();
    }
    
    


    approve(user) {
        console.log('heckin approve this person:', user);
        // user.active = true;
    }

}
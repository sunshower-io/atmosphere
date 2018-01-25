import {autoinject, bindable} from "aurelia-framework";
import {SecurityService, User} from "aire/api/security";

@autoinject
export class Activate {


    @bindable
    private user: User = new User();
    @bindable firstName: string;


    constructor(private securityService: SecurityService) {

    }

    async submit(): Promise<void> {
        let activation = await this.securityService.activate(this.user);
        console.log(activation);
    }


}
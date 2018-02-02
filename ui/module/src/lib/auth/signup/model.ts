import {Serializable} from "aire/lib/lang";

export class RegistrationConfirmation {

    constructor(o ?: any) {
        if (o) {
            Object.assign(this, o);
        }
    }
}

export class RegistrationRequest implements Serializable {


    username: string;
    password: string;
    lastName: string;
    firstName: string;
    emailAddress: string;
    registrationId: string;

    constructor(o ?: any) {
        if (o) {
            this.username = o['username'];
            this.lastName = o['last-name'];
            this.firstName = o['first-name'];
            this.emailAddress = o['email-address'];
            this.registrationId = o['registration-id'];
        }
    }

    public toJson(): string {
        this['email-address'] = this.emailAddress;
        this.emailAddress = undefined;
        return JSON.stringify(this);
    }


}
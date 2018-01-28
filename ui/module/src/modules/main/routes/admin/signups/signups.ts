import {User} from "aire/api/security";

export class Approvals {

    private users : User[];

    constructor() {
        this.users = [
            new User({"first-name": 'Wabo',
                "last-name": 'Dabo', "email-address": 'wabo@dabo.com', username: 'wabberino'}),
            new User({"email-address": 'schnorp@dorp.com', username: 'wabbleporp'})
        ];
    }


    approve(user) {
        console.log('heckin approve this person:', user);
        // user.active = true;
    }

}
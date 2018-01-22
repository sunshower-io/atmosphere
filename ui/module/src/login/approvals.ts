import User from "./user";

export class Approvals {

    private hasMenu : boolean;
    private users : User[];

    constructor() {
        this.users = [
            new User('wab@dab.com', 'password'),
            new User('wabber@dabber.com', 'password')
        ];
    }

    approve(user) {
        user.active = !user.active;
    }

}
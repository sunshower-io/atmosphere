import {Router, RouterConfiguration} from 'aurelia-router';

export default class Auth {
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'login'], name: 'login', moduleId: './login', nav: false, title: 'Get in here' },
            { route: 'signup', name: 'signup', moduleId: './signup', nav: false, title: 'Let me in' }
        ]);

        this.router = router;


    }
}

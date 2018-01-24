import {Router, RouterConfiguration} from 'aurelia-router';
import {Aurelia, inject} from "aurelia-framework";
import {ActivationStep, SecurityService} from "aire/api/security";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class Auth {
    public router: Router;

    constructor(private aurelia: Aurelia, private securityService: SecurityService) {

    }

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Sunshower';
        config.addAuthorizeStep(new ActivationStep(this.securityService, "activate"));
        config.map([
            {
                route: ['', 'login'],
                name: 'login',
                moduleId: 'modules/welcome/login/login',
                nav: true,
                title: 'Log In',
                settings: {
                    isActive: true,
                }
            }, {
                route: 'signup',
                name: 'signup',
                moduleId: 'modules/welcome/signup/signup',
                nav: true,
                title: 'Sign Up'
            }, {
                route: 'activate',
                name: 'activate',
                moduleId: 'modules/welcome/activate/activate',
                nav: true,
                title: 'Activate',
            }
        ]);
        config.mapUnknownRoutes('apps/auth/login/login');
        this.router = router;
    }
}
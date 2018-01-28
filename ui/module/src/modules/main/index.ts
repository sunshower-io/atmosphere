import {AuthenticationManager, User} from "aire/api/security";
import {autoinject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";

@autoinject
export class Sunshower {

    private router: Router;

    constructor(private user: User,
                private authenticationManager: AuthenticationManager) {


    }

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Sunshower';
        config.map([
            {
                route: 'plugins',
                name: 'plugins',
                moduleId: 'modules/main/routes/plugins/index',
                nav: true,
                title: 'Plug-ins',
                settings: {
                    t: "main.routes.plugins",
                    icon: "apps",
                    isActive: true
                }
            },
            {
                route: 'settings',
                name: 'settings',
                moduleId: 'modules/main/routes/settings/index',
                nav: true,
                title: 'Settings',
                settings: {
                    t: "main.routes.settings",
                    icon: 'settings',
                }
            }, {
                route: 'users',
                name: 'users',
                moduleId: 'modules/main/routes/users/index',
                nav: true,
                title: 'Manage Users',
                settings: {
                    t: "main.routes.users",
                    icon: 'person_outline'
                }
            }, {
                route: 'main',
                name: 'main',
                moduleId: 'modules/main/routes/main/index',
                nav: true,
                title: 'Main',
                settings: {
                    t: "main.routes.main",
                    icon: 'home'
                }
            },
            {
                route: 'administration',
                name: 'administration',
                moduleId: 'modules/main/routes/admin/index',
                nav: true,
                title: 'Administration',
                settings: {
                    t: "main.routes.admin",
                    icon: 'home'
                }
            }

        ]);
        config.mapUnknownRoutes('modules/main/routes/main/index');
        this.router = router;
    }

    private async logout(): Promise<void> {
        await this.authenticationManager.logout();
        window.location.reload(true);
    }

}
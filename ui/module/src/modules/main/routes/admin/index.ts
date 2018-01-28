import {Router, RouterConfiguration} from "aurelia-router";

export class Administration {
    
    private router: Router;

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Administration';
        config.map([
            {
                route: 'signups',
                name: 'signups',
                moduleId: 'modules/main/routes/admin/signups/signups',
                nav: true,
                title: 'Signups',
                settings: {
                    t: "main.routes.admin",
                    icon: 'home'
                }
            },

            {
                route: 'system',
                name: 'system',
                moduleId: 'modules/main/routes/admin/system/system',
                nav: true,
                title: 'System',
                settings: {
                    t: "main.routes.admin",
                    icon: 'home'
                }
            }
        ]);
        
        config.mapUnknownRoutes('modules/main/routes/admin/signups/signups');
        this.router = router;
    }
    
    
}
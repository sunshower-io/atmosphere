import {AuthenticationManager, User} from "aire/api/security";
import {autoinject} from "aurelia-framework";
import {NavModel, Router, RouterConfiguration} from "aurelia-router";
import {Routes} from "routes";
import {Drawer} from "aire/components/drawer";
import {CompositionEngine} from "aurelia-templating";
import {StructureAwareRouter} from 'aire/routing';
import Admin = Routes.Admin;
import Main = Routes.Main;

@autoinject
export class Sunshower extends StructureAwareRouter {

    private parentRoutes = Main;
    private router: Router;
    private drawer: Drawer;

    constructor(private user: User,
                private compositionEngine: CompositionEngine,
                private authenticationManager: AuthenticationManager) {
        super();

    }


    shouldExpand(row: NavModel): boolean {
        return this.drawer.expanded && this.hasChildren(Main, row.config.name);
    }


    public configureRouter(config: RouterConfiguration, router: Router) {
        this.routeConfig(Admin).isChildOf(Main, "administration");
        config.title = 'Sunshower';
        config.map(Routes.Main);
        config.mapUnknownRoutes('modules/main/routes/main/index');
        this.router = router;
    }

    private hide() {
        this.drawer.close();
    }


    private async logout(): Promise<void> {
        await this.authenticationManager.logout();
        window.location.reload(true);
    }

}
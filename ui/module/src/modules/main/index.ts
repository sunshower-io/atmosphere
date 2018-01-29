import {AuthenticationManager, User} from "aire/api/security";
import {autoinject} from "aurelia-framework";
import {NavModel, Router, RouterConfiguration} from "aurelia-router";
import {Routes} from "routes";
import {Drawer} from "aire/components/drawer";
import {CompositionEngine} from "aurelia-templating";
import {
    StructureAwareRouter
} from 'aire/routing';
import Admin = Routes.Admin;
import Main = Routes.Main;
import 'jquery';

@autoinject
export class Sunshower extends StructureAwareRouter {

    private router: Router;
    private drawer: Drawer;
    private parentRoutes = Main;
    private parents: Element[] = [];
    private expanded: Map<number, boolean> = new Map<number, boolean>();

    constructor(private user: User,
                private compositionEngine: CompositionEngine,
                private authenticationManager: AuthenticationManager) {
        super();

    }
    
    toggle(idx: number) : void {
        let ul = this.parents[idx],
            expanded = this.expanded.get(idx);
        if(expanded) {
            $(ul).slideUp();
            this.expanded.set(idx, false);
        } else {
            $(ul).slideDown();
            this.expanded.set(idx, true);
        }
    }

    navigate(parent: string, name: string) : void {
        try {
            this.router.navigate(parent + "/" + name);
        } finally {
            this.hide();
        }
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
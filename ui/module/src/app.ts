import {Router, RouterConfiguration} from 'aurelia-router';
import {Routes} from "./routes";

export class App {
    public router: Router;

    public configureRouter(
        config: RouterConfiguration, 
        router: Router
    ) {
        config.title = 'Sunshower';
        config.map(Routes.Root);
        this.router = router;
    }
}

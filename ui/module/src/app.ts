import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Sunshower';
    config.map([
      { route: ['', 'style-guide'],  name: 'style-guide', moduleId: 'style-guide', nav: false, title: 'Style Guide' },
      { route: 'login', name: 'login', moduleId: 'login/auth', nav: false, title: 'Atmosphere' },
      { route: 'approvals', name: 'approvals', moduleId: 'login/approvals', nav: false, title: 'Approvals' }
    ]);

    this.router = router;


  }
}

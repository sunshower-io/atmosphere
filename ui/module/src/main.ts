import {Aurelia} from 'aurelia-framework';
import {Application} from './lib/sunshower';
import {
    authenticate, 
    configureAuthenticated, 
    configureClient, 
    configurePlugins
} from "init/configure-plugins";

export function configure(aurelia: Aurelia) {
    configureClient(aurelia);
    configurePlugins(aurelia);
    aurelia.start().then(() => aurelia.setRoot('modules/welcome/welcome')).then(configureApplication);
    // configurePlugins(aurelia);
    // try {
    //     configureAuthenticated(authenticate(aurelia), aurelia);
    // } catch (e) {
    //     configureClient(aurelia);
    //     aurelia.start().then(() => aurelia.setRoot('modules/welcome/welcome')).then(configureApplication);
    // }

}


function configureApplication(a: Aurelia): void {
    let application = new Application(a.container);
    window.Application = application;
}

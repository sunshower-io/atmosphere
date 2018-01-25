import {Aurelia} from 'aurelia-framework';
import {Application} from './lib/sunshower';
import {checkAuthentication, configureClient, configurePlugins} from "init/configure-plugins";

export function configure(aurelia: Aurelia) {
    configurePlugins(aurelia);
    checkAuthentication(aurelia).then(t => {
        configureClient(aurelia, t.token.value);
        aurelia.start().then(() => aurelia.setRoot("modules/main/index"));
    }).catch(t => {
        configureClient(aurelia);
        aurelia.start().then(() => aurelia.setRoot('modules/welcome/welcome')).then(configureApplication);
    });



}


function configureApplication(a: Aurelia): void {
    let application = new Application(a.container);
    window.Application = application;
}

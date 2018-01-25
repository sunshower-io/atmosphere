import {Aurelia} from 'aurelia-framework';
import {Application} from './lib/sunshower';
import {configurePlugins} from "init/configure-plugins";
import {HttpClient} from "aurelia-fetch-client";
import {PipelineStep} from "aurelia-router";

export function configure(aurelia: Aurelia) {
    configurePlugins(aurelia);
    let client = new HttpClient();
    client.configure(cfg => {
        cfg.useStandardConfiguration()
            .withBaseUrl("/kernel/api/v1/")
            .withDefaults({
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        
    });
    aurelia.container.registerInstance(HttpClient, client);
    aurelia.start().then(() => aurelia.setRoot('modules/welcome/welcome')).then(configureApplication);
}



function configureApplication(a: Aurelia): void {
    let application = new Application(a.container);
    window.Application = application;
}

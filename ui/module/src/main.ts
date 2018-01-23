import {Aurelia} from 'aurelia-framework';
import {Application} from './lib/sunshower';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .plugin('sunshower-layout')
        // .plugin('github:sunshower-io/aurelia-layout')
        // .plugin('frapper')
        .standardConfiguration();
        // .developmentLogging();
    

    // Uncomment the line below to enable animation.
    // aurelia.use.plugin('aurelia-animator-css');

    // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    // aurelia.use.plugin('aurelia-html-import-template-loader')

  
    aurelia.start().then(() => aurelia.setRoot()).then(configureApplication);
}

function configureApplication(a : Aurelia) : void {
    let application = new Application(a.container);
    window.Application = application;
}

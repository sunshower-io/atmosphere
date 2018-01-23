import {Aurelia} from "aurelia-framework";
import {Backend, TCustomAttribute} from "aurelia-i18n";

export function configurePlugins(aurelia:Aurelia) {
    aurelia.use
        .plugin('sunshower-layout')
        // .plugin('aurelia-i18n', (instance) => {
        //     let aliases = ['t', 'i18n'];
        //     TCustomAttribute.configureAliases(aliases);
        //     instance.i18next.use(Backend.with(aurelia.loader));
        //     return instance.setup({
        //         backend: {
        //             loadPath: './locales/{{lng}}/{{ns}}.json',
        //         },
        //         attributes: aliases,
        //         lng: 'de',
        //         fallbackLng: 'en',
        //         debug: false
        //     });
        // })
        .standardConfiguration();
}

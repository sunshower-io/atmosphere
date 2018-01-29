import {Aurelia, LogManager} from "aurelia-framework";
import {Backend, TCustomAttribute} from "aurelia-i18n";
import {HttpClient} from "aurelia-fetch-client";
import {Authentication, SecurityService, Token, User} from "aire/api/security";
import {get, StorageMode} from "aire/api/storage";


let log = LogManager.getLogger('atmosphere:init');

export function configureAuthenticated(
    auth: Promise<Authentication>, 
    aurelia: Aurelia
) {
    
    
}

export function configurePlugins(aurelia: Aurelia) {
    aurelia.use
        .plugin('aire', (instance) => {
        })
        .plugin('aurelia-i18n', (instance) => {
            let aliases = ['t', 'i18n'];
            TCustomAttribute.configureAliases(aliases);
            instance.i18next.use(Backend.with(aurelia.loader));
            return instance.setup({
                backend: {
                    loadPath: './locales/{{lng}}/{{ns}}.json',
                },
                attributes: aliases,
                lng: 'en',
                fallbackLng: 'en',
                debug: false
            });
        })
        .developmentLogging()
        .standardConfiguration();
}


function createClient(root: string, headers: Object): HttpClient {
    let client = new HttpClient();
    client.configure(cfg => {
        cfg.useStandardConfiguration()
            .withBaseUrl(root)
            .withDefaults({
                headers: headers
            })
    });
    return client;
}



export async function checkAuthentication(aurelia: Aurelia): Promise<Authentication> {
    log.debug("checking authentication...");
    let token = get('sunshower-auth-token', StorageMode.Local);
    if(token) {
        log.debug("found token from previous session...attempting to validate", token);
        let securityService = new SecurityService(configureClient(aurelia));
        return securityService.authenticateByToken(new Token(token));
    } 
    log.debug("authentication failed");
    throw new Error("not authenticated");
    
}

export function configureClient(aurelia: Aurelia, authToken?: string): HttpClient {
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };

    if (authToken) {
        headers['X-AUTH-TOKEN'] = authToken;
    }
    aurelia.container.unregister(HttpClient);
    let client = createClient("/kernel/api/v1/", headers);
    aurelia.container.registerInstance(HttpClient, client);
    return client;
}

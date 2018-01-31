

import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";
import {RegistrationRequest} from "./model";
import {LogManager} from "aurelia-framework";



@autoinject
export class RegistrationService {
    
    constructor(private client: HttpClient)  {
        
        
    }
    
    async approve(id: string) : Promise<string> {
        log.debug("approving registration with id:", id);
        try {
            
            let r = await this.client.fetch(`signup/${id}/approve`),
                s = await r.json();
            return s.value;
        } catch(e) {
            log.debug("encountered error while approving signup: ", e);
        }
    }
    
    async list() : Promise<RegistrationRequest[]> {
        try {
            let r = await this.client.fetch('signup'),
                rs = await r.json();
            return rs.map(t => new RegistrationRequest(t));
        } catch(e) {
            log.debug("encountered error while listing signups: ", e);
            return [];
        }
    }
    
    
    async register(request: RegistrationRequest) : Promise<void> {
        log.debug("registering user...");
        try {
            let result = await this.client.fetch('signup', {
                method: 'put',
                body: request.toJson()
            });
        } catch(e) {
            log.debug("failed to register user.  Reason: ", e);
        }
    }
    
}

let log = LogManager.getLogger('atmosphere:registration-service');
import {HttpClient} from "aurelia-fetch-client";
import {autoinject} from "aurelia-dependency-injection";
import {Extension} from "lib/plugins";

@autoinject
export class PluginService {
    constructor(private client: HttpClient) {

    }

    async list(): Promise<Extension[]> {
        
        let pl = await this.client.fetch('extensions'),
            pljs = await pl.json();
        return pljs.map(t => new Extension(t));
    }
}
import {PluginService, Extension} from "lib/plugins";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class Plugins {

    private plugins : Extension[];
    
    constructor(private pluginService: PluginService) {
        
    }

    async attached() {
        this.plugins = await this.getPlugins();
        console.log(this.plugins);
    }


    async getPlugins() : Promise<Extension[]> {
        return await this.pluginService.list();
    }
}




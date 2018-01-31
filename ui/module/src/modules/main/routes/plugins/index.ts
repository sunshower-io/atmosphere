import {PluginService} from "lib/plugins/service";
import {autoinject} from "aurelia-framework";
import {Extension} from "lib/plugins/model";

@autoinject
export class Plugins {

    private plugins : Extension[];
    
    constructor(
        private pluginService: PluginService
    ) {
        
    }

    async attached() {
    console.log("attached");
        this.plugins = await this.getPlugins();
        console.log(this.plugins);
    }


    async getPlugins() : Promise<Extension[]> {
        return await this.pluginService.list();
    }
}




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
        for (let i = 0; i < this.plugins.length; i++) {
            let plugin = this.plugins[i];
            if ((plugin as any).coordinates.name.toLowerCase() === 'atmosphere') {
                (this.plugins[i] as any).coordinates.group = 'Manage plugins, settings, permissions and more';
            }
            if ((plugin as any).coordinates.name.toLowerCase() === 'stratosphere') {
                (this.plugins[i] as any).coordinates.group = 'Gain high-level insights into any infrastructure on any cloud';
            }
        }
        console.log(this.plugins);
    }


    async getPlugins() : Promise<Extension[]> {
        return await this.pluginService.list();
    }
}



export class Plugins {

    private plugins : Plugin[];

    attached() {

        this.plugins = this.getPlugins();

        this.plugins.push(new Plugin('See More', '', ''))
    }


    getPlugins() : Plugin[] {
        return [
            new Plugin('Atmosphere', 'Manage plugins, settings, permissions and more', ''),
            new Plugin('Stratosphere', 'Gain high-level insights into any infrastructure on any cloud', '')
        ];
    }
}



export class Plugin {

    constructor(private name : string,
                private description : string,
                private link : any) {}

}
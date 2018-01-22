
import {HttpClient} from "aurelia-fetch-client";
import {autoinject, Container} from "aurelia-dependency-injection";

declare global {
    interface Window {
        Application : Application
    }
}

export class Application {
    
    
    constructor(private readonly container: Container) {
        
    }
    
    isLoading() : boolean {
        return this.container.get(HttpClient).isRequesting;
    }
}


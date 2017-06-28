import {Component} from "@angular/core";
import {YourPlugin} from "nativescript-oauth";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./Login.html",
})
export class Login {

    public onTap(): void {
        console.log("testing tap");

        let plugin: YourPlugin = new YourPlugin();
        plugin.testing();
    }
}
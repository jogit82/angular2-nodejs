import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <div class="container-fluid">
    <div class="row"><h3><p class="text-center">Qwk.io</p></h3></div>
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills text-center">
                    <li routerLinkActive="active"><a [routerLink]="['/create']">Create</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/about']">About</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/guidelines']">Guidelines</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/examples']">Examples</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/legal']">Legal</a></li>
                </ul>
            </nav>
        </header>
    </div>
        <hr>
    `
})
export class HeaderComponent {

}
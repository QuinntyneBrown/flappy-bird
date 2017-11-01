import {enableProdMode} from "@angular/core";
import {AppModule} from "./app/app.module";
import {environment} from "./app/environment";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
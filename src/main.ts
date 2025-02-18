import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { registerLicense } from '@syncfusion/ej2-base';



// Registering Syncfusion license key
registerLicense(environment.syncFusionLicense);

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

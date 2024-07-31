/* eslint-disable no-console */
// * Base
import { bootstrapApplication } from '@angular/platform-browser';

// * Config
import { appConfig } from './app/app.config';

// * Components
import AppComponent from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((e) => console.error(e));

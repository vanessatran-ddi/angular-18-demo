import "@angular/compiler"
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@abgov/web-components';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



// import '@angular/compiler';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';
//
// platformBrowserDynamic().bootstrapModule(AppComponent, appConfig)
//   .catch(err => console.error(err));

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
// import '@abgov/web-components';
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

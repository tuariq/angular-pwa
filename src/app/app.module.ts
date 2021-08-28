import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { CoreModule } from './core/core.module';
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { BodyComponent } from './shared/body/body.component';
import { BottomNavbarMobileComponent } from './shared/bottom-navbar-mobile/bottom-navbar-mobile.component';
import { TopNavbarMobileComponent } from './shared/top-navbar-mobile/top-navbar-mobile.component';
import { BodyMobileComponent } from './shared/body-mobile/body-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    BodyComponent,
    BottomNavbarMobileComponent,
    TopNavbarMobileComponent,
    BodyMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

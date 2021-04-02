import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// bootstrap imports
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// main components
import { HeaderComponent } from './core/components/header/header.component';
// enviornment configurations
import { environment } from 'src/environments/environment';
// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // bootstrap modules
    NgbModule,
    NgbDropdownModule,
    // firebase modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

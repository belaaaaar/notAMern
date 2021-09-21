import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CreatePageComponent } from './components/page/create-page/create-page.component';
import { LoginPageComponent } from './components/page/login-page/login-page.component';
import { LinkPageComponent } from './components/page/link-page/link-page.component';
import { LinksListPageComponent } from './components/page/links-list-page/links-list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  exports: [
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePageComponent,
    LoginPageComponent,
    LinkPageComponent,
    LinksListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NervoHeaderComponent } from './widgets/nervo-header/nervo-header.component';
import { NervoFooterCopyrightComponent } from './widgets/nervo-footer-copyright/nervo-footer-copyright.component';
import { NervoHomeModule } from './features/nervo-home/nervo-home.module';

@NgModule({
  declarations: [
    AppComponent,
    NervoHeaderComponent,
    NervoFooterCopyrightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NervoHomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

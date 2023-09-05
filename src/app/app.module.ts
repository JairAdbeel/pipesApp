import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importación de locale date - Referencia de idioma en los pipes
import { registerLocaleData } from '@angular/common';
import LocaleEsPE from '@angular/common/locales/es-PE';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

// Registro de locale date - Referencia de idioma en los pipes
registerLocaleData(LocaleEsPE);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
  ],
  providers: [
    {
        // Definir idioma por defecto en toda la app
        // Asi evitamos insertar  en la config en cada pipe que necesitamos
        provide: LOCALE_ID, useValue: 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

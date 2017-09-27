import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ArquivoPage } from '../pages/arquivo/arquivo';
import { ListPage } from '../pages/list/list';
import { CadastroCompraPage } from '../pages/list/cadastro-compra/cadastro-compra';
import { CadastroItemPage } from '../pages/itens/cadastro-item/cadastro-item';
import { ItensPage } from '../pages/itens/itens';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { CompraProvider } from '../providers/compra/compra';
import { ItemProvider } from '../providers/item/item';



@NgModule({
  declarations: [
    MyApp,
    ArquivoPage,
    ListPage,
    CadastroCompraPage,
    CadastroItemPage,
    ItensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArquivoPage,
    ListPage,
    CadastroCompraPage,
    CadastroItemPage,
    ItensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    DatabaseProvider,
    CompraProvider,
    ItemProvider,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }

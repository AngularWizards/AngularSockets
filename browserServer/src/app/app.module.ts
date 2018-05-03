import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InterfaceService} from "./interface.service";
import {WebsocketService} from "./websocket.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InterfaceService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

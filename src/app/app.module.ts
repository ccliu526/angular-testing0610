import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsService } from './caption/tools.service';
import { AfternoonComponent } from './afternoon/afternoon.component';

@NgModule({
  declarations: [
    AppComponent,
    AfternoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // ToolsService,
    // { provide: 'constValue', useValue: 'hello' },
    // { provide: ToolsService, useClass: ToolsService },
    // { provide: 'Tools2Service', useExisting: ToolsService },
    // { provide: 'Tools3Service', useFactory: ()=>{return new ToolsService()} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

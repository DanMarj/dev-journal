import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './components/main-panel/main-panel/main-panel.component';
import { SidePanelComponent } from './components/side-panel/side-panel/side-panel.component';
import { EntryListComponent } from './components/main-panel/entry-list/entry-list.component';
import { ContributionGraphComponent } from './components/main-panel/contribution-graph/contribution-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    SidePanelComponent,
    EntryListComponent,
    ContributionGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

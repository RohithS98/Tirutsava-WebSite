import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ProshowsComponent } from './proshows/proshows.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    WorkshopsComponent,
    ProshowsComponent,
    TimelineComponent,
    GalleryComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

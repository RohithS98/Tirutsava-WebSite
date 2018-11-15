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
import { ImagesComponent } from './images/images.component';
import { ImageService } from './images/shared/image.service';
import { CloseMenuDirective } from '../directives/close-menu.directive';
import { ArchiveComponent } from './archive/archive.component';
import { Mad4ideasComponent } from './mad4ideas/mad4ideas.component';
import { MadComponent } from './mad/mad.component';

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
    ContactusComponent,
    ImagesComponent,
    ArchiveComponent,

    CloseMenuDirective,

    Mad4ideasComponent,

    MadComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

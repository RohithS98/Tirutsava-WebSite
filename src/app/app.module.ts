import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { CloseMenuDirective } from '../directives/close-menu.directive';
import { ArchiveComponent } from './archive/archive.component';
import { MadComponent } from './mad/mad.component';
import { MadFormComponent } from './mad-form/mad-form.component';

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
    ArchiveComponent,
    CloseMenuDirective,
    MadComponent,
    MadFormComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ProshowsComponent } from './proshows/proshows.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ImagesComponent } from './images/images.component';
import { ArchiveComponent } from './archive/archive.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'events', component: EventsComponent},
    {path: 'workshops', component: WorkshopsComponent},
    {path: 'proshows', component: ProshowsComponent},
    {path: 'timeline', component:TimelineComponent},
    {path: 'gallery', component:GalleryComponent},
    {path: 'aboutus', component:AboutusComponent},
    {path: 'contactus', component:ContactusComponent},
    {path: 'archive', component:ArchiveComponent},
    {path: 'sponsor', component:SponsorsComponent},
    
    {path: "image/:id", component: ImagesComponent},

    {path: '', redirectTo: 'home' , pathMatch:'full'}
]

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forRoot(routes)]
})
 export class AppRoutingModule{}
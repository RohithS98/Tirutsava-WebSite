import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatRadioModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatInputModule,
        MatRadioModule
    ],
})

export class MaterialModule { }

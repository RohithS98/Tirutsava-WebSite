import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
        BrowserAnimationsModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatInputModule
    ],
})

export class MaterialModule { }

import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatInputModule
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

import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule, 
    MatToolbarModule, 
    MatCardModule,
    MatButtonToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCardModule, 
        MatToolbarModule,
        MatButtonToggleModule
    ],
    exports: [
        MatButtonModule, 
        MatCardModule, 
        MatToolbarModule,
        MatButtonToggleModule
    ],
})

export class MaterialModule { }
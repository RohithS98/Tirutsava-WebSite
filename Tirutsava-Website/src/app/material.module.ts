import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCardModule, 
        MatToolbarModule
    ],
    exports: [
        MatButtonModule, 
        MatCardModule, 
        MatToolbarModule
    ],
})

export class MaterialModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridCellComponent } from "./components/grid-cell.component";
import { GridRowComponent } from "./components/grid-row.component";
import { GridComponent } from "./components/grid.component";

const declarables = [
    AppComponent,
    GridCellComponent,
    GridRowComponent,
    GridComponent
];

@NgModule({
    imports: [        
        BrowserModule,        
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }
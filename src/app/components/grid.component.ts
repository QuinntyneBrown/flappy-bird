import { Component, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
    templateUrl: "./grid.component.html",
    styleUrls: ["./grid.component.css"],
    selector: "ce-grid"
})
export class GridComponent {    
    @Input()
    grid: Array<any>;
}

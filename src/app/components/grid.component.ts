import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./grid.component.html",
    styleUrls: ["./grid.component.css"],
    selector: "ce-grid"
})
export class GridComponent {    
    @Input()
    grid: Array<any>;
}
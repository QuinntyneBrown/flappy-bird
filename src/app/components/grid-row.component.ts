import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./grid-row.component.html",
    styleUrls: ["./grid-row.component.css"],
    selector: "ce-grid-row"
})
export class GridRowComponent {
    @Input()
    row: Array<any>;
}

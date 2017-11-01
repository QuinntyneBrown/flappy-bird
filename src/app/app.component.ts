import { Component } from "@angular/core";
import { Bird } from "./models/bird";
import { Tower } from "./models/tower";

@Component({
    templateUrl:"./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app"
})
export class AppComponent {
    ngOnInit() {        
        for (let i = 0; i < 20; i++) {
            this.grid.push(new Array(30).fill('red'));
        }

        this.grid[this.bird.height][this.bird.position] = "yellow";

        this.timerId = setInterval(() => {
            let towersCopy = this.towers.slice();

            for (let i = 0; i < this.towers.length; i++) {

                for (let j = 0; j < this.towers
            }


            this.bird.height++;

            if (this.bird.height > 19 || this.bird.height < 0)
                this.bird.height = 10;

            let grid = [];
            for (let i = 0; i < 20; i++) { grid.push(new Array(30).fill('red')); }

            grid[this.bird.height][this.bird.position] = "yellow";

            this.grid = grid;

        }, 200);
    }

    public grid: Array<any> = [];

    public bird: Bird = new Bird();

    public timerId: any;

    public towers: Array<Tower> = [];
}

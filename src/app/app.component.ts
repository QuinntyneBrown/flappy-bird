import { Component, HostListener } from "@angular/core";
import { Bird } from "./models/bird";
import { Tower } from "./models/tower";

@Component({
    templateUrl:"./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app"
})
export class AppComponent {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
    }

    ngOnInit() {        
        for (let i = 0; i < 20; i++) {
            this.grid.push(new Array(30).fill('red'));
        }

        this.towers.push(new Tower(false, 5, 3));
        this.towers.push(new Tower(true, 8, 5));
        this.towers.push(new Tower(false, 6, 7));
        this.towers.push(new Tower(false, 5, 9));
        this.towers.push(new Tower(true, 8, 24));
        this.towers.push(new Tower(false, 6, 14));
        this.towers.push(new Tower(false, 5, 17));
        this.towers.push(new Tower(true, 8, 21));
        
        this.grid[this.bird.height][this.bird.position] = "yellow";

        this.timerId = setInterval(() => {
            this.bird.height++;
            let towers = this.towers.slice();
            
            if (this.bird.height > 19 || this.bird.height < 0)
                this.bird.height = 10;
            
            let grid = [];
            for (let i = 0; i < 20; i++) { grid.push(new Array(30).fill('red')); }

            for (let i = 0; i < towers.length; i++) {                
                towers[i].position--;

                if (towers[i].position < 0) {
                    towers[i].position = 29;
                    towers[i].height = Math.floor(Math.random() * 7) + 3;
                }

                for (let j = 0; j < towers[i].height; j++) {
                    if (!towers[i].upright) {
                        grid[j][towers[i].position] = "blue";
                    } else {
                        grid[19 - j][towers[i].position] = "blue";
                    }
                }
            }
            
            grid[this.bird.height][this.bird.position] = "yellow";

            this.grid = grid;

        }, 200);
    }
    
    @HostListener("click")
    public handleClick(event$) { this.bird.height -= 3; }

    public grid: Array<any> = [];

    public bird: Bird = new Bird();

    public timerId: any;

    public towers: Array<Tower> = [];
}

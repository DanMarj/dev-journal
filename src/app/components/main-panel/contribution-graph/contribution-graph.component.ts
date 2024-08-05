import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution-graph',
  templateUrl: './contribution-graph.component.html',
  styleUrls: ['./contribution-graph.component.css']
})
export class ContributionGraphComponent implements OnInit {

  // Remaining months of 2024, and days per month
  months: string[] = ["August", "September", "October", "November", "December"];
  days: number[] = [31,30,31,30,31]; // sum is 153
  contributionOnMonthDay: boolean[][];

  constructor() {
    this.contributionOnMonthDay = this.generateRandomContributions(this.days);
  }

  ngOnInit(): void {
  }

  private generateRandomContributions(daysPerMonth: number[]): boolean[][] {
    let ret: boolean[][] = [[],[],[],[],[]];
    for(let i = 0; i<daysPerMonth.length; i++) {
      for(let j = 0; j<daysPerMonth[i]; j++) {
        const randP = Math.random();
        if(randP<0.5) {
          ret[i][j] = true;
        } else {
          ret[i][j] = false;
        }
      }
    }
    console.log("ret", ret);
    return ret;
  }

}

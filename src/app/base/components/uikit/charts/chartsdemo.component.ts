import {Component, Input, OnInit} from '@angular/core';

type ChartType = 'line' | 'bar' | 'pie' | 'polarArea' | 'doughnut' | 'radar';

@Component({
    templateUrl: './chartsdemo.component.html',
    selector: 'charts-component',
})
export class ChartsDemoComponent implements OnInit {
    @Input() chartType: ChartType = 'line';
    @Input() chartData: any;
    @Input() chartOptions: any;
    @Input() chartTitle!: string;
    @Input() chartTitleSize: number = 1.5;

    ngOnInit() {

    }
}

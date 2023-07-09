import { Component, OnInit, Input } from '@angular/core';

type ChartType = 'line' | 'bar' | 'pie' | 'polarArea' | 'doughnut' | 'radar';

@Component({
    templateUrl: './chartsdemo.component.html',
    selector: 'charts-component',
})
export class ChartsDemoComponent implements OnInit {
    @Input() chartType: ChartType = "line";
    @Input() chartData: any;
    @Input() chartOptions: any;
    @Input() chartTitle!: string;
    @Input() chartTitleSize: number = 1.5;

    ngOnInit() {
        this.chartTitle = this.chartTitle ? this.chartTitle : 'Gráfico';
        switch (this.chartType) {
            case 'line':
                if (!this.chartData) {
                    this.chartData = {
                        /* Dados padrão para gráfico de linha */
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {

                    };
                }
                break;
            case 'bar':
                if (!this.chartData) {
                    this.chartData = {
                        /* Dados padrão para gráfico de barra */
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {
                        /* Opções padrão para gráfico de barra */
                    };
                }
                break;
            case 'pie':
                if (!this.chartData) {
                    this.chartData = {
                        /* Dados padrão para gráfico de pizza */
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {
                        /* Opções padrão para gráfico de pizza */
                    };
                }
                break;
            case 'polarArea':
                if (!this.chartData) {
                    this.chartData = {
                        /* Dados padrão para gráfico de área polar */
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {
                        /* Opções padrão para gráfico de área polar */
                    };
                }
                break;
            case 'doughnut':
                if (!this.chartData) {
                    this.chartData = {
                        /* Dados padrão para gráfico de rosquinha */
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {
                        /* Opções padrão para gráfico de rosquinha */
                    };
                }
                break;
            case 'radar':
                if (!this.chartData) {
                    this.chartData = {
                        /* Dados padrão para gráfico de radar */
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {
                        /* Opções padrão para gráfico de radar */
                    };
                }
                break;
            default:
                break;
        }
    }
}

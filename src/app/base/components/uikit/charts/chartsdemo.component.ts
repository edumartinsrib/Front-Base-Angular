import { Component, OnInit, Input } from '@angular/core';

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
        this.chartTitle = this.chartTitle ? this.chartTitle : 'Gráfico';
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        switch (this.chartType) {
            case 'line':
                if (!this.chartData) {
                    this.chartData = {
                        labels: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                        ],
                        datasets: [
                            {
                                label: 'First Dataset',
                                data: [65, 59, 80, 81, 56, 55, 40],
                                fill: false,
                                backgroundColor:
                                    documentStyle.getPropertyValue(
                                        '--primary-500'
                                    ),
                                borderColor:
                                    documentStyle.getPropertyValue(
                                        '--primary-500'
                                    ),
                                tension: 0.4,
                            },
                            {
                                label: 'Second Dataset',
                                data: [28, 48, 40, 19, 86, 27, 90],
                                fill: false,
                                backgroundColor:
                                    documentStyle.getPropertyValue(
                                        '--primary-200'
                                    ),
                                borderColor:
                                    documentStyle.getPropertyValue(
                                        '--primary-200'
                                    ),
                                tension: 0.4,
                            },
                        ],
                    };
                }
                if (!this.chartOptions) {
                    this.chartOptions = {
                        plugins: {
                            legend: {
                                labels: {
                                    fontColor: textColor,
                                },
                            },
                        },
                        scales: {
                            x: {
                                ticks: {
                                    color: textColorSecondary,
                                },
                                grid: {
                                    color: surfaceBorder,
                                    drawBorder: false,
                                },
                            },
                            y: {
                                ticks: {
                                    color: textColorSecondary,
                                },
                                grid: {
                                    color: surfaceBorder,
                                    drawBorder: false,
                                },
                            },
                        },
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
                console.log(this.chartOptions, this.chartData);
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

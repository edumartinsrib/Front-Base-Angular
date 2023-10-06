import {Component, Input} from '@angular/core';

@Component({
    selector: 'dashboard-card',
    templateUrl: './card-dashboard.component.html',
    styleUrls: []
})
export class CardComponent {
    @Input() title: string = 'Orders';
    @Input() value: number = 152;
    @Input() newCount: number = 24;
    @Input() sinceLastVisit: string = 'since last visit';
    @Input() icon: string = 'pi pi-shopping-cart';
}


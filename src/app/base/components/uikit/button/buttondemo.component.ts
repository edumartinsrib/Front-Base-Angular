import {Component, Input, OnInit} from '@angular/core';

declare type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';

@Component({
    templateUrl: './buttondemo.component.html',
    selector: 'button-component',
})
export class ButtonDemoComponent implements OnInit {
    @Input() buttons: Button[] = [];


    ngOnInit() {
    }

    load(index: number) {
    }
}

interface Button {
    type?: string;
    label?: string;
    class?: string;
    disabled?: boolean;
    icon?: string;
    iconPos?: ButtonIconPosition;
    model?: any[];
    loading?: boolean;
    loadingIcon?: string;
    image?: string;
    styleClass?: string;
}

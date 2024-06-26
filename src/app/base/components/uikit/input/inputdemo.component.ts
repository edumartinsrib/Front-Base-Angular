import {Component, Input} from '@angular/core';
import {ComponentData} from './interfaces/input-interface';

@Component({
    templateUrl: 'inputdemo.component.html',
    selector: 'app-input'
})
export class InputDemoComponent  {
    @Input() componentType!: ComponentData["componentType"];

    @Input() input: ComponentData["input"];

    @Input() textarea: ComponentData["textarea"];

    @Input() autoComplete: ComponentData["autoComplete"];

    @Input() calendar: ComponentData["calendar"];

    @Input() inputNumber: ComponentData["inputNumber"];

    @Input() chips: ComponentData["chips"];

    @Input() slider: ComponentData["slider"];

    @Input() rating: ComponentData["rating"];

    @Input() colorPicker: ComponentData["colorPicker"];

    @Input() knob: ComponentData["knob"];

    @Input() radioButton: ComponentData["radioButton"];

    @Input() checkbox: ComponentData["checkbox"];

    @Input() inputSwitch: ComponentData["inputSwitch"];

    @Input() listbox: ComponentData["listbox"];

    @Input() dropdown: ComponentData["dropdown"];

    @Input() multiselect: ComponentData["multiselect"];

    @Input() toggleButton: ComponentData["toggleButton"];

    @Input() selectOneButton: ComponentData["selectOneButton"];

    @Input() inputGroup: ComponentData["inputGroup"];
    leftIcon: any;
    componentPlaceholder: any;
    floatLabel: any;

    constructor() {
    }
}

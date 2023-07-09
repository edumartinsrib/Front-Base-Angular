interface InputText {
min: any;
max: any;
step: any;
    id: string;
    value: string;
    type: string;
    readonly?: boolean;
    disabled?: boolean;
    icon?: string;
    iconStyle?: any;
    floatLabel?: boolean;
    email?: boolean;
    maxlength?: number;
    minlength?: number;
    pattern?: string | RegExp;
    align?: string;
    autocapitalize?: string;
    autocomplete?: string;
    autofocus?: boolean;
    contentEditable?: boolean;
    defaultValue?: any;
    checked?: boolean;
    valueAsDate?: Date;
    valueAsNumber?: number;
    dir?: string;
    style?: any;
}

interface Textarea {
value: any;
    componentRows: number;
    componentCols: number;
    componentPlaceholder: string;
    readonly?: boolean;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    pattern?: string | RegExp;
    autocapitalize?: string;
    autocomplete?: string;
    autofocus?: boolean;
    contentEditable?: boolean;
    defaultValue?: any;
    dir?: string;
    style?: any;
}

interface AutoComplete {
    selectedItems: Event;
    filteredItems: any[];
    filterItem(event: any): void;
    filterBy: string;
    componentDropdown: boolean;
}

interface Calendar {
intputId: string;
    showIcon?: boolean | undefined;
    inputId?: string;
}

interface InputNumber {
    mode?: string;
    currency?: string;
    locale?: string;
    localeMatcher?: string;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    prefix?: string;
    suffix?: string;
    showButtons?: boolean;
    buttonLayout?: string;
    incrementButtonClass?: string;
    decrementButtonClass?: string;
    incrementButtonIcon?: string;
    decrementButtonIcon?: string;
    allowEmpty?: boolean;
    inputStyle?: any;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: number;
    size?: number;
    placeholder?: string;
    tabindex?: string;
    inputId?: string;
    name?: string;
    autofocus?: boolean;
    required?: boolean;
    componentShowButtons?: boolean;
    componentMinValue?: number;
    componentMaxValue?: number;
}

interface Chips {
    addOnBlur?: boolean;
    addOnTab?: boolean;
    allowDuplicate?: boolean;
    ariaLabelledBy?: string;
    disabled?: boolean;
    field?: string;
    inputId?: string;
    inputStyle?: any;
    inputStyleClass?: string;
    max?: number;
    ngPlural?: any;
    onAdd?(event: any): void;
    onBlur?(event: any): void;
    onChipClick?(event: any): void;
    onClear?(event: any): void;
    onRemove?(event: any): void;
    routerLink?: string;
    routerLinkActiveOptions?: any;
    routerLinkActive?: string | string[];
    showClear?: boolean;
    style?: any;
    styleClass?: string;
    tabindex?: number;
    hidden?: boolean;
    draggable?: boolean;
    title?: string;
    slot?: string;
}

interface Slider {
animate: boolean;
orientation: string;
range: boolean;
valSlider: any;
ngStyle: { [klass: string]: any; }|null|undefined;
required: string|boolean;
hidden: any;
draggable: any;
    value: number;
    type?: string;
    readonly?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    style?: any;
    email?: boolean;
    maxlength?: number;
    minlength?: number;
    pattern?: string | RegExp;
    align?: string;
    autocapitalize?: string;
    autocomplete?: string;
    autofocus?: boolean;
    contentEditable?: boolean;
    defaultValue?: any;
    checked?: boolean;
    valueAsDate?: Date;
    valueAsNumber?: number;
    dir?: string;
}

interface Rating {
readonly: boolean;
    cancel?: boolean;
    disabled?: boolean;
    iconCancelClass?: string;
    iconCancelStyle?: any;
    iconOffClass?: string;
    iconOffStyle?: any;
    isCustomCancelIcon?: boolean;
    stars?: number;
    hidden?: boolean;
}

interface ColorPicker {
    valColor: string;
    disabled?: boolean;
    format?: string;
    hideTransitionOptions?: string;
    inline?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: string;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    appendTo?: any;
    autoZIndex?: boolean;
    baseZIndex?: number;
}

interface Knob {
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    valueTemplate?: string;
    step?: number;
    min?: number;
    max?: number;
    size?: number;
    showValue?: boolean;
    strokeWidth?: number;
    rangeColor?: string;
    valueColor?: string;
}

interface RadioButton {
    options: { id: string; value: any; label: string; labelStyleClass?: string }[];
    name: string;
    formControlName?: string;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    disabled?: boolean;
}

interface Checkbox {
    options: { id: string; value: any; label: string; labelStyleClass?: string }[];
    name: string;
    value: any[];
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    disabled?: boolean;
    binary?: boolean;
    falseValue?: any;
    trueValue?: any;
    checkboxIcon?: string;
}

interface InputSwitch {
falseValue: any;
trueValue: any;
    valSwitch: Event;
    name: string;
    value: boolean;
    option: { id: string };
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    disabled?: boolean;
}

interface Listbox {
    options: any[];
    selectedItems: Event;
    filter?: boolean;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    multiple?: boolean;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    filterBy?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    filterPlaceHolder?: string;
    checkbox?: boolean;
    dataKey?: string;
    group?: boolean;
    listStyle?: string;
    listStyleClass?: string;
    optionDisabled?: string | ((item: any) => boolean);
    optionGroupChildren?: string;
    optionGroupLabel?: string;
    metaKeySelection?: boolean;
}

interface Dropdown {
group: any;
    dropdownOptions: any[];
    selectedValue: any;
    placeholder: string;
    options: any[];
    selectedItems: Event;
    filter?: boolean;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    filterBy?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    dataKey?: string;
    optionDisabled?: string | ((item: any) => boolean);
    optionGroupChildren?: string;
    optionGroupLabel?: string;
    appendTo?: any;
    autoDisplayFirst?: boolean;
    autofocus?: boolean;
    autofocusFilter?: boolean;
    dropdownIcon?: string;
    hideTransitionOptions?: string;
}

interface Multiselect {
    dynamicOptions: any[];
    dynamicSelectedValues: any[];
    dynamicPlaceholder: string;
    dynamicLabel: string;
    dynamicDisplay: string;
    dropdownOptions: any[];
    selectedValue: any;
    placeholder: string;
    options: any[];
    selectedItems: any[];
    filter?: boolean;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    filterBy?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    dataKey?: string;
    group?: boolean;
    optionDisabled?: string | ((item: any) => boolean);
    optionGroupChildren?: string;
    optionGroupLabel?: string;
    appendTo?: any;
    autofocus?: boolean;
    autofocusFilter?: boolean;
    templateImage?: string;
    classTemplate?: string;
    classImage?: string;
    styleImage?: any;
    hideTransitionOptions?: string;
}

interface ToggleButton {
    dynamicValue: boolean;
    dynamicOnLabel: string;
    dynamicOffLabel: string;
    dynamicStyle: any;
    selectedValue: any;
    selectedItems: any[];
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    autofocus?: boolean;
}

interface SelectOneButton {
    selectedValue: any;
    options: any[];
    selectedItems: any[];
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    ngStyle?: any;
    ngModel?: any;
    required?: boolean;
    pattern?: string | RegExp;
    styleClass?: string;
    ngClass?: any;
    tabindex?: number;
    style?: any;
    routerLink?: string;
    hidden?: boolean;
    dataKey?: string;
    optionDisabled?: string | ((item: any) => boolean);
    autofocus?: boolean;
    optionLabel?: string;
    optionValue?: string;
    multiple?: boolean;
}

interface InputGroup {
    beforeItems: { type: string; icon?: string; label?: string }[];
    afterItems: { type: string; icon?: string; label?: string }[];
}

export interface ComponentData {
    componentType: string;
    componentPlaceholder?: string;
    input?: InputText;
    textarea?: Textarea;
    autoComplete?: AutoComplete;
    calendar?: Calendar;
    inputNumber?: InputNumber;
    chips?: Chips;
    slider?: Slider;
    rating?: Rating;
    colorPicker?: ColorPicker;
    knob?: Knob;
    radioButton?: RadioButton;
    checkbox?: Checkbox;
    inputSwitch?: InputSwitch;
    listbox?: Listbox;
    dropdown?: Dropdown;
    multiselect?: Multiselect;
    toggleButton?: ToggleButton;
    selectOneButton?: SelectOneButton;
    inputGroup?: InputGroup;
}

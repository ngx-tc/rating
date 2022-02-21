import {
  Component,
  ElementRef, EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RatingType } from './rating';

@Component({
  selector: 'tc-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class') get class() {
    return 'tc-rating';
  };
  @HostBinding('class.rating-disabled')	@Input() disabled: boolean = false;
  @HostBinding('class.rating-numbered')	get numbered() {
    return this.number;
  };
  @HostBinding('style.--tc-rating-size') @Input() size: string;
  @HostBinding('style.--tc-rating-color-default') get colorDefault() {
    return this.color && this.color[0];
  };
  @HostBinding('style.--tc-rating-color-hover') get colorHover() {
    return this.color && this.color[1];
  };
  @HostBinding('style.--tc-rating-color-active') get colorActive() {
    return this.color && this.color[2];
  };

  @Input() itemsNumber: number = 5;
  @Input() iconClass: string = null;
  @Input() type: string = RatingType.default;
  @Input() color: string[];
  @Input() value: number = 0;

  @Output() changedValue: EventEmitter<number> = new EventEmitter();

  icons: number[];
  number: boolean = false;
  touched: boolean = false;

  private onChange = (value: number) => {};
  private onTouched = () => {};

  // set value
  set innerValue(value: number) {
    if (value >= 0 && value <= this.itemsNumber && value !== this.value) {
      this.value = value;
      this.writeValue(value);
      this.onChange(value);
      this.changedValue.emit(value);
    }
  }

  // get value
  get innerValue(): number {
    return this.value;
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.color = [];
  }

  ngOnInit() {
    this.number = this.type === RatingType.number;
    this.icons = Array.from(new Array(this.itemsNumber), (val, index) => index + 1);

    this.innerValue = this.value <= this.itemsNumber ? this.value : 0;
  }

  // write value
  writeValue(value: number): void {
    this.value = value;
  }

  // register OnChange event
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // register OnTouched event
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // set value
  onClick(val: number, disabled: boolean): void {
    if (!disabled) {
      this.innerValue = val;
      this.markAsTouched();
    }
  }

  // add class 'hover'
  addHover(i: number, val: number, disabled: boolean = this.disabled): void {
    if (!disabled) {
      this.icons.forEach((icon, index) => {
        const itemRef: Object = this.element.nativeElement.children[index];

        if (i > index) {
          this.renderer.addClass(itemRef, 'hover');
        } else {
          this.renderer.removeClass(itemRef, 'hover');
        }
      });
    }
  }

  // remove class 'hover'
  removeHover(val: number, disabled: boolean = this.disabled): void {
    if (!disabled) {
      this.icons.forEach((icon, index) => {
        const itemRef: Object = this.element.nativeElement.children[index];

        this.renderer.removeClass(itemRef, 'hover');
      });
    }
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}

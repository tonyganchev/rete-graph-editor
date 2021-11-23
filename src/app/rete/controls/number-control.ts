import { Control } from "rete";
import { AngularControl } from "rete-angular-render-plugin";
import { Type } from "@angular/core";
import { NumberNgControl } from "./num.component";

export class NumControl extends Control implements AngularControl {
  component: Type<NumberNgControl>;
  props: { [key: string]: unknown };

  constructor(public emitter: any, public key: any, readonly = false) {
    super(key);

    this.component = NumberNgControl;
    this.props = {
      readonly,
      change: (v: any) => this.onChange(v),
      value: 0,
      mounted: () => {
        this.setValue(+(this.getData(key) as any) || 0);
      }
    };
  }

  onChange(val: number) {
    this.setValue(val);
    this.emitter.trigger("process");
  }

  setValue(val: number) {
    this.props.value = +val;
    this.putData(this.key, this.props.value);
  }
}

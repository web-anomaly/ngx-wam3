/*
 * MIT License
 *
 * Copyright (c) 2024 Web Anomaly
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {Component, computed, input} from "@angular/core";

export type Wam3ButtonVariant = "filled" | "filled-tonal" | "outlined" | "text";

/**
 * # Button
 * An implementation of [Material 3 Button](https://m3.material.io/components/buttons).
 *
 * ### Variants
 *
 * #### Filled
 * Default variant.
 *
 * ```html
 * <button wam3-button variant="filled">
 *   <span wam3-button-leading>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 *   <span wam3-button-label>Label</span>
 *   <span wam3-button-trailing>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 * </button>
 * ```
 *
 * #### Filled Tonal
 *
 * ```html
 * <button wam3-button variant="filled-tonal">
 *   <span wam3-button-leading>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 *   <span wam3-button-label>Label</span>
 *   <span wam3-button-trailing>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 * </button>
 * ```
 *
 * #### Outlined
 *
 * ```html
 * <button wam3-button variant="outlined">
 *   <span wam3-button-leading>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 *   <span wam3-button-label>Label</span>
 *   <span wam3-button-trailing>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 * </button>
 * ```
 *
 * #### Text
 *
 * ```html
 * <button wam3-button variant="text">
 *   <span wam3-button-leading>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 *   <span wam3-button-label>Label</span>
 *   <span wam3-button-trailing>
 *     <i wam3-icon>icon_name</i>
 *   </span>
 * </button>
 * ```
 *
 * ### Imports
 *
 * ```typescript
 * @Component({
 *   imports: [
 *     Wam3ButtonComponent,
 *     Wam3ButtonLabelComponent,
 *     Wam3ButtonLeadingComponent,
 *     Wam3ButtonTrailingComponent,
 *     Wam3IconComponent,
 *   ],
 * })
 * ```
 *
 * ### Managing states
 *
 * #### Disabled
 *
 * Only works on `<button>`.
 *
 * ```html
 * <button wam3-button disabled>
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 */
@Component({
  selector: "a[wam3-button], button[wam3-button]",
  standalone: true,
  imports: [],
  templateUrl: "./wam3-button.component.html",
  styleUrl: "./wam3-button.component.css",
  host: {
    "[class]": "elementClasses()",
  },
})
export class Wam3ButtonComponent {
  public readonly variant = input<Wam3ButtonVariant>("filled");
  protected readonly elementClasses = computed(() => {
    const array = ["wam3-button"];
    switch (this.variant()) {
      case "filled-tonal":
        array.push("wam3-button__filled-tonal");
        break;
      case "outlined":
        array.push("wam3-button__outlined");
        break;
      case "text":
        array.push("wam3-button__text");
        break;
    }
    return array;
  });
}

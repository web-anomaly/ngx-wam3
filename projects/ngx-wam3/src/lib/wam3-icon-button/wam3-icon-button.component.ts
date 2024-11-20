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

import {Component, computed, input, ViewEncapsulation} from "@angular/core";

export type Wam3IconButtonVariant = "standard" | "filled" | "filled-tonal" | "outlined";

/**
 * # Icon Button
 * An implementation of [Material 3 Icon Button](https://m3.material.io/components/icon-buttons).
 *
 * ### Variants
 *
 * #### Standard
 * Default variant.
 *
 * ```html
 * <button wam3-icon-button variant="standard">
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 *
 * #### Outlined
 * ```html
 * <button wam3-icon-button variant="outlined">
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 *
 * #### Filled
 * ```html
 * <button wam3-icon-button variant="filled">
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 *
 * #### Filled Tonal
 * ```html
 * <button wam3-icon-button variant="filled-tonal">
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 *
 * ### Imports
 * ```typescript
 * @Component({
 *   imports: [
 *     Wam3IconButtonComponent,
 *     Wam3IconComponent,
 *   ],
 * })
 * ```
 *
 * ### Managing states
 *
 * #### Selected
 * Works on both `<a>` and `<button>`.
 *
 * ```html
 * <button wam3-icon-button [selected]="true">
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 *
 * #### Disabled
 * Only works on `<button>`.
 *
 * ```html
 * <button wam3-icon-button disabled>
 *   <i wam3-icon>icon_name</i>
 * </button>
 * ```
 */
@Component({
  selector: "a[wam3-icon-button], button[wam3-icon-button]",
  imports: [],
  templateUrl: "./wam3-icon-button.component.html",
  styleUrls: [
    "./wam3-icon-button.component.sass",
    "../../styles/icon-button.scss",
  ],
  host: {
    "[class]": "elementClasses()",
  },
  encapsulation: ViewEncapsulation.None
})
export class Wam3IconButtonComponent {
  public readonly variant = input<Wam3IconButtonVariant>("standard");
  public readonly selected = input(false);
  protected readonly elementClasses = computed(() => {
    const array = ["wam3-icon-button"];
    switch (this.variant()) {
      case "filled":
        array.push("wam3-icon-button__filled");
        break;
      case "filled-tonal":
        array.push("wam3-icon-button__filled-tonal");
        break;
      case "outlined":
        array.push("wam3-icon-button__outlined");
        break;
      case "standard":
      default:
        break;
    }
    if (this.selected()) array.push("wam3-icon-button__selected");
    return array;
  });
}

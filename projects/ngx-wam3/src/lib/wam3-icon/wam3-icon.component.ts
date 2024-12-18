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

@Component({
  selector: "i[wam3-icon]",
  imports: [],
  templateUrl: "./wam3-icon.component.html",
  styleUrls: [
    "./wam3-icon.component.sass",
    "../../styles/icon.scss",
  ],
  host: {
    "[class]": "elementClasses()",
  },
  encapsulation: ViewEncapsulation.None
})
export class Wam3IconComponent {
  public readonly fill = input(false);
  protected readonly elementClasses = computed(() => {
    const array = ["wam3-icon"];
    if (this.fill()) array.push("wam3-icon__filled");
    return array;
  });
}

# Material 3 for Angular

## Installation

### Angular CLI (Recommended)

```shell
ng add @webanomaly/ngx-wam3
```

### Via NPM CLI

```shell
npm install @webanomaly/ngx-wam3
```

## Configuring styles

Add the following into your application styles.

```scss

@use "@webanomaly/ngx-wam3" as wam3;

body {
  @include wam3.core;
}

@media only screen and (prefers-color-scheme: light) {
  body {
    @include wam3.theme-light;
  }
}

@media only screen and (prefers-color-scheme: dark) {
  body {
    @include wam3.theme-night;
  }
}
```

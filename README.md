# NgrxCrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
`
1) ng add @ngrx/store@latest --minimal false
2) ng add @ngrx/schematics@latest
3) ng g store ProductState --statePath=products/store --module=products/products.module.ts --stateInterface=ProductState
4) ng g action products/store/product
5) ng add @ngrx/store-devtools@latest
6) create select from - https://ngrx.io/guide/store/selectors
7) Add Effects - ng add @ngrx/effects@latest
8) ng g effect products/store/product --skipTests=true --module=products/products.module.ts
9) ng add @ngrx/entity@latest
10) 

`

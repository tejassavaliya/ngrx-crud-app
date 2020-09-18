# NgrxCrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server
Run `npm run dev` for a dev server.

## Dummy Data server
Run `npm run emp-server` for a employee server.

Run `npm run server` for a product server.



### Follow the steps for set up the NgRx
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

`

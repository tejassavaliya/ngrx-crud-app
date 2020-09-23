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
##### ************************************

`(*) npm install @ngrx/{store,effects,entity,store-devtools} --save`
   
   1) `ng add @ngrx/store@latest --minimal false`
            
            `CREATE src/app/reducers/index.ts (359 bytes)`
           
            `UPDATE src/app/app.module.ts (555 bytes)
            
            `UPDATE package.json (1859 bytes)
            
            `√ Packages installed successfully.`
      
   2) `ng add @ngrx/store-devtools@latest`
   
   3) `ng add @ngrx/schematics@latest`
   
        -- `Create store directory at root`
      
        -- `run -  mkdir store`
        
   4) `ng generate effect store/app --root -m app.module.ts --group`
   
        -- `move 'reducer' directory from root to 'store' directory`
        
   5) `ng g m employees --module app.module --route employees`
   
   6) `ng generate store EmployeeState --statePath=employees/store --module=employees/employees.module.ts --stateInterface=EmployeeState`
  
   7) `Update the reducer`
   
        `ng generate reducer employees/store/employee --module employees/employees.module.ts --group`
          
   8) `ng generate action employees/store/employee --group`
   
   9) `create employee model file as interface data`
   
   10) `create employee service`
   
       `ng g s employees/services/employee `
   
   11) `ng generate effect employees/store/employee -m employees/employees.module.ts --group`   

   12) ` ng generate selector employees/store/employee --group`
   
   13) ` ng g c employees/components/employee-list`
   
   14) ` ng g c employees/components/employee-add-edit`
   
   15) ` ng g c pages/home`


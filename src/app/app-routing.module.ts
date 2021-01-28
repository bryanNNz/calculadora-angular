import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalculadoraRoutes } from "./calculadora";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/calculadora',
        pathMatch: 'full'

    },
    ...CalculadoraRoutes
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
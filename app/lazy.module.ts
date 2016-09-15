import { NgModule } from "@angular/core";
import { Ng2BootstrapModule } from "ng2-bootstrap/ng2-bootstrap";
import { RouterModule } from "@angular/router";
import { LazyComponent } from "./lazy.component";



let routes = [
    { path: "", component: LazyComponent }
]

@NgModule({
    declarations: [LazyComponent],
    imports: [Ng2BootstrapModule, RouterModule.forChild(routes)]
})
export class LazyModule {

}
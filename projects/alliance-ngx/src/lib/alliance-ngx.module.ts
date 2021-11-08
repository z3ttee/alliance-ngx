import { NgModule } from '@angular/core';
import { AllianceNgxComponent } from './alliance-ngx.component';
import { AgxButtonComponent } from './buttons/button.component';


@NgModule({
  declarations: [
    AllianceNgxComponent,
    AgxButtonComponent
  ],
  imports: [
  ],
  exports: [
    AllianceNgxComponent,
    AgxButtonComponent    
  ]
})
export class AllianceNgxModule { }

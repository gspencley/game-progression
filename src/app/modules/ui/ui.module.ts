import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { RowComponent } from './components/row/row.component';

const MaterialModules = [ MatDialogModule ];

@NgModule({
  imports: [
    ...MaterialModules,
    CommonModule
  ],
  declarations: [
    CardComponent,
    ButtonComponent,
    RowComponent
  ],
  exports: [
    ...MaterialModules,
    CardComponent,
    ButtonComponent,
    RowComponent
  ],
})
export class UiModule {}

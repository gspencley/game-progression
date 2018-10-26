import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { RowComponent } from './components/row/row.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuControlsComponent } from './components/menu-controls/menu-controls.component';
import { SelectComponent } from './components/select/select.component';
import { LabelComponent } from './components/label/label.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ReactiveFormsModule } from '@angular/forms';

const MaterialModules = [ MatDialogModule ];

@NgModule({
  imports: [
    ...MaterialModules,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    LabelComponent,
    CardComponent,
    ButtonComponent,
    RowComponent,
    LinkComponent,
    InputComponent,
    MenuComponent,
    MenuControlsComponent,
    SelectComponent,
    SeparatorComponent
  ],
  exports: [
    ...MaterialModules,
    CardComponent,
    ButtonComponent,
    RowComponent,
    LinkComponent,
    InputComponent,
    MenuComponent,
    MenuControlsComponent,
    SelectComponent,
    SeparatorComponent
  ],
})
export class UiModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { LinkComponent } from './components/link/link.component';
import { MenuControlsComponent } from './components/menu-controls/menu-controls.component';
import { MenuComponent } from './components/menu/menu.component';
import { RowComponent } from './components/row/row.component';
import { SelectComponent } from './components/select/select.component';
import { SeparatorComponent } from './components/separator/separator.component';

const MaterialModules = [MatDialogModule];

@NgModule({
  imports: [...MaterialModules, CommonModule, RouterModule, ReactiveFormsModule],
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
  ]
})
export class UiModule {}

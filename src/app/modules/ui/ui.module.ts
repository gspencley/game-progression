import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DismissIconComponent, MessageComponent } from './components';
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
  imports: [
    ...MaterialModules,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
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
    SeparatorComponent,
    MessageComponent,
    DismissIconComponent
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
    MessageComponent,
    SelectComponent,
    SeparatorComponent
  ]
})
export class UiModule {}

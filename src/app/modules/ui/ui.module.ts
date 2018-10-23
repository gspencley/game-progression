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

const MaterialModules = [ MatDialogModule ];

@NgModule({
  imports: [
    ...MaterialModules,
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardComponent,
    ButtonComponent,
    RowComponent,
    LinkComponent,
    InputComponent,
    MenuComponent,
    MenuControlsComponent
  ],
  exports: [
    ...MaterialModules,
    CardComponent,
    ButtonComponent,
    RowComponent,
    LinkComponent,
    InputComponent,
    MenuComponent,
    MenuControlsComponent
  ],
})
export class UiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MatMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCardModule, MatMenuModule, MdToolbarModule, MdIconModule],
  exports: [MdButtonModule, MdCardModule, MatMenuModule, MdToolbarModule, MdIconModule],
})

export class MaterialModule { }
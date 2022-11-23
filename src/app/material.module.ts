import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [
  MatIconModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatSidenavModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {
}

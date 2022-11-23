import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GeoService } from './services/geo.service';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog'
import { MaterialModule } from './material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ControlsComponent } from './components/controls/controls.component';
import { AppService } from './services/app.service';
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MatDialog } from '@angular/material/dialog';
// import { MatSelectionList } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, ControlsComponent, DialogContentExampleDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule
    // MatDialog,
    // MatSelectionList
  ],
  providers: [
    AppService,
    GeoService,
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false },
    },
  ],
  bootstrap: [AppComponent],
})


export class AppModule {}

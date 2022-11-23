  import { AfterViewInit, Component } from '@angular/core';
  import { GeoService } from './services/geo.service';
  import { MatBottomSheet } from '@angular/material/bottom-sheet';
  import { MatDialog } from '@angular/material/dialog';
  import { ControlsComponent } from './components/controls/controls.component';
  import { Subscription } from 'rxjs';
  import { AppService } from './services/app.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  })
  export class AppComponent implements AfterViewInit {
    isControlsOpened = false;

    showFiller = false;
    private readonly controlsStateSubscription: Subscription;

    constructor(
      private appService: AppService,
      private geoService: GeoService,
      private bottomSheet: MatBottomSheet,
      public dialog: MatDialog
    ) {
      this.controlsStateSubscription = this.appService.controlsState.subscribe(
        (value) => (this.isControlsOpened = value)
      );
    }

    ngAfterViewInit(): void {
      this.geoService.updateView();
      this.geoService.setTileSource();
      this.geoService.updateSize();
    }

    openDialog() {
      const dialogRef = this.dialog.open(DialogContentExampleDialog);

      // dialogRef.afterClosed().subscribe((result) => {
      //   console.log(`Dialog result: ${result}`);
      // });
    }

    openControls(): void {
      this.bottomSheet.open(ControlsComponent, { autoFocus: false });
    }

  }

  @Component({
    selector: 'app-root',
    templateUrl: './dialog-content-example-dialog.html',
    styleUrls: ['./dialog-content-example-dialog.scss'],
  })
  export class DialogContentExampleDialog {}

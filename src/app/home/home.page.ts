import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  result: string;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {

  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Home header',
      subHeader: 'Home subHeader',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();

    const res = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(res,null,2);
  }

}

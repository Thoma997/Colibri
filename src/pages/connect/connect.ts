import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) {
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });

    };
  }


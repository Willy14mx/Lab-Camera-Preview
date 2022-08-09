import {Component, OnInit} from '@angular/core';
import { DataService, Message } from '../../services/data.service';
import { HTTP, HTTPResponse } from '@awesome-cordova-plugins/http/ngx';
// eslint-disable-next-line max-len
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-camera-dynamic',
  templateUrl: './camera-dynamic.component.html',
  styleUrls: ['./camera-dynamic.component.scss'],
})
export class CameraDynamicComponent  {
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y:0,
    storeToFile : false,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };
    // picture options
   pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  };

  picture = '';
  isToback: true;

  constructor(private data: DataService, private http:  HTTP, private cameraPreview: CameraPreview, private platform: Platform) {}


  ionViewDidEnter(){
    //this.getImageToBlob();

    this.platform.ready().then((values) => {
      console.log('ready');
      this.startCamera();
    });


  }
 




  // start camera

  public startCamera() {
    console.log('entro en camara function');
  this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
    (res) => {
      console.log(res);
      console.log(':D');
    },
    (err) => {
      console.log(err);
      console.log(':C');
    });

  }

  // Set the handler to run every time we take a picture


  public takePicture() {
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
    this.picture = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    console.log(err);
    this.picture = 'assets/img/test.jpg';
  });
}

  // take a picture


  // take a snap shot

  public takeSnapShoot() {
      this.cameraPreview.takeSnapshot(this.pictureOpts).then((imageData) => {
    this.picture = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    console.log(err);
    this.picture = 'assets/img/test.jpg';
  });
  }



  // Switch camera
  public switchCamera() {
  this.cameraPreview.switchCamera();
  }


  // set color effect to negative
  public setColorEfectNegative() {
    this.cameraPreview.setColorEffect('negative');
  }


  // Stop the camera preview

  public stopCameraPreview() {
      this.cameraPreview.stopCamera();
  }

}

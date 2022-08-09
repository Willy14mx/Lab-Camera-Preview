import {Component, OnInit} from '@angular/core';
import { DataService, Message } from '../../services/data.service';
import { HTTP, HTTPResponse } from '@awesome-cordova-plugins/http/ngx';
// eslint-disable-next-line max-len
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { Platform } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  options: AnimationOptions = {
    path: './../../assets/lottie1.json',
  };

  constructor() {}
 
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}

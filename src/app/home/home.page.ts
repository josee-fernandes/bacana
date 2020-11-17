import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photoURL:string;

  cameraOptions: CameraOptions = {
    quality: 100, // qualidade
    destinationType: this.camera.DestinationType.DATA_URL, // destino
    encodingType: this.camera.EncodingType.JPEG, // codificação
    mediaType: this.camera.MediaType.PICTURE, // tipo de mídia
  }

  constructor(private camera: Camera) {}

  takePhoto(){
    this.camera.getPicture(this.cameraOptions).then(imageData => {
      const base64Image = `data:image/jpeg;base64,${imageData}`;
      this.photoURL = base64Image;
    }, err => console.log(err));
  }
}

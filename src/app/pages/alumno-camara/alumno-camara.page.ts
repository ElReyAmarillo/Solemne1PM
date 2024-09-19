import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule, AlertController} from '@ionic/angular';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-alumno-camara',
  templateUrl: './alumno-camara.page.html',
  styleUrls: ['./alumno-camara.page.scss'],
  standalone: true,
  //imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  imports: [IonicModule, RouterModule]
})
export class AlumnoCamaraPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertController.create({

      header: 'Confirmación de asistencia',
      message: 'Se ha registrado su asistencia con éxito',
      buttons: [
            {
            text: 'Entendido',
            role: 'confirm',
            cssClass: 'secondary',
              handler: () => {
                this.router.navigate(['./alumno']);
              }
            }
          ]
    });

    await alert.present();
  }

}

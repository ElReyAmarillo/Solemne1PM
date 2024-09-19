import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 import { IonContent, IonHeader, IonTitle, 
IonToolbar, IonList, IonItem, IonLabel, 
IonButton, IonButtons, IonBackButton, 
  IonAvatar ,IonSelect, IonSelectOption,IonModal,IonImg } from '@ionic/angular/standalone'; 
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-profesor',
  templateUrl: './formulario-profesor.page.html',
  styleUrls: ['./formulario-profesor.page.scss'],
  standalone: true,
imports: [IonAvatar, IonBackButton, IonButtons, IonButton, 
    IonLabel, IonItem, IonList, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSelect, IonSelectOption,IonModal, IonImg, RouterModule] 
  
    /* imports: [IonicModule, RouterModule] */
})
export class FormularioProfesorPage implements OnInit {
  selectedSede: string | null = null;
  selectedAsignatura: string | null = null;
  selectedSeccion: string | null = null;


  constructor(private alertCtrl: AlertController) { }
  
  isFormValid() {
    return this.selectedSede && this.selectedAsignatura && this.selectedSeccion;
  }
  ngOnInit() {
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

}
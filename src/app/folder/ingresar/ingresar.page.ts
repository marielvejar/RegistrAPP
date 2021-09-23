import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  formularioLogin: FormGroup;
  nombre = '';

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    private activatedRoute: ActivatedRoute) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }
  ngOnInit() {
    this.nombre =  this.activatedRoute.snapshot.paramMap.get('id');

  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Bienvenido', usuario.nombre);
      this.router.navigateByUrl(`/inicio/${ usuario.nombre}`);

    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

 

}

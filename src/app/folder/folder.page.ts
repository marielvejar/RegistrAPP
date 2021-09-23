import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  slides = [
    {
      img : 'assets/img/conectados.svg',
      titulo: 'Para que dejes constancia tus asistencias'
    },
    {
      img : 'assets/img/estudio.svg',
      titulo: 'No pierdas tu progreso de estudios'
    },
    {
      img : 'assets/img/logo.svg',
      titulo: 'Con simplemente escanear, ya estás adentro'
    },
  ];

  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

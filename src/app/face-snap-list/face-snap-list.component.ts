import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  // Injection de la dépendance faceSnapServices pour permettre l'accès aux données et à la logique métier.
  // La propriété  est définie comme , ce qui garantit qu'elle ne peut pas être manipulée directement à l'extérieur de la classe.
  constructor(private faceSnapServices: FaceSnapService){}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapServices.getFaceSnaps();
  }
}

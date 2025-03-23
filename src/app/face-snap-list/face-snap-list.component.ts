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

  constructor(private faceSnapServices: FaceSnapService){}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapServices.getFaceSnaps();
  }
}

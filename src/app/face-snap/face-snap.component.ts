import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  hasSnapped!: boolean;

  ngOnInit(): void {
    this.buttonText = 'Oh snap !';
    this.hasSnapped = false;
  }

  onSnap(): void {
    console.log('Avant:', this.hasSnapped);
    if (this.hasSnapped) {
      this.faceSnap.snaps--;
      this.hasSnapped = false;
      this.buttonText = "Oh Snap!";
    } else {
      this.faceSnap.snaps++;
      this.hasSnapped = true;
      this.buttonText = "Oops, un Snap!";
    }
    console.log('Après:', this.hasSnapped);
  }

}


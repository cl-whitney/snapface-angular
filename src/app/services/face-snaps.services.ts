import { FaceSnap } from './../models/face-snap';
import { Injectable } from "@angular/core";

// Ce decorateur transforme la classe FaceSnapService en service Angular
@Injectable({
  // Indique que le service est enregistré au niveau racine de l'application, ce qui garantit qu'il y a une seule instance de ce service (singleton) partagée dans tout le projet.
  providedIn: 'root'
})

export class FaceSnapService {
  // Private empeche l'accès direct à cette propriété depuis l'extérieur de la classe, ce qui protège les données.
    private faceSnaps: FaceSnap[] = [
      new FaceSnap (
        'Whitney',
        'La meilleure developpeuse web !',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        new Date (),
        208
      ),
      new FaceSnap (
        'Eleanor',
        'La meilleure chef de projet !',
        'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        new Date (),
        102
      ).withLocation('Le Ritz, à Paris'),
      new FaceSnap (
        'Benjamin',
        'Le meilleur UX designer ! !',
        'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        new Date (),
        47
      )
    ];

    // La méthode retourne un tableau de FaceSnap
    // Le spread opérateur permet de renvoyer une copie du tableau au lieu de la reférence directe, pour proteger les données internes contre toute modification accidentelle ou intentionelle de l'extérieur.
    getFaceSnaps(): FaceSnap[]{
      return [... this.faceSnaps]
    }

}

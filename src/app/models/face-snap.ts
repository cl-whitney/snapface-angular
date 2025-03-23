export class FaceSnap {
  // Propriété optionnelle
  location?: string;

  // Initialisation des instance de FaceSnap avec des valeurs obligatoires. Le mot public crée automatiquement les propriétés correspondantes et les rend accessibles à l'extérieur de la classe.
  constructor (
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number,
  ) {}

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}

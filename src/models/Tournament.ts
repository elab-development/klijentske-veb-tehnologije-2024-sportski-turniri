export interface ITournament {
  id: number;
  name: string;
  sport: string;
  location: string;
  image: string;
}

export class Tournament implements ITournament {
  id: number;
  name: string;
  sport: string;
  location: string;
  image: string;

  constructor(
    id: number,
    name: string,
    sport: string,
    location: string,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.sport = sport;
    this.location = location;
    this.image = image;
  }

  getInfo(): string {
    return `${this.name} - ${this.sport} - ${this.location}`;
  }
}

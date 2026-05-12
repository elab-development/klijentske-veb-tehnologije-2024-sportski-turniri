export interface ITeam {
  id: number;
  name: string;
  city: string;
  players: number;
}

export class Team implements ITeam {
  id: number;
  name: string;
  city: string;
  players: number;

  constructor(id: number, name: string, city: string, players: number) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.players = players;
  }

  getTeamInfo(): string {
    return `${this.name} iz ${this.city} ima ${this.players} igrača`;
  }
}

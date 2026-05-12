import { Team } from "../models/Team";

export class TeamService {
  static getTeams(): Team[] {
    return [
      new Team(1, "Crveni Lavovi", "Beograd", 12),
      new Team(2, "Plavi Orlovi", "Novi Sad", 10),
      new Team(3, "Zeleni Tigrovi", "Niš", 11),
      new Team(4, "Beli Vukovi", "Kragujevac", 9),
      new Team(5, "Crni Panteri", "Subotica", 13),
    ];
  }
}

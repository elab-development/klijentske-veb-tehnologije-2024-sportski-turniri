import type { ITournament } from "../models/Tournament";

export class TournamentService {
  static getTournaments(): ITournament[] {
    return [
      {
        id: 1,
        name: "Football Cup",
        sport: "Football",
        location: "Belgrade",
        date: "2025-06-20",
        image: "https://picsum.photos/300/200",
      },
      {
        id: 2,
        name: "Basket League",
        sport: "Basketball",
        location: "Novi Sad",
        date: "2025-07-15",
        image: "https://picsum.photos/300/201",
      },
    ];
  }
}

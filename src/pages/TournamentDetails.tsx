import { useParams } from "react-router-dom";
import { TournamentService } from "../service/TournamentService";

const TournamentDetails = () => {
  const { id } = useParams();

  const tournament = TournamentService.getTournamentById(Number(id));

  if (!tournament) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Turnir nije pronađen</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>{tournament.name}</h1>

      <img
        src={tournament.image}
        alt={tournament.name}
        style={{
          width: "400px",
          maxWidth: "100%",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      />

      <p>Sport: {tournament.sport}</p>
      <p>Lokacija: {tournament.location}</p>
      <p>{tournament.getInfo()}</p>
    </div>
  );
};

export default TournamentDetails;

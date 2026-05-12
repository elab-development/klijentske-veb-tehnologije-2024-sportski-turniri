import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TournamentService } from "../service/TournamentService";
import { Tournament } from "../models/Tournament";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const data = TournamentService.getTournaments();
    setTournaments(data);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log("Users API:", data));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log("Posts API:", data));
  }, []);

  const tournamentsPerPage = 4;

  const filteredTournaments = tournaments.filter(
    (tournament) =>
      tournament.name.toLowerCase().includes(search.toLowerCase()) ||
      tournament.sport.toLowerCase().includes(search.toLowerCase()) ||
      tournament.location.toLowerCase().includes(search.toLowerCase()),
  );

  const lastIndex = currentPage * tournamentsPerPage;
  const firstIndex = lastIndex - tournamentsPerPage;

  const currentTournaments = filteredTournaments.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredTournaments.length / tournamentsPerPage);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Tournaments</h1>

      <input
        type="text"
        placeholder="Search tournaments..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{
          padding: "10px",
          width: "300px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {currentTournaments.map((tournament) => (
          <Card
            key={tournament.id}
            id={tournament.id}
            title={tournament.name}
            image={tournament.image}
            sport={tournament.sport}
            location={tournament.location}
          />
        ))}
      </div>

      <div style={{ marginTop: "25px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tournaments;

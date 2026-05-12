import { useEffect, useState } from "react";

export default function Teams() {
  const [teams, setTeams] = useState<string[]>([]);
  const [name, setName] = useState("");

  // učitaj iz localStorage
  useEffect(() => {
    const saved = localStorage.getItem("teams");
    if (saved) {
      setTeams(JSON.parse(saved));
    }
  }, []);

  // svaki put kad se promeni → snimi
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const addTeam = () => {
    if (!name.trim()) return;
    setTeams([...teams, name]);
    setName("");
  };

  const removeTeam = (index: number) => {
    const updated = teams.filter((_, i) => i !== index);
    setTeams(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teams</h1>

      <div style={{ marginTop: "10px" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New team"
          style={{ padding: "10px" }}
        />

        <button onClick={addTeam} style={{ marginLeft: "10px" }}>
          Add
        </button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {teams.map((t, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            {t}
            <button
              onClick={() => removeTeam(i)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  image: string;
  sport: string;
  location: string;
}

const Card = ({ id, title, image, sport, location }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "lightblue",
        boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "16px" }}>
        <h3>{title}</h3>
        <p>Sport: {sport}</p>
        <p>Lokacija: {location}</p>

        <button onClick={() => navigate(`/tournament/${id}`)}>Detalji</button>
      </div>
    </div>
  );
};

export default Card;

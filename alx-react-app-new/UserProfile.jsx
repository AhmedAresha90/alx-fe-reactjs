export default function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "6px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <h2 style={{ color: "blue", margin: "0 0 8px 0" }}>{name}</h2>

      <p style={{ margin: "0 0 6px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{age}</span>
      </p>

      <p style={{ margin: 0, color: "#444" }}>Bio: {bio}</p>
    </div>
  );
}


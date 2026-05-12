const Profile = () => {
  const user = localStorage.getItem("user");

  return (
    <div style={{ padding: "30px" }}>
      <h1>Profile</h1>

      <h2>Dobrodošao, {user}</h2>
    </div>
  );
};

export default Profile;

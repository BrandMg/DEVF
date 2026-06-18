import { Link } from "react-router-dom";

const Profile = ({ user, tweets }) => {
  return (
    <div>
      <h1>Mi Perfil</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>{user.username}</h2>

        <p>Total de Tweets: {tweets.length}</p>
      </div>

      <Link to="/">
        <button>Volver al Inicio</button>
      </Link>

      <h3>Mis Tweets</h3>

      {tweets.length === 0 ? (
        <p>No hay tweets publicados.</p>
      ) : (
        tweets.map((tweet) => (
          <div
            key={tweet.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <p>{tweet.text}</p>
            <small>
              ❤️ {tweet.likes} likes
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
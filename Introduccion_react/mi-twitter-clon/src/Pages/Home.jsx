import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { Link } from "react-router-dom";

const Home = ({
  user,
  logout,
  tweets,
  onAddTweet,
  onLike,
}) => {
  return (
    <div>
      <h1>Mini Twitter</h1>

      <p>Hola, {user.username}</p>

      <button onClick={logout}>
        Cerrar sesión
      </button>

      <Link to="/profile">
        <button>Mi Perfil</button>
      </Link>

      <hr />

      <TweetForm onAddTweet={onAddTweet} />

      <hr />

      <TweetList
        tweets={tweets}
        onLike={onLike}
      />
    </div>
  );
};

export default Home;
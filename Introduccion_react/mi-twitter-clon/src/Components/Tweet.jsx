const Tweet = ({ tweet, onLike }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <p>{tweet.text}</p>

      <button onClick={() => onLike(tweet.id)}>
        ❤️ {tweet.likes}
      </button>
    </div>
  );
};

export default Tweet;
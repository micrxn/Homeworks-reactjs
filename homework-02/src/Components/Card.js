import "./Card.css";
const Card = ({ articles }) => {
  return (
    <div className="card">
      <img src={articles.urlToImage} className="card-img"></img>
      <div className="card-title">{articles.title}</div>
      <p className="card-content">{articles.content}</p>
      <small className="card-published-at">{articles.publishedAt}</small>
    </div>
  );
};

export default Card;

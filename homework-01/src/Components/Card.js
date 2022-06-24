import React from "react";
import "./Card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      title: props.title,
      content: props.content,
      published: props.published,
    };
  }
  render() {
    return (
      <div className="card">
        <img src={this.state.image} className="card-img"></img>
        <div className="card-title">{this.state.title}</div>
        <p className="card-content">{this.state.content}</p>
        <small className="card-published-at">{this.state.published}</small>
      </div>
    );
  }
}
export default Card;

import React from "react";
import "./App.css";
import Card from "./Components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=329d1b3b32ef4c21a9cf029fbe3089eb"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ isLoaded: true, articles: result.articles });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }
  render() {
    const { isLoaded, articles } = this.state;
    if (isLoaded) {
      <div>Loading...</div>;
    }
    return (
      <div className="card-c">
        {articles.map((a, i) => (
          <Card
            image={a.urlToImage}
            title={a.title}
            content={a.content}
            published={a.publishedAt}
          />
        ))}
      </div>
    );
  }
}

export default App;

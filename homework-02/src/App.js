import "./App.css";

import FetchApi from "./Hook-/FetchApi";
import Card from "./Components/Card";
function App() {
  const [articles] = FetchApi(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86fbb022c1914f1a9f94e55bc1afb59b",
    {}
  );
  console.log(articles);
  return (
    <div className="card-c">
      {articles.articles &&
        articles.articles.map((a, i) => <Card articles={a} key={i} />)}
    </div>
  );
}

export default App;

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      pages: 0,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5010463d4dfd434a8aecdb96dda73a73";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      article: parsedata.articles,
    });
    console.log(this.state.article);
  }

  render() {
    return (
      <div className="container">
        <div className=" row mb-4">
          {this.state.article.map((e) => (
            <div className="col-md-4 mb-4" key={e.url}>
            <NewsItem
              url={e.url}
              urlToImage={e.urlToImage}
              description={e.description}
              title={e.title}
            />
          </div>
          ))}
        </div>
      </div>
    );
  }
}

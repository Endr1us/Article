import React, { Component } from "react";

class Article extends Component {
  /*constructor (props) {
            super(props)

            this.state = {
                isOpen: true
            }
    }*/

  state = {
    isOpen: true
  };

  render() {
    const { article } = this.props;
    console.log("---", this.props);
    const body = this.state.isOpen && (
      <section className="card-text">{article.text}</section>
    );
    return (
      <div
        className="card"
        style={{ color: "green", width: "85%", margin: "20px auto" }}
      >
        <div className="card-header">
          <h2>
            {article.title}
            <button
              onClick={this.handleClick}
              className="btn btn-primary btn-lg"
              style={{ float: "right" }}
            >
              {this.state.isOpen ? "close" : "open"}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted" style={{ padding: "5px" }}>
            creation date: {new Date(article.date).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    );
  }

  handleClick = () => {
    console.log("---", "clicked");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default Article;

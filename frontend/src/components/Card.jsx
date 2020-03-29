import React, { Component } from "react";

class Card extends Component {
  static defaultProps = {
    photo: "",
    range: "",
    name: "",
    status: "",
    price: "",
    date: "",
    location: ""
  };

  render() {
    return (
      <div className="container">
        <div className="image">
          <img src={this.props.photo} />
        </div>
        <div className="range">
          <h4>{this.props.range}</h4>
        </div>
        <div className="name">
          <h4>{this.props.name}</h4>
        </div>
        <div className="status">
          <h4>{this.props.status}</h4>
        </div>
        <div className="price">
          <h4>{this.props.price}</h4>
        </div>
        <div className="date">
          <h4>{this.props.date}</h4>
        </div>
        <div className="location">
          <h4>{this.props.locetion}</h4>
        </div>
      </div>
    );
  }
}

export default Card;

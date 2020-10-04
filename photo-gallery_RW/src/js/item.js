import React from "react";
import { Link } from "react-router-dom";
import imagesData from "./data";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
    imagesData().then(items =>
      this.setState({
        item: items.find(
          result => result.id == this.props.match.params.pictureId
        )
      })
    );
  }
  render() {
    return (
      <div>
        <h1>
         #{this.state.item.id} - {this.state.item.title}
        </h1>
        <img src={this.state.item.url} />
        <Link className="home--link" to={"/"}> Home >>> </Link>
      </div>
    );
  }
}

export default Item;

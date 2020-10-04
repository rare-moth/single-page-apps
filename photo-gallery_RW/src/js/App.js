import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemList from "./item-list";
import Item from "./item";
import imagesData from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    imagesData().then(items => this.setState({ items }));
  }
  render() {
    return (
      <BrowserRouter>
           <Switch>
            <Route exact path="/" render={() => <ItemList result={this.state.items} />}/>
            <Route path="/:pictureId" component={Item} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

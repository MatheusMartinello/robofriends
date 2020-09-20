import React from "react";
import "./App.css";
import CardList from "../Components/CardList/CardLists";
import SearchBox from "../Components/searchField/SearchField";
import Scroll from "../Components/Scroll/Scroll";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterRobot = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0)
      return <h1 className="tc">Loading ...</h1>;
    else
      return (
        <div className="App">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobot} />
          </Scroll>
        </div>
      );
  }
}

export default App;

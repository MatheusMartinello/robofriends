import React from "react";
import "./App.css";
import CardList from "../Components/CardList/CardLists";
import SearchBox from "../Components/searchField/SearchField";
import Scroll from "../Components/Scroll/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry/ErrorBoundry";
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
    const { robots, searchField } = this.state;

    const filterRobot = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc">Loading ...</h1>
    ) : (
      <div className="App">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;

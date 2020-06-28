import React, { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

//https://jsonplaceholder.typicode.com/users

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonResponse) => this.setState({ monsters: jsonResponse }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter((cur) =>
      cur.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeHolder="Search Monsters"
          changeHandler={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App

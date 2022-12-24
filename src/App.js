import { Component } from 'react';
import './App.css';

import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"


//Class APP
class App extends Component {

  constructor() {
    // console.log("constructor()")
    super();

    this.state = {
      monsters: [],
      searchMonster: "",
    }
  }

  componentDidMount() {
    console.log("componentDidMount()")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      },
        // () => {
        //   console.log(this.state)
        // }
      ))
  }

  onSearchMonsters = (event) => {
    const searchMonster = event.target.value;
    this.setState(() => {
      return { searchMonster }
    })
  }

  render() {
    console.log("render()")

    const { monsters, searchMonster } = this.state;
    const { onSearchMonsters } = this;

    const filtMonstersArr = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchMonster.toLowerCase())
    })

    return (
      <div className="App">
        <h1 className='app-title' >Kittens Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchMonsters}
          placeHolder="search kitten"
        />
        {/* {
          filtMonstersArr.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        } */}
        <CardList monsters={filtMonstersArr} />
      </div>
    );
  }
}

export default App;

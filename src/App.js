import './App.css';
import React from 'react'
import CardList from './Components/CardListComponent'
import SearchInput from './Components/InputFields/SearchInputComponent';

class App extends React.Component{

  state={
    data:[],
    searchField:''
}

componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({data:user}))
}

  

  render(){

    const  filteredKitties = this.state.data.filter(dta => dta.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase()))

    return(
      <div className='App'>
        <h1>Kittens Rolodex</h1>
      <SearchInput placeholder='Search Kitties' handleChange={e => this.setState({searchField:e.target.value})} />
      <CardList monster = {filteredKitties}/>
      </div>
    )
  }
}

export default App;

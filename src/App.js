import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PeopleList from './PeopleList';

function App() {
  const [data, setData] = useState([])
  useEffect( ()=>{
    fetch('http://localhost:4500/people').then(res => res.json()).then(data => {
      setData(data) 

    })
  }, [], ()=>{
    console.log('cleaned')
  })
  function deletePerson(id){
    fetch('http://localhost:4500/people/'+id, {
      method:"DELETE",
    }).then(res=>res.json()).then(data=>{
      console.log(data)
    })
  }

  return (
    <>
      <h3>People</h3>
    <PeopleList data={data} deletePerson={deletePerson} />
    </>
  );
}

export default App;

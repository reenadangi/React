import React,{ useState } from 'react';
import './App.css';
import Hello from './Hello';
import Data from './data';

function App() {
 
  const [personsState,setPersonsState]=useState({
    persons:[
      {id: '1', name:'Reena',city:'Chicago'},
      {id: '2',name:'Mike',city:'Chicago'},
      {id: '3', name:'Dev',city:'Chicago'},
    ],
    otherState:'Some other Value',
  });
  const[showPersons,setShowPersons]=useState(false) 
  const switchNameHadler = () =>{
    console.log("Button clicked");
   setPersonsState({
    persons:[
      {name:'eena',city:'ooo'},
      {name:'ike',city:'oooo'},
      {name:'ev',city:'oooo'},
    ]
  });
  };
  const style={
    backgroundColor:'green',
    color:'white',

  }
  const toggelShowPersonHandler=()=>{
    const doesShow=showPersons;
    setShowPersons(!doesShow)
  }
  const deletePersonHandler=(idx)=>{
    const temp = [...personsState.persons];
    temp.splice(idx,1);
    console.log(temp)
    setPersonsState({persons:temp});
  }
  let persons=null;
  if (showPersons){
    persons=(
    <div>
      {personsState.persons.map((person,idx)=>{
          return <Hello 
          key={person.id}
          name={person.name} 
          city={person.city}
          click={()=>deletePersonHandler(idx)
          }
          />
        })}
     </div>
    
     );
     style.backgroundColor='red';
  }

  return (
    <div className="app">
     <h1>
     Hi learn with me, this is your {Math.floor(Math.random()*30)}st visit!
     </h1>
     <p>React is so much fun!</p>
     <button onClick={switchNameHadler}>Switch names </button> 
     <button style={style}  onClick={toggelShowPersonHandler}>Show persons </button>
      {persons}
     <Data />
     

     
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


// function App() {
//   return (
//     <Router>
//         <div>
//           <Switch>
//             <Route path='/' exact component={Home}/>
//           </Switch>
//         </div>
//     </Router>

//   );
// }
  

function App(){
  const [usersList, setUsersList]=useState([]);

  const addUserHandler =(uName,uAge)=>{

    setUsersList((prevUsersList)=>{
    return [...prevUsersList,{  name:uName, age:uAge,  id:Math.random().toString()}]
    })
  }
  return(
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>

    </div>
  );
}




export default App;

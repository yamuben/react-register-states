import React ,{useState}from "react";
import Card from "../UI/Card"
import classes from "./AddUser.module.css";
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) =>{

    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError]= useState();


    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length===0){
            setError({
                title: "Invalid Input Data",
                message:"please enter valid input (not Empty field)."
            })
            return ;
        }

        if(+enteredAge <1){
            setError({
                title: "Invalid Input Data",
                message:"please enter valid Age (Age >0)."
            })
            return;
        }
        // console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername(''); 
    }

    const usernameChangeHandler =(event)=>{
        setEnteredUsername(event.target.value);

    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler=()=>{
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
      
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
        </form>      
        </Card>
        </div>
    )
}

export default  AddUser;
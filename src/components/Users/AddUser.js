import React, { useState, useRef } from "react";
import Card from "../UI/Card"
import classes from "./AddUser.module.css";
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
    const nameInputref = useRef();
    const ageInputref = useRef();

    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredNameRef = nameInputref.current.value;
        const enteredAgeRef = ageInputref.current.value;
        if (enteredNameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
            setError({
                title: "Invalid Input Data",
                message: "please enter valid input (not Empty field)."
            })
            return;
        }

        if (+enteredAgeRef < 1) {
            setError({
                title: "Invalid Input Data",
                message: "please enter valid Age (Age >0)."
            })
            return;
        }
        // console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredNameRef, enteredAgeRef);
        nameInputref.current.value='';
        ageInputref.current.value='';
    }


    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>

                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" ref={nameInputref} />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" ref={ageInputref} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
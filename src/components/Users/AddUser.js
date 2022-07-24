import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
// import  from "../Helpers/";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error Occured",
        msg: "Entered length not valid!",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Error Occured",
        msg: "Entered age not valid!",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };
  const addUsername = (event) => {
    setEnteredUsername(event.target.value);
  };
  const addAge = (event) => {
    setEnteredAge(event.target.value);
  };
  const clickError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={clickError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={addUsername}
          />
          <label htmlFor="Age">Age</label>
          <input id="Age" type="number" value={enteredAge} onChange={addAge} />
          <Button type="submit" content="Submit" onChange="" />
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUser;

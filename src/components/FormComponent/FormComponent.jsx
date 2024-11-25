import { Alert, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";

const FormComponent = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const [errNameInput, setErrNameInput] = useState(false);
  const [errEmailInput, setErrEmailInput] = useState(false);
  const [errAgeInput, setErrAgeInput] = useState(false);

  const formSubmission = (event) => {
    event.preventDefault();

    if (nameInput === "") {
      setErrNameInput(true);
    }
    if (emailInput === "") {
      setErrEmailInput(true);
    }
    if (ageInput === "") {
      setErrAgeInput(true);
    }

    console.log(nameInput, emailInput, ageInput);
    alert("Successfully Submitted")
  };

  useEffect(() => {
    if (nameInput !== "") {
      setErrNameInput(false);
    }
    if (emailInput !== "") {
      setErrEmailInput(false);
    }
    if (ageInput !== "") {
      setErrAgeInput(false);
    }
  }, [nameInput, emailInput, ageInput]);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form onSubmit={formSubmission} className="p-4 bg-light">
          <div className="d-flex flex-column justify-content-between gap-4">
            <h3 className="text-center fs-4">Form Validation</h3>
            <div>
              <TextField
                // required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                id="outlined-read-only-input"
                label="Name"
                defaultValue=""
                size="small"
              />
              {errNameInput && <Alert severity="error">Enter your Name.</Alert>}
            </div>
            <div>
              <TextField
                // required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type="email"
                id="outlined-read-only-input"
                label="Email"
                defaultValue=""
                size="small"
              />
              {errEmailInput && (
                <Alert severity="error">Enter your Email.</Alert>
              )}
            </div>
            <div>
              <TextField
                // required
                value={ageInput}
                onChange={(e) => setAgeInput(e.target.value)}
                id="outlined-number"
                label="Age"
                type="number"
                size="small"
              />
              {errAgeInput && <Alert severity="error">Enter your Age.</Alert>}
            </div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormComponent;

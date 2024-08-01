function Validation(Values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (Values.name === "") {
        error.name = "name should not be empty";
    }
    else {
        error.name = "";
    }

    if (Values.email === "") {
        error.email = "email should not be empty";
    }
    else if (!email_pattern.test(Values.email)) {
        error.email = "Not Matching";
    }
    else {
        error.email = "";
    }


    if (Values.password === "") {
        error.password = "password should not be empty";
    }
    else if (!password_pattern.test(Values.password)) {
        error.password = "Not Matching";
    }
    else {
        error.password = "";
    }

    return error;

}

export default Validation;
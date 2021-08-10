import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AiOutlineSmile } from "react-icons/ai";
import { Wrapper } from './Signin'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://delineseyo.xyz" target="_blank">
                Adeline Chew
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

// CSS styles for Material UI form
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#47597E",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    // Load the dashboard page if the user already logged in
    useEffect(() => {
      if (localStorage.getItem("token") !== null) {
          window.location.replace("http://localhost:3000/dashboard");
      } else {
          setLoading(false);
      }
  }, []);

  const onSubmit = (e) => {
      e.preventDefault();

      const user = {
          email: email,
          password1: password1,
          password2: password2,
      };
      // POST details of user to backend
      fetch("http://127.0.0.1:8000/api/auth/register/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
      })
          .then((res) => res.json())
          .then((data) => {
            // Render dashboard page after registered
              if (data.key) {
                  localStorage.clear();
                  localStorage.setItem("token", data.key);
                  window.location.replace("http://localhost:3000/dashboard");
              } else {
                  setEmail("");
                  setPassword1("");
                  setPassword2("");
                  localStorage.clear();
                  setErrors(true);
              }
          });
  };

    return (
      <Wrapper>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AiOutlineSmile size="30px" />
                </Avatar>
                {loading === false && <Typography component="h1" variant="h5">
                    Sign up
                </Typography>}
                {errors === true && (
                    <h2>Error occurred when signing up.</h2>
                )}
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password1"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        value="Signup"
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
        </Wrapper>
    );
};

export default Register;

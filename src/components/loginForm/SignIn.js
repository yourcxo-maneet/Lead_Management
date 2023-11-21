import "./signin.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Logo from "../../assets/cxoLogo-withoutText.svg";
import { Divider } from "@mui/material";

import GoogleLogin from "react-google-login";
import AppContext from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your CxO Online
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const { setUser, user } = React.useContext(AppContext);
  if (!user) {
    navigate(`../`);
  }
  console.log(user);
  const handleClick = () => {
    navigate(`../dashboard`);
  };
  const clientId =
    "960090898668-2k4l617rghg4pmc2pc51j4bcr47f5mk2.apps.googleusercontent.com";

  const onSuccess = (res) => {
    setUser(res.profileObj);
    if (user) {
      handleClick();
    }
  };

  const onFailure = () => {
    console.log("failure ");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box className="background">
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              paddingTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} />

            <Typography
              component="h1"
              variant="h5"
              style={{
                fontStyle: "italic",
                fontFamily: "YourChosenFont, sans-serif",
              }}
            >
              Craft Impactful Cover Letters With AI
            </Typography>
            <Divider sx={{ width: "70%", marginTop: "10px" }} />
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              />
              <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

              <Box id="signInButton">
                <GoogleLogin
                  clientId={clientId}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  buttonText="Sign In"
                  cookiePolicy="single_host_origin"
                  isSignedIn={true}
                />
              </Box>
              {/* <Grid container>
              <Grid item xs>
              <Link href="#" variant="body2">
              Forgot password?
              </Link>
              </Grid>
              <Grid item>
              <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

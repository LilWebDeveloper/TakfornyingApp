import {
  Grid,
  CssBaseline,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  ThemeProvider,
} from "@mui/material";

import { Form } from "react-router-dom";

import { Theme } from "../../components/items/CreateTheme";

import { Copyright } from "../../components/items/Copyright";

import takfornyingImage from "../../assets/takfornying.jpg";
import takfornyingLogo from "../../assets/logo2021takfornying.jpg";

function LoginPage() {
  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      login: data.get("login"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={Theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${takfornyingImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={takfornyingLogo} alt="Logo Takfornying" />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={loginHandler}
              sx={{ mt: 1 }}
            >
              <Form>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  name="login"
                  autoComplete="login"
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
                />
                <Button
                  style={{
                    backgroundColor: "primary",
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Form>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;

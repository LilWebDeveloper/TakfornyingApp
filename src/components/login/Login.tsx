import {
  Grid,
  CssBaseline,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { Form, useActionData } from "react-router-dom";

import { Copyright } from "../copyright/Copyright";

import takfornyingImage from "../../assets/takfornying.jpg";
import takfornyingLogo from "../../assets/logo2021takfornying.jpg";

function LoginDashboard() {
  const data: any = useActionData();

  // const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     login: data.get("login"),
  //     password: data.get("password"),
  //   });
  // };

  return (
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
          {data && data.message && (
            <Typography component="h1" variant="h5">
              {data.message}
            </Typography>
          )}
          <Form method="post">
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
            <Copyright />
          </Form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginDashboard;

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function Copyright() {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{mt: 1}}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/LilWebDeveloper">
          Website by Takfornying x Falęcki
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
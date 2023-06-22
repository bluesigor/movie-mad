import { Paper, styled } from "@mui/material";

const MoviesStyle = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 400px)",

  display: "flex",
  flexDirection: "column",
  gap: "20px",
  overflowY: "scroll",
}));

export default MoviesStyle;

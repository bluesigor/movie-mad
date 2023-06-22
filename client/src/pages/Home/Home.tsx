import { useQuery } from "@apollo/client";
import { Box, Grid, Paper, Typography, CardMedia, Card } from "@mui/material";

import useMovies from "../../core/hooks/useMovies/useMovies";
import { MOVIES } from "./queries";
import movie from "../../assets/movie.svg";
import SelectedMovies from "../../components/SelectedMovies";
import PaginationMovies from "../../components/PaginationMovies/PaginationMovies";

const Home = () => {
  const { selectMovie, deleteMovie, selectedMovies } = useMovies();
  const { error } = useQuery(MOVIES);

  if (error) {
    console.log("Error");
  }
  return (
    <Box sx={{ flexGrow: 1, marginTop: 6 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <PaginationMovies selectMovie={selectMovie} />
        <Grid item xs={12} md={4}>
          {selectedMovies.length ? (
            <SelectedMovies
              deleteMovie={deleteMovie}
              selectedMovies={selectedMovies}
            />
          ) : (
            <Box
              sx={{
                position: "sticky",
                top: 20,
                backgroundColor: "#fff",
                pb: 14,
                p: 2,
                height: "80vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                gap: "100px",
              }}>
              <Card component="div">
                <CardMedia
                  component="img"
                  image={movie}
                  sx={{
                    maxWidth: 300,
                  }}
                  alt="no movies"
                />
              </Card>
              <Typography component={"p"} variant="h5">
                No selected movies
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

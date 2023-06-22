import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Typography, Grid } from "@mui/material";

import { RECOMMEND } from "./quieries";
import { General } from "../../core/models";
import MovieCard from "../../components/MovieCard";

const Recommend = () => {
  let [searchParams] = useSearchParams();

  const { data, loading } = useQuery(RECOMMEND, {
    variables: {
      ids: searchParams
        .get("ids")
        ?.split(",")
        .map((param) => +param),
    },
  });

  return (
    <div>
      {loading && <Typography></Typography>}
      <Typography
        variant="h2"
        sx={{
          marginY: "50px",
        }}
        gutterBottom>
        Recommended {searchParams.get("title")} list
      </Typography>
      {data && (
        <Grid container spacing={2}>
          {data.moviesById.map((movie: General.Movie) => {
            return (
              <Grid key={movie.id} item xs={12} sm={6} md={4}>
                <MovieCard movie={movie} onCardSelect={() => {}} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Recommend;

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Box, Paper, Typography, Pagination, Stack } from "@mui/material";

import MovieCard from "../MovieCard/MovieCard";

import { General } from "../../core/models";
import { MOVIES } from "../../pages/Home/queries";

type PaginationMoviesProps = {
  selectMovie: (movie: General.Movie) => void;
};

const PaginationMovies = ({ selectMovie }: PaginationMoviesProps) => {
  const [page, setPage] = useState(1);

  const { loading, data } = useQuery(MOVIES, {
    variables: {
      page,
    },
  });

  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <Grid item xs={12} md={8}>
      <Paper>
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
          }}>
          {loading && <Typography component="p"> Loading... </Typography>}
          <Grid container spacing={2}>
            {data?.movies.results.map((movie: General.Movie) => {
              return (
                <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard onCardSelect={selectMovie} movie={movie} />
                </Grid>
              );
            })}
            <Stack
              m={3}
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Pagination
                page={page}
                count={data?.movies.totalPages}
                onChange={paginationHandler}
              />
            </Stack>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default PaginationMovies;

import { useState } from "react";
import { Box } from "@mui/material";

import MoviesStyle from "../MoviesStyle";
import SearchMovie from "../SearchMovie";
import SelectedMovieCard from "../SelectedMovieCard";
import ConfirmModal from "../ConfirmModal";

import { General } from "../../core/models";

type SelectedMoviesProps = {
  deleteMovie: (id: number) => void;
  selectedMovies: General.Movie[];
};

const SelectedMovies = ({
  deleteMovie,
  selectedMovies,
}: SelectedMoviesProps) => {
  const [{ link, listName }, setUrlData] = useState({
    listName: "",
    link: "",
  });

  const onCloseConfirmModal = () => {
    setUrlData((prev) => {
      return {
        ...prev,
        link: "",
      };
    });
  };

  const handleFormSubmit = (listName: string) => {
    const ids = selectedMovies.map((movie) => movie.id);
    const link = `${
      window.location.host
    }/recommend?title=${listName}&ids=${ids.join()}`;

    setUrlData((prev) => {
      return {
        ...prev,
        listName: listName,
        link: link,
      };
    });
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 20,
        backgroundColor: "#fff",
        pb: 14,
        p: 2,
        height: "80vh",
        borderRadius: 5,
        display: "flex",
        justofyContent: "space-between",
        flexDirection: "column",
      }}>
      <MoviesStyle>
        {selectedMovies.map((movie: General.Movie) => (
          <SelectedMovieCard
            key={movie.id}
            movie={movie}
            deleteOnClick={deleteMovie}
          />
        ))}
      </MoviesStyle>
      <Box mt={6}>
        {selectedMovies.length ? (
          <SearchMovie
            selectedMovies={selectedMovies}
            handleFormSubmit={handleFormSubmit}
          />
        ) : null}
      </Box>
      <ConfirmModal
        url={link}
        title={listName}
        open={!!link}
        onClose={onCloseConfirmModal}
      />
    </Box>
  );
};

export default SelectedMovies;

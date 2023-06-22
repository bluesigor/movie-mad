import { useCallback, useState } from "react";

import { MAX_SELECTED_MOVIES } from "../../config";
import { General } from "../../models";

const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<General.Movie[]>([]);

  const selectMovie = useCallback(
    (movie: General.Movie) => {
      const tempMovie = selectedMovies.find(
        ({ id }: General.Movie) => id === movie.id
      );
      const length = selectedMovies.length;
      if (!tempMovie && length < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies]);
      }
    },
    [selectedMovies]
  );

  const deleteMovie = useCallback(
    (id: number) => {
      const tempMovies = selectedMovies.filter(
        (mov: General.Movie) => mov.id !== id
      );

      setSelectedMovies(tempMovies);
    },
    [selectedMovies]
  );

  return { selectedMovies, selectMovie, deleteMovie };
};

export default useMovies;

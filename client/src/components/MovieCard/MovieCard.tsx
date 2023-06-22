import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  IconButton,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { General } from "../../core/models";
import { TRANSLATE } from "./queries";
import { useAppDispatch, useAppSelector } from "../../core/hooks/useReducers";

type MovieCardProps = {
  movie: General.Movie;
  onCardSelect: (movie: General.Movie) => void;
};

const MovieCard = ({ movie, onCardSelect }: MovieCardProps) => {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<number>();
  const [translated, setStranslated] = useState([]);
  const [tempTitle, setTempTitle] = useState("");

  const language = useAppSelector((state) => state.languages.lang);
  const dispatch = useAppDispatch();

  const { data } = useQuery(TRANSLATE, {
    variables: { id: movieId },
  });

  const release = movie.releaseDate.split("-").reverse().join("-");

  useEffect(() => {
    if (movie) {
      setMovieId(movie.id);
    }

    if (data) {
      const getTranslate = data.translateMovie.translations.filter(
        (detail: General.TranslationDetails) => detail.english_name === language
      );

      setStranslated(getTranslate);
    }
  }, [language, data, movie]);

  useEffect(() => {
    const currTitle = translated
      .map((translt: General.TranslationDetails) => translt.data.title)
      .join("");

    setTempTitle(currTitle);
  }, [language, translated, tempTitle]);

  return (
    <Card
      onMouseOver={() => setShowSelect(true)}
      onMouseLeave={() => setShowSelect(false)}
      sx={{
        position: "relative",
        height: 410,
        maxWidth: 230,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: 1,
        ":hover": {
          delay: "4000",
          boxShadow: "0 0px 28px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.22)",
          transform: " scale(1.005)",
        },
      }}>
      {!window.location.pathname.includes("recommend") && showSelect && (
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 1,
            opacity: "80%",
            left: "50%",
            top: "50%",
            transform: " translate(-50%,-180%)",
            backgroundColor: (theme) => theme.palette.grey[100],
            ":hover": {
              backgroundColor: "white",
            },
          }}
          aria-label="more"
          id="long-button"
          aria-haspopup="true"
          onClick={() => onCardSelect(movie)}>
          <AddIcon
            sx={{
              color: (theme) => theme.palette.grey[800],
            }}
          />
        </IconButton>
      )}

      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          maxHeight: 250,
        }}
        image={movie.posterPath}
        alt={movie.title}
      />

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "20px",
        }}>
        <Typography variant="h6" fontSize={20} gutterBottom component="div">
          {language === "English" ? movie.title : tempTitle}
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={14}
          gutterBottom
          component="div">
          {release}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MovieCard;

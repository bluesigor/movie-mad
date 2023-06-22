import {
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useMenu from "../../core/hooks/useMenu";
import { General } from "../../core/models";

type SelectedMovieCardProps = {
  deleteOnClick: (id: number) => void;
  movie: General.Movie;
};

const SelectedMovieCard = ({
  deleteOnClick,
  movie,
}: SelectedMovieCardProps) => {
  const { handleClick, handleClose, open, anchorEl } = useMenu();

  return (
    <Card sx={{ display: "flex", position: "relative", minHeight: 200 }}>
      <IconButton
        sx={{
          position: "absolute",
          right: 0,
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        sx={{
          right: "300px",
        }}
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 40 * 4.5,
            width: "20ch",
          },
        }}>
        <MenuItem
          sx={{
            fontSize: "16px",
          }}
          onClick={() => deleteOnClick(movie.id)}>
          Delete
        </MenuItem>
      </Menu>
      <CardMedia
        component="img"
        sx={{ flex: 1, maxWidth: 180, height: 220, objectFit: "cover" }}
        image={movie.posterPath}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            fontSize="22px"
            fontWeight={800}
            variant="h5">
            {movie.title}
          </Typography>
          {movie.genre?.map((genre: General.Genre) => (
            <Box
              key={genre.id}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                variant="subtitle2"
                fontSize="14px"
                color="text.secondary"
                component="div">
                {genre.name}
              </Typography>
            </Box>
          ))}
          <Typography fontSize="16px" component="span">
            {movie.releaseDate}
          </Typography>
          <Typography fontSize="16px" component="p">
            Length: 120 min
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SelectedMovieCard;

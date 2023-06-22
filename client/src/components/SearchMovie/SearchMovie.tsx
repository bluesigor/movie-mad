import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Typography, FormLabel, Input } from "@mui/material";
import { General } from "../../core/models";

type SearchMovieProps = {
  selectedMovies: General.Movie[];
  handleFormSubmit: (listName: string) => void;
};

const SearchMovie = ({ handleFormSubmit }: SearchMovieProps) => {
  const valueFormvalidationSchema = yup.object().shape({
    listName: yup.string().required("please type here"),
  });

  const formikForm = useFormik<{
    listName: string;
  }>({
    initialValues: {
      listName: "",
    },
    validationSchema: valueFormvalidationSchema,
    onSubmit: ({ listName }) => {
      handleFormSubmit(listName);
    },
  });

  return (
    <form onSubmit={formikForm.handleSubmit}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
        id="demo">
        <FormLabel htmlFor="firstName">List name</FormLabel>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <Input
            sx={{
              borderBottom:
                formikForm.touched.listName && formikForm.errors.listName
                  ? "1px solid red"
                  : "1px solid black",
            }}
            placeholder="listName"
            {...formikForm.getFieldProps("listName")}
          />
          {formikForm.touched.listName && formikForm.errors.listName && (
            <Typography
              component="span"
              sx={{
                margin: 0,
                fontSize: "12px",
                color: "red",
              }}>
              {formikForm.errors.listName}
            </Typography>
          )}
        </Box>

        <Button
          sx={{
            border: "none",
            backgroundColor: "gray",
            color: "#fff",
            ":hover": {
              backgroundColor: " #fff",
              color: "gray",
              border: "1px solid gray",
            },
          }}
          variant="outlined"
          type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default SearchMovie;

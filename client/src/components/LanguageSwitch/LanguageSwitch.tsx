import { FormGroup, FormControlLabel } from "@mui/material";

import { IOSSwitch } from "./StyledSwitch";
import { useAppDispatch, useAppSelector } from "../../core/hooks/useReducers";
import { changeLanguage } from "../../store/localization/localizationSlice";

const LanguageSwitch = () => {
  const language = useAppSelector((state) => state.languages.lang);
  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    event.target.value === "Ukrainian"
      ? dispatch(changeLanguage("English"))
      : dispatch(changeLanguage("Ukrainian"));
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 2 }} defaultChecked />}
        value={language}
        onChange={handleChange}
        label={
          language === "English"
            ? "English"
            : language === "Ukrainian"
            ? "Ukrainian"
            : ""
        }
      />
    </FormGroup>
  );
};

export default LanguageSwitch;

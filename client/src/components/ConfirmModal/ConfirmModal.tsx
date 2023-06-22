import { useState } from "react";
import {
  Box,
  Divider,
  InputBase,
  IconButton,
  Paper,
  Modal,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CloseIcon from "@mui/icons-material/Close";

import SocialMedia from "../SocialMedia/SocialMedia";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minHeight: "40vh",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  borderRadius: "8px",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

type ConfirmModalProps = {
  title: string;
  url: string;
  open: boolean;
  onClose: (open: boolean) => void;
};

const ConfirmModal = ({ open, url, title, onClose }: ConfirmModalProps) => {
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography
          textAlign="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            textTransform: "capitalize",
            textShadow: "1px 0px 2px ",
          }}
          mb={6}>
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: "24px",
            mb: "100px",
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ "aria-label": "list URL" }}
            value={url}
            disabled={true}
          />
          <Link to={url.slice(15)} target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ p: "15px" }} aria-label="preview ">
              <VisibilityIcon />
            </IconButton>
          </Link>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="copy to clipboard">
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
          {openAlert ? (
            <Snackbar
              open={openAlert}
              onClose={() => setOpenAlert(false)}
              autoHideDuration={3000}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}>
                Copied!
              </Alert>
            </Snackbar>
          ) : null}
        </Paper>
        <SocialMedia title={title} url={url} />
      </Box>
    </Modal>
  );
};

export default ConfirmModal;

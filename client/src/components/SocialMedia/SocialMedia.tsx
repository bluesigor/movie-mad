import React from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

type SocialMediaProps = {
  url: string;
  title: string;
};

const SocialMedia = ({ url, title }: SocialMediaProps) => {
  return (
    <Box>
      <Typography mb={2} component="p" fontWeight={600}>
        Share with friends
      </Typography>
      <Stack display="flex" gap="8px" flexDirection="row">
        <FacebookShareButton url={url}>
          <FacebookIcon href={url} size={50} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={50} round={true} />
        </TwitterShareButton>
      </Stack>
    </Box>
  );
};

export default SocialMedia;

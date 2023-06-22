import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  ListItemButton,
  List,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import { menuList } from "../../core/constants/settings";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuList.map((item: string) => (
          <ListItem key={item} disablePadding>
            <Link
              to={item === "Home" ? "/" : `${item.toLowerCase()}`}
              style={{
                textDecoration: "none",
              }}>
              <ListItemButton
                sx={{
                  color: "gray",
                }}>
                <ListItemIcon>
                  {item === "Settings" && <SettingsIcon />}
                  {item === "Home" && <HomeIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["xl", "lg"]}>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}>
              Movies recommendation
            </Link>
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "40px",
            }}>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="settings">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}>
                Settings
              </Button>
            </Link>
            <LanguageSwitch />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;

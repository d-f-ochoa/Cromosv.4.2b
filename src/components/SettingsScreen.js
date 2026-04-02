// React
import { useState } from "react";

// Material UI
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function SettingsScreen(props) {
  // estados

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
            onClick={props.onBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ajustes
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack direction="row" spacing={2} m={2} alignItems="center">
        <Typography>Modo Claro</Typography>
        <Switch
          checked={props.mode === "dark"}
          onChange={props.onToggleTheme}
          color="primary"
        />
        <Typography>Modo Oscuro</Typography>
      </Stack>
    </Box>
  );
}

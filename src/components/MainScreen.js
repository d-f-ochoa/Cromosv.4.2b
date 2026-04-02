// React
import { useState } from "react";

// Material UI
import {
  AppBar,
  Box,
  Chip,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { Cromo } from "./Cromo.js";

//Animaciones
import DatosRocker from "../../cromos/rocker.json";
import DatosCop from "../../cromos/cop.json";
import DatosAmanda from "../../cromos/amanda.riv";

export function MainScreen(props) {
  // estados
  const [filtro, setFiltro] = useState("Todos");

  // array con todos los cromos
  const arrayCromos = [
    {
      id: 0,
      nombre: "rocker",
      contenido: {
        datos: DatosRocker,
        interactivo: false,
      },
    },
    {
      id: 1,
      nombre: "policía",
      contenido: {
        datos: DatosCop,
        interactivo: false,
      },
    },
    {
      id: 2,
      nombre: "Amanda",
      contenido: {
        datos: DatosAmanda,
        interactivo: true,
        maquinaEstados: "State Machine 1",
      },
    },
  ];
  const listaCromos = arrayCromos.map((cromo) =>
    filtro == "Todos" ||
    (filtro == "Animados" && !cromo.contenido.interactivo) ||
    (filtro == "Interactivos" && cromo.contenido.interactivo) ? (
      <Cromo key={cromo.id} nombre={cromo.nombre} contenido={cromo.contenido} />
    ) : (
      <></>
    )
  );

  function onClickFiltro(e) {
    setFiltro(e.currentTarget.textContent);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Álbum de cromos
          </Typography>
          <IconButton
            size="large"
            aria-label="settings"
            color="inherit"
            onClick={props.onSettings}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Stack direction="row" spacing={2} m={2}>
        <Chip
          label="Todos"
          variant={filtro == "Todos" ? "filled" : "outlined"}
          onClick={onClickFiltro}
        />
        <Chip
          label="Animados"
          variant={filtro == "Animados" ? "filled" : "outlined"}
          onClick={onClickFiltro}
        />
        <Chip
          label="Interactivos"
          variant={filtro == "Interactivos" ? "filled" : "outlined"}
          onClick={onClickFiltro}
        />
      </Stack>

      <Grid container p={2} spacing={2}>
        {listaCromos}
      </Grid>
    </Box>
  );
}

// Material UI
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

// Lottie
import Lottie from "lottie-react";

// Rive
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-webgl2";

export function Cromo(props) {
  const eltoMedia = !props.contenido.interactivo ? (
    <Lottie animationData={props.contenido.datos} />
  ) : (
    <Box sx={{ width: "100%", aspectRatio: "1 / 1" }}>
      <Rive
        src={props.contenido.datos}
        stateMachines={props.contenido.maquinaEstados}
      />
    </Box>
  );
  const eltoCardContentSiNecesario =
    props.nombre != null ? (
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.nombre}
        </Typography>
      </CardContent>
    ) : (
      <></>
    );

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
      <Card>
        {eltoMedia}
        {eltoCardContentSiNecesario}
      </Card>
    </Grid>
  );
}

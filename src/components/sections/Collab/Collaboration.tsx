import { Card } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Collaboration = () => {
  const card1 = (
    <>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Contratación por Proyecto
        </Typography>
        <Typography variant="h5" component="div">
          Si tienes una necesidad inmediata (web, API, e-commerce), explora mis paquetes Starter, Pro y Growth.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/#experience' size="small">Ver mi Historial y CV</Button>
      </CardActions>
    </>
  );

  const card2 = (
    <>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Oportunidades a Tiempo Completo
        </Typography>
        <Typography variant="h5" component="div">
          Busco sumarme a un equipo innovador en roles de ingeniería Full-Stack/Backend. Priorizo el crecimiento y la estabilidad.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/#experience' size="small">Ver mi Historial y CV</Button>
      </CardActions>
    </>
  );

  return (
    <section id='collaboration' className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-20">

      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card1}</Card>
      </Box>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card2}</Card>
      </Box>

    </section>
  )
}

export default Collaboration

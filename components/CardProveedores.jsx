import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { Box } from '@mui/material';

const CardProveedores = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight:400 }}>
      <Box className="flex w-full justify-center mt-2">
        <Image src={data.foto} alt="fotoProveedores" quality={100}  height={120} width={300} ></Image>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Representante: {data.representante}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Direccion: {data.direccion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ciudad: {data.ciudad}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Telefono: {data.telefono}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Celular: {data.celular}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {data.email}
        </Typography>
        <Typography className="font-bold" variant="body2" color="text.secondary">
          Descripcion: {data.descripcion}
        </Typography>
      </CardContent>
  </Card>
  )
}

export default CardProveedores
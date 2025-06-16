import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText'; // Puedes quitar esto si no lo usas
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box'; // <-- **NUEVA IMPORTACIÓN: Agrega Box para centrar o controlar el tamaño de la imagen**

// **CAMBIO 1: Importa tu imagen**
import myImageInModal from '../../assets/UlitoStickerPrueba.jpeg'; // <-- ¡Asegúrate de cambiar esta ruta por la de tu imagen!

export default function ShowUlo2() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                ¿ Queres conocerme ?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Mira esta imagen de ULO!"} {/* Puedes cambiar el título aquí */}
                </DialogTitle>
                <DialogContent>
                    {/* **CAMBIO 2: Reemplaza DialogContentText con una imagen** */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '200px', // Opcional: Dale una altura mínima para que el modal no sea muy pequeño si la imagen es chica
                            padding: '10px' // Espacio alrededor de la imagen
                        }}
                    >
                        <img
                            src={myImageInModal} // <-- **USO DE LA IMAGEN IMPORTADA**
                            alt="Descripción de la imagen de ULO en el modal"
                            style={{
                                maxWidth: '100%',   // La imagen no se desbordará del contenedor
                                maxHeight: '70vh', // Limita la altura de la imagen para que quepa en la pantalla
                                objectFit: 'contain' // Ajusta la imagen manteniendo su relación de aspecto
                            }}
                        />
                    </Box>
                    {/* Puedes añadir texto adicional debajo de la imagen si lo deseas, usando DialogContentText de nuevo */}
                    {/* <DialogContentText id="alert-dialog-description" sx={{ mt: 2, textAlign: 'center' }}>
                        ¡Esta es una imagen representativa de nuestro producto!
                    </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
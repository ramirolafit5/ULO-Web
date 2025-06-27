import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import styles from './FlippCase.module.css';

import flipFondoMuñeco from '../../assets/flipFondoMuñeco.webp'
import pruebaAlgunosAnimales from '../../assets/pruebaAlgunosAnimales.webp'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.outerWrapper}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    width: '100%',
                    maxWidth: 1000,
                    margin: '2rem auto',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Muñeco" {...a11yProps(0)} />
                        <Tab label="Naipes" {...a11yProps(1)} />
                        <Tab label="Animales" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={styles.tabContent}>
                        <img
                            src={flipFondoMuñeco}
                            alt="Muñeco"
                            className={styles.sideImage}
                            loading='eager'
                        />

                        <div className={styles.description}>
                            <h3 className={styles.title}>Recurso Alfabetizador</h3>
                            <ul className={styles.textList}>
                                <li>Abecedario en imprenta mayúscula.</li>
                                <li>Veintisiete letras en Braile.</li>
                                <li>Animales con cuerpos representados con letras.</li>
                                <li>Un QR por cada cubo.</li>
                                <li>10 números naturales.</li>
                                <li>Complementario con naipes de autor.</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className={styles.tabContent}>
                        <img
                            src={pruebaAlgunosAnimales}
                            alt="Naipes"
                            className={styles.sideImage}
                            loading='eager'
                        />

                        <div className={styles.description}>
                            <h3 className={styles.title}>Barabaras</h3>
                            <ul className={styles.textList}>
                                <li>WuloW ➤ la diversidad animal y su habitat.</li>
                                <li>RASTROS ➤ desplazamiento, conteo, cantidad y huellas.</li>
                                <li>Quezón ➤ vocales y consonantes iniciales acompañando la vida animal.</li>
                                <li>S16NOS ➤ series ascendentes y descendentes desde el 0 hasta el 10 y viceversa.</li>
                                <li>Kop1a ➤ imprenta minúscula, objetos y animales.</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className={styles.tabContent}>
                        <img
                            src={pruebaAlgunosAnimales}
                            alt="Animales"
                            className={styles.sideImage}
                            loading='eager'
                        />

                        <div className={styles.description}>
                            <h3 className={styles.title}>Diversidad</h3>
                            <ul className={styles.textList}>
                                <li>27 animales creados con letras, comas y puntos. </li>
                                <li>Imágenes reales y videos, acompañan a cada ser vivo.</li>
                                <li>Divididos por hábitats ➤ aéreo | terrestre | acuático</li>
                                <li className={styles.liinline}>
                                    Variedad del reino animal: <span className={styles.firstItem}>• Extintos</span>
                                    <ul className={styles.textList2}>
                                        <li>En Peligro de extinción </li>
                                        <li>Mitológicos  </li>
                                        <li>Exóticos </li>
                                        <li>Típicos </li>
                                    </ul>
                                </li>

                                <li className={styles.liinline3}>
                                    Variedad del reino animal:
                                    <ul className={styles.textList3}>
                                        <li>Extintos </li>
                                        <li>En Peligro de extinción </li>
                                        <li>Mitológicos  </li>
                                        <li>Exóticos </li>
                                        <li>Típicos </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}


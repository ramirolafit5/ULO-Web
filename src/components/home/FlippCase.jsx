import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './FlippCase.module.css';

import masPruebas from '../../assets/daleConMasPruebasNomas2.jpeg'
import flipFondoMuñeco from '../../assets/flipFondoMuñeco.jpg'
import pruebaAlgunosAnimales from '../../assets/pruebaAlgunosAnimales.png'

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
                        <Tab label="Muñeco principal" {...a11yProps(0)} />
                        <Tab label="Cartas" {...a11yProps(1)} />
                        <Tab label="Animales" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={styles.tabContent}>
                        <img
                            src={flipFondoMuñeco}
                            alt="Imagen principal"
                            className={styles.sideImage}
                        />

                        <div className={styles.description}>
                            <ul className={styles.textList}>
                                <li>- Lorem lorem lorem lorem lorem lorem</li>
                                <li>- lorem lorem lorem lorem</li>
                                <li>- lorem lorem</li>
                                <li>- lorem lorem lorem lorem lorem lorem</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className={styles.tabContent}>
                        <img
                            src={pruebaAlgunosAnimales}
                            alt="Imagen principal"
                            className={styles.sideImage}
                        />

                        <div className={styles.description}>
                            <ul className={styles.textList}>
                                <li>- Lorem lorem lorem lorem lorem lorem</li>
                                <li>- lorem lorem lorem lorem</li>
                                <li>- lorem lorem</li>
                                <li>- lorem lorem lorem lorem lorem lorem</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>

                {/*                 <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel> */}
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </Box>
        </div>
    );
}


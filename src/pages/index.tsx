import styles from "./page.module.css";
import React from "react";
import {Button, Slider, Stack} from "@mui/material";
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function Home() {

    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                Main
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>

                <Stack spacing={2} direction="row" sx={{alignItems: 'center', mb: 1}}>
                    <VolumeDown/>
                    <Slider aria-label="Volume" value={value} onChange={handleChange}/>
                    <VolumeUp/>
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider"/>
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    );
}

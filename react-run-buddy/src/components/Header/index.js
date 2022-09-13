import React from "react";
import './style.css'
import { Tab, Tabs, useMediaQuery } from '@mui/material'

function Header() {

    const smallScreen = useMediaQuery("(max-width: 768px)");

    return (
        <header>
            <h1>Run Buddy</h1>
            <nav>
                <Tabs
                    orientation={smallScreen ? 'vertical' : 'horizontal'}
                >
                    <Tab
                        label="What We Do"
                    ></Tab>
                    <Tab label="What You Do"></Tab>
                    <Tab label="Your Trainers"></Tab>
                    <Tab label="Reach Out"></Tab>
                </Tabs>
            </nav>
        </header>
    )
}

export default Header;
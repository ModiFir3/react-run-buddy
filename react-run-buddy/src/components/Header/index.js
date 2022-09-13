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
                    variant="fullWidth"
                >
                    <Tab
                        label="What We Do"
                        style={{
                            fontWeight: 'bold',
                            color: '#fce138',
                        }}
                    />
                    <Tab
                        label="What You Do"
                        style={{
                            fontWeight: 'bold',
                            color: '#fce138',
                        }}
                    />
                    <Tab
                        label="Your Trainers"
                        style={{
                            fontWeight: 'bold',
                            color: '#fce138',
                        }}
                    />
                    <Tab
                        label="Reach Out"
                        style={{
                            fontWeight: 'bold',
                            color: '#fce138',
                        }}
                    />
                </Tabs>
            </nav>
        </header>
    )
}

export default Header;
import React from "react";
import {
    TextField,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormGroup,
    Radio,
    RadioGroup,
    Checkbox,
    Button
} from '@mui/material'
import './style.css'

function Homepage() {
    return (
        <div className="hero">
            <div className="hero-cta">
                <h2>Start Building Habits</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos obcaecati
                    autem maxime, laboriosam cupiditate, reiciendis porro quo, hic harum nobis
                    nesciunt fugiat tenetur quaerat quia repellendus reprehenderit pariatur in
                    rem?
                </p>
            </div>

            <form className="heroForm">
                <div className="heroContent">
                    <h3>Get Started Today</h3>
                    <FormLabel style={{ color: '#024e76' }}>
                        Fill out this form and one of our trainers will schedule a consult
                    </FormLabel>

                    <div className="textArea">
                        <TextField id="standard-basic" label="Full name" variant="standard" style={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', marginBottom: "10px", opacity: '0.8' }} />
                        <TextField id="standard-basic" label="Email" variant="standard" style={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', marginBottom: "10px", opacity: '0.8' }} />
                        <TextField id="standard-basic" label="Phone number" variant="standard" style={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', marginBottom: "10px", opacity: '0.8' }} />
                    </div>

                    <div className="radioGroupButton">
                        <FormControl >
                            <FormLabel style={{ color: '#024e76' }}>Have you worked out with a trainer before?</FormLabel>
                            <RadioGroup
                                row
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="checkbox">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="I acknowledge that I am at least 18 years of age." style={{ color: '#024e76' }} />
                        </FormGroup>
                    </div>

                    <Button variant="contained">Get Running!</Button>
                </div>
            </form>
        </div>
    )
}

export default Homepage;
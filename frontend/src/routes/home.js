import React, { Component } from 'react';
import Navbar from './../components/navbar.js';
import Grid from './../components/grid.js';
import PerformanceChart from "./../components/performanceChart.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            benchmarks: null,
        };
    }

    render() {
        return (
            <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}
            >
                <Navbar/>
                <Grid/>
                <PerformanceChart
                    metric='cpu'
                />
            </div>
        )
    }
}




export default (Home);
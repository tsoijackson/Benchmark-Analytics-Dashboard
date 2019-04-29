import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
import { curveCatmullRom } from 'd3-shape';
import './../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';

import  moment from 'moment';
import { array } from 'prop-types';


function dateFormatter(date) {
    return moment(date).format('YYYY-MM-DD');
}

const styles = {
    root: {
    },
    title: {
        fontWeight: 'bold',
        fontSize: '35px'
    }
}

class PerformanceChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branches: null,
            data: {},
            start: null,
            end: null,
            yAxisTickValues: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/branches")
            .then(response => {
                // set initial start and end dates
                let current_start = new Date();
                let current_end = new Date();
                current_start.setDate(current_start.getDate() - 3); // past 3 days
                current_end.setDate(current_end.getDate());

                this.setState({
                    branches: response.data,
                    start: dateFormatter(current_start),
                    end: dateFormatter(current_end)
                });
            })
            .then(() => {
                console.log(this.state.branches);
                this.state.branches.forEach(branch => {
                    axios
                        .get(`http://localhost:5000/benchmarks?start=${this.state.start}&end=${this.state.end}&branch=${branch}`)
                        .then(response => {
                            let branch_data = [];

                            response.data.forEach(element => {
                                branch_data.push({ x:element.cpu, y:element.create_time})
                            });

                            console.log(response.data, branch_data)
                        });
                });
                this.forceUpdate();
            })
            .then(() => {
                console.log('final state', this.state);
            });
    }

    render() {

        let lines = []

        if (this.state.branches !== null) {
            this.state.branches.forEach(branch => {
                lines.push(
                    <LineSeries
                        className="first-series"
                        data={[{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 }]}
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 4
                        }}
                    />
                );
            });
        }


        return (
            <div>
                <div className={this.props.classes.title}>
                    {this.props.metric}
                </div>

                <XYPlot width={1600} height={850}>
                    <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
                    <VerticalGridLines style={{ stroke: '#B7E9ED' }} />

                    <XAxis
                        title="Time"
                        style={{
                            line: { stroke: '#ADDDE1' },
                            ticks: { stroke: '#ADDDE1' },
                            text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 }
                        }}
                    />

                    <YAxis
                        title="Load"
                        tickValues={this.state.yAxisTickValues}
                    />

                    {lines}

                </XYPlot>
            </div>
        );
    }

}

export default withStyles(styles)(PerformanceChart);
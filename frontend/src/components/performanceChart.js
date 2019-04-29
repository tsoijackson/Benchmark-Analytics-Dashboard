import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
import { curveCatmullRom } from 'd3-shape';
// import "./node_modules/react-vis/dist/style"
import './../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';

const styles = {
    root: {
        // backgroundColor: '#191d1e !important',
        // color: '#de5e5f'
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
            data: null,
            yAxisTickValues: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        }
    }

    async componentDidMount() {
        axios
            .get("http://localhost:5000/branches")
            .then(response => {
                this.setState({
                    branches: response.data
                });
            })
            .then(() => {
                console.log(this.state.branches);
                this.state.branches.forEach(branch => {
                });
                this.forceUpdate();
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
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './graph.css';

const data = [
    { template: 'wood', count: 183 },
    { template: 'bars', count: 128 },
    { template: 'bottles', count: 181 },
    { template: 'pharma', count: 143 },
    { template: 'layers', count: 193 },
    { template: 'misc', count: 129 },
];

function Graph() {
    return (
        <Paper className="Bars">
            <Chart
                data={data}
                width={'600'}
            >
                <ArgumentAxis />
                <ValueAxis max={200} />

                <BarSeries
                    valueField="count"
                    argumentField="template"
                />
                <Title text="Monthly Usage" />
                <Animation />
            </Chart>
        </Paper>
    );
}

export default Graph;

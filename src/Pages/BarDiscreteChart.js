import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: "Cumulative Return",
        values: [{
            "label": "Linux",
            "value": 180,
            "color": "#3ebfea"
        }, {
            "label": "Windows",
            "value": 20,
            "color": "#04a9f5"
        }, {
            "label": "Running",
            "value": 50,
            "color": "#ff8a65"
        }, {
            "label": "ShutDown",
            "value": 120,
            "color": "#1de9b6"
        }, {
            "label": "Stopped",
            "value": 30,
            "color": "#4C5667"
        }, {
            "label": "Users",
            "value": 20,
            "color": "#69CEC6"
        }, {
            "label": "Outages",
            "value": 5,
            "color": "#a389d4"
        }]
    }
];

class BarDiscreteChart extends React.Component {

    render() {
        return <NVD3Chart tooltip={{enabled: true}} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />
    }
}

export default BarDiscreteChart;
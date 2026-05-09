import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": "std_001",
    "name": "Ayan",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": "std_002",
    "name": "Nadia",
    "physics": 74,
    "chemistry": 81,
    "math": 88
  },
  {
    "id": "std_003",
    "name": "Rahim",
    "physics": 69,
    "chemistry": 73,
    "math": 80
  },
  {
    "id": "std_004",
    "name": "Sara",
    "physics": 91,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": "std_005",
    "name": "Tanvir",
    "physics": 77,
    "chemistry": 70,
    "math": 84
  },
  {
    "id": "std_006",
    "name": "Mim",
    "physics": 88,
    "chemistry": 92,
    "math": 90
  },
  {
    "id": "std_007",
    "name": "Hasan",
    "physics": 64,
    "chemistry": 68,
    "math": 72
  },
  {
    "id": "std_008",
    "name": "Priya",
    "physics": 82,
    "chemistry": 85,
    "math": 87
  },
  {
    "id": "std_009",
    "name": "Sabbir",
    "physics": 71,
    "chemistry": 75,
    "math": 79
  },
  {
    "id": "std_010",
    "name": "Jannat",
    "physics": 93,
    "chemistry": 90,
    "math": 97
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"} ></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;
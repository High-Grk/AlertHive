'use client';

import { Card, Title, Text } from '@tremor/react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    day: 'Mie. 28',
    Incendios: 4,
    Rescates: 1
  },
  {
    day: 'Jue. 29',
    Incendios: 2,
    Rescates: 1
  },
  {
    day: 'Vie. 30',
    Incendios: 6,
    Rescates: 3
  },
  {
    day: 'Sáb. 01',
    Incendios: 7,
    Rescates: 2
  },
  {
    day: 'Dom. 02',
    Incendios: 1,
    Rescates: 3
  }
];

// Tuve que utilizar recharts porque existe un bug bloqueado en @tremor/react (https://github.com/tremorlabs/tremor/issues/527)
export default function RenderLineChart() {
  return (
    <Card className="mt-6 w-full h-full" style={{ width: '100%', height: '400px' }}>
      <Title>Emergencias</Title>
      <Text>Comparación entre Incendios y Rescates</Text>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 5,
            left: 5,
            bottom: 5
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Incendios" stroke="#b30000" />
          <Line type="monotone" dataKey="Rescates" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

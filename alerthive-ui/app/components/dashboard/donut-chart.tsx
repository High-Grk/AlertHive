'use client';

import {
  Badge,
  Card,
  DonutChart,
  Legend,
  List,
  ListItem,
  Title
} from '@tremor/react';
import { Emergency } from '../../../lib/types/emergency';

interface EmergencyCategory {
  name: string;
  count: number;
  ratio: string;
}

export default function DonutChartComponent({
  emergencies
}: {
  emergencies: Emergency[];
}) {
// Obtener la cantidad de emergencias por categoría
const categoryCounts: { [category: string]: number } = {};
for (const emergency of emergencies) {
  const category = emergency.category;
  categoryCounts[category] = (categoryCounts[category] || 0) + 1;
}

// Calcular el total de emergencias
const totalCount = emergencies.length;

// Obtener los nombres y ratios para el gráfico de pastel
const categoryData = [];
for (const category in categoryCounts) {
  const count = categoryCounts[category];
  const ratio = ((count / totalCount) * 100).toFixed(0);
  categoryData.push({ name: category, count, ratio });
}

// Ordenar los datos por ratio descendente
categoryData.sort((a, b) => b.count - a.count);
const emergenciesStat: EmergencyCategory[] = categoryData;

  return (
    <>
      <Card>
        <Title>Proporción emergencias</Title>
        <Legend categories={emergenciesStat.map((emergency) => emergency.name)} className="mt-2" />
        <DonutChart
          data={emergenciesStat}
          category="count"
          index="name"
          className="mt-6"
        />
        <List className="mt-6">
          {emergenciesStat.map((emergency) => (
            <ListItem key={emergency.name}>
              {emergency.name}
              <Badge size="xs" color="slate">
                {emergency.ratio}%
              </Badge>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}

import { Flex, Text, Title } from '@tremor/react';
import { queryBuilder } from '../lib/planetscale';
import DasboardContentComponent from './components/dashboard-content';

export default async function IndexPage() {
  const emergencies = await queryBuilder
    .selectFrom('emergencies')
    .select([
      'id',
      'latitude',
      'longitude',
      'full_text',
      'emergency_code',
      'category'
    ])
    .orderBy('id', 'desc')
    .limit(15)
    .execute();

  return (
    // <></>
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Flex justifyContent="center" flexDirection="col">
        <Title>Emergencias en Temuco</Title>
        <Text>Mapa de emergencias.</Text>
      </Flex>

      <DasboardContentComponent emergencies={emergencies} />
    </main>
  );
}

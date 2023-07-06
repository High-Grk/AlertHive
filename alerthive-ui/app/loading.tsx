import { Title, Text, Flex } from '@tremor/react';

export default async function Loading() {
  // https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Flex justifyContent="center" flexDirection="col">
        <Title>Emergencias en Temuco</Title>
        <Text>Mapa de emergencias.</Text>
      </Flex>
    </main>
  );
}

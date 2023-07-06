'use client';

import { useRef, useState } from 'react';
import { Emergency } from '../../lib/types/emergency';
import EmergencyMapComponent from './dashboard/emergency-map';
import { Card, Flex, Title, Text, Col, Grid } from '@tremor/react';
import Chart from './dashboard/chart';
import DonutChartComponent from './dashboard/donut-chart';
import GridComponent from './dashboard/grid-components';
import RecentEmergenciesComponent from './dashboard/recent-emergencies';
import { Map, MapProvider, useMap } from 'react-map-gl';

export default function DasboardContentComponent({
  emergencies
}: {
  emergencies: Emergency[];
}) {
  const [selectedEmergency, setSelectedEmergency] = useState<Emergency | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <GridComponent>
        <MapProvider>
          <Col numColSpanLg={2}>
            <Card className="h-96">
              <Map
                initialViewState={{
                  longitude: -72.5983,
                  latitude: -38.7396,
                  zoom: 12
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken="pk.eyJ1IjoiY29ucXV4aW9uIiwiYSI6ImNsaHU4bDZzZDFlMzQzaG81NTZ4b2sxbWgifQ.ulvIy-r_njw_VdXatUOR-g"
                attributionControl={false}
                id="emergencyMap"
              >
                <EmergencyMapComponent
                  emergencies={emergencies}
                  selectedEmergency={selectedEmergency}
                  setSelectedEmergency={setSelectedEmergency}
                  showPopup={showPopup}
                  setShowPopup={setShowPopup}
                />
              </Map>
            </Card>
          </Col>

          <RecentEmergenciesComponent
            emergencies={emergencies}
            setSelectedEmergency={setSelectedEmergency}
            setShowPopup={setShowPopup}
          />
        </MapProvider>
      </GridComponent>

      <Flex className="flex-col items-center">
        <hr className="w-full mt-6" />
        <Text className="mt-6">Información últimas 15 emergencias.</Text>
      </Flex>

      <Flex className="mt-6" flexDirection='col'>
        <DonutChartComponent emergencies={emergencies} />
        <Chart />
      </Flex>
    </>
  );
}

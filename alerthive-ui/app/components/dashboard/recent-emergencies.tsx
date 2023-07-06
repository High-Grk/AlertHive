'use client';

import { Card, Title, Text, Callout } from '@tremor/react';
import { Emergency } from '../../../lib/types/emergency';
import { ExclamationTriangleIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useMap } from 'react-map-gl';

export default function RecentEmergenciesComponent({
  emergencies,
  setSelectedEmergency,
  setShowPopup
}: {
  emergencies: Emergency[];
  setSelectedEmergency: React.Dispatch<React.SetStateAction<Emergency | null>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { emergencyMap } = useMap();

  return (
    <Card className='h-96 overflow-auto'>
      <Title>Emergencias recientes</Title>
      <Text>Accede a la publicación</Text>

      {emergencies.map((emergency) => (
        <Callout
          key={emergency.id}
          className="mt-4 cursor-pointer hover:bg-amber-100"
          icon={ExclamationTriangleIcon}
          title=""
          color="amber"
          onClick={() => {
            emergencyMap.flyTo({
              center: [emergency.longitude, emergency.latitude]
            });
            setSelectedEmergency(emergency);
            setShowPopup(true);
          }}
        >
          {/* FIXME: Hydration failed because the initial UI does not match what was rendered on the server. */}
          {/* Este div dentro de Callout está muy posiblemente causando el error al no poder tener elementos <div> en su contenido, ocurre lo mismo con el componente Flex de tremor */}
          <div className="flex justify-between">
            {emergency.full_text}
            <a
              href={`https://twitter.com/bomberostemuco/status/${emergency.id}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver publicación"
              className="right"
            >
              <LinkIcon className="h-6 w-6 text-blue-500" />
            </a>
          </div>
        </Callout>
      ))}
    </Card>
  );
}

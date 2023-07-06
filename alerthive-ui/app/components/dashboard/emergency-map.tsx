'use client';

import { Map, Marker, Popup } from 'react-map-gl';
import { Emergency } from '../../../lib/types/emergency';
import { Button, Text } from '@tremor/react';
import { LinkIcon } from '@heroicons/react/24/outline';

export default function EmergencyMapComponent({
  emergencies,
  selectedEmergency,
  setSelectedEmergency,
  showPopup,
  setShowPopup
}: {
  emergencies: Emergency[];
  selectedEmergency: Emergency | null;
  setSelectedEmergency: React.Dispatch<React.SetStateAction<Emergency | null>>;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
        {emergencies.map((emergency) => (
          <>
            <Marker
              latitude={emergency.latitude}
              longitude={emergency.longitude}
              onClick={() => {
                setSelectedEmergency(emergency);
                setShowPopup(true);
              }}
              color="#b30000"
            ></Marker>

            {showPopup && selectedEmergency === emergency && (
              <Popup
                latitude={emergency.latitude}
                longitude={emergency.longitude}
                onClose={() => setShowPopup(false)}
                closeOnClick={false}
                offset={25}
              >
                <Text>{emergency.full_text}</Text>
                <Button
                  className="mt-2"
                  size="xs"
                  icon={LinkIcon}
                  variant="light"
                >
                  <a
                    href={`https://twitter.com/bomberostemuco/status/${emergency.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver publicación"
                  >
                    Ver publicación
                  </a>
                </Button>
              </Popup>
            )}
          </>
        ))}
    </>
  );
}

import { Generated } from 'kysely';

export interface Emergency {
  // id: Generated<number>;
  id: number; // parcial fix para hard-codear el id
  latitude: number;
  longitude: number;
  full_text: string;
  emergency_code: string;
  category: string;
}

import { Injectable } from '@nestjs/common';

export interface Cenote {
  id: number;
  name: string;
  location: string;
  description: string;
  mapImageUrl: string;
}

@Injectable()
export class CenotesService {
  private readonly cenotes: Cenote[] = [
    {
      id: 1,
      name: 'Cenote Dos Ojos',
      location: 'Near Tulum',
      description: 'Famous cave system with crystal clear water.',
      mapImageUrl: 'https://mock-s3-bucket.s3.amazonaws.com/dos-ojos-map.jpg',
    },
    {
      id: 2,
      name: 'Cenote Carwash (Aktun Ha)',
      location: 'Near Tulum',
      description: 'Popular for diving and snorkeling.',
      mapImageUrl: 'https://mock-s3-bucket.s3.amazonaws.com/carwash-map.jpg',
    },
    {
      id: 3,
      name: 'Cenote Azul',
      location: 'Near Playa del Carmen',
      description: 'Beautiful open cenote with deep and shallow areas.',
      mapImageUrl: 'https://mock-s3-bucket.s3.amazonaws.com/azul-map.jpg',
    },
    // Add more cenotes as needed
  ];

  findAll(): Cenote[] {
    return this.cenotes;
  }

  findOne(id: number): Cenote | undefined {
    return this.cenotes.find(c => c.id === id);
  }
}

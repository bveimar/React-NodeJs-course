import {Entity, model, property} from '@loopback/repository';

@model()
export class Flights extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  number?: number;

  @property({
    type: 'string',
    required: true,
    default: "LAX",
  })
  origin: string;

  @property({
    type: 'string',
    required: true,
  })
  destination: string;


  constructor(data?: Partial<Flights>) {
    super(data);
  }
}

export interface FlightsRelations {
  // describe navigational properties here
}

export type FlightsWithRelations = Flights & FlightsRelations;

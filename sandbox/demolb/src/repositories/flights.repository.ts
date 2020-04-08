import {DefaultCrudRepository} from '@loopback/repository';
import {Flights, FlightsRelations} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FlightsRepository extends DefaultCrudRepository<
  Flights,
  typeof Flights.prototype.number,
  FlightsRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Flights, dataSource);
  }
}

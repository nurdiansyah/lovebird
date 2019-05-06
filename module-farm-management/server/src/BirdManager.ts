import { Pagination, Connection } from '@deboxsoft/typeorm';
import { Ring, Bird, BirdInput, BirdRecord, BirdRepo, BirdRecordInput } from './bird';
import { SpeciesID, Species, SpeciesRepo, SpeciesInput } from './species';

export class BirdManager {
  private birdRepo: BirdRepo;
  private speciesRepo: SpeciesRepo;

  constructor({ connection }: { connection: Connection }) {
    this.birdRepo = connection.getCustomRepository(BirdRepo);
    this.speciesRepo = connection.getCustomRepository(SpeciesRepo);
  }

  registerBird(ring: string, input: BirdInput): Promise<Bird> {
    return this.birdRepo.create({ ring, ...input });
  }

  updateBird(ring: string, attributes: BirdInput): Promise<Bird> {
    return this.birdRepo.update(ring, attributes);
  }

  removeBird(ring: string | Ring[]): Promise<Ring[]> {
    return this.birdRepo.remove(ring);
  }

  createSpecies(input: SpeciesInput): Promise<Species> {
    return this.speciesRepo.create(input);
  }

  updateSpecies(id: number, attributes: SpeciesInput): Promise<Species> {
    return this.speciesRepo.update(id, attributes);
  }

  removeSpecies(id: SpeciesID | SpeciesID[]): Promise<SpeciesID[]> {
    return this.speciesRepo.remove(id);
  }

  addRecordBird(input: BirdRecordInput): Promise<BirdRecord> {
    return this.birdRepo.addRecord(input);
  }

  public checkRing(ring: Ring) {
    return this.birdRepo.findByRing(ring);
  }

  findBirdByFarm(farmId, pagination): Promise<[Bird[], number]> {
    const data = this.birdRepo.findByFarm(farmId, pagination);
    const total = this.birdRepo.countByFarm(farmId);
    return Promise.all([data, total]);
  }

  findBirdByMate(mateId, pagination?: Pagination): Promise<[Bird[], number]> {
    const data = this.birdRepo.findByMate(mateId, pagination);
    const total = this.birdRepo.countByMate(mateId);
    return Promise.all([data, total]);
  }

  findBirdBySpecies(speciesId: number, pagination?: Pagination): Promise<[Bird[], number]> {
    const data = this.birdRepo.findBySpecies(speciesId, pagination);
    const total = this.birdRepo.countBySpecies(speciesId);
    return Promise.all([data, total]);
  }

  listSpecies(pagination?: Pagination): Promise<Species[]> {
    return this.speciesRepo.findAll(pagination);
  }

  getRecord(ring: string, pagination?: Pagination): Promise<[BirdRecord[], number]> {
    const data = this.birdRepo.getRecord(ring, pagination);
    const total = this.birdRepo.countRecord(ring);
    return Promise.all([data, total]);
  }

  getSpecies(id: SpeciesID): Promise<Species | undefined> {
    return this.speciesRepo.findById(id);
  }
}

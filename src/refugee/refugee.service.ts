import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormResponseType } from 'src/common/form-response-type';
import { Repository } from 'typeorm';
import { CreateRefugeeDto } from './dto/create-refugee.dto';
import { FormResultDto } from './dto/result.dto';
import { UpdateRefugeeDto } from './dto/update-refugee.dto';
import { Form } from './entities/form.entity';
import { Refugee } from './entities/refugee.entity';

@Injectable()
export class RefugeeService {
  constructor(
    @InjectRepository(Refugee)
    private readonly refugeeRepository: Repository<Refugee>,
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  create(createRefugeeDto: CreateRefugeeDto) {
    return this.refugeeRepository
      .createQueryBuilder()
      .insert()
      .into(Refugee)
      .values(createRefugeeDto)
      .execute();
  }

  submitForm(dto: FormResultDto) {
    const { results } = dto;
    const form = new Form();
    const refugee = new Refugee();

    results.forEach(({ id, title, response }) => {
      if (form.hasOwnProperty(FormResponseType[id.toString()])) {
        form[FormResponseType[id.toString()]] = response;
      } else if (refugee.hasOwnProperty(FormResponseType[id.toString()])) {
        refugee[FormResponseType[id.toString()]] = response;
      }
    });

    // save form

    // associate form with refugee and save refugee
    console.log(results);
    console.log(form, refugee);
  }

  findAllWithBasicInfo() {
    return this.refugeeRepository
      .createQueryBuilder('refugee')
      .leftJoinAndSelect('refugee.attorneyInCharge', 'attorney')
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} refugee`;
  }

  update(id: number, updateRefugeeDto: UpdateRefugeeDto) {
    return `This action updates a #${id} refugee`;
  }

  remove(id: number) {
    return `This action removes a #${id} refugee`;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormResponseType } from 'src/common/form-response-type';
import { AXIOS_INSTANCE_TOKEN } from 'src/common/http/http.constants';
import { HttpService } from 'src/common/http/http.service';
import { MongoApiService } from 'src/common/mongo-api/mongo-api.service';
import { Repository } from 'typeorm';
import { CreateRefugeeDto } from './dto/create-refugee.dto';
import { FormResultDto } from './dto/result.dto';
import { UpdateRefugeeDto } from './dto/update-refugee.dto';
import { Form } from './entities/form.entity';
import { Refugee } from './entities/refugee.entity';

@Injectable()
export class RefugeeService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mongoApiService: MongoApiService, // private readonly refugeeRepository: Repository<Refugee>, // @InjectRepository(Refugee) // @InjectRepository(Form) // private readonly formRepository: Repository<Form>,
  ) {}

  async create(body: any) {
    const { data } = await this.mongoApiService.insertOne(body);
    return data;
    // return this.refugeeRepository
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Refugee)
    //   .values(createRefugeeDto)
    //   .execute();
  }

  // TODO: Mongo로 저장해야 함
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

  async findAll() {
    const { data } = await this.mongoApiService.findMany({ Surname: '' });
    return data;
  }

  async findOne(id: string) {
    const { data } = await this.mongoApiService.findOne(id);
    return data;
  }

  findOneBasicInfo(id: string) {
    // return this.refugeeRepository
    //   .createQueryBuilder()
    //   .where('id = :id', { id })
    //   .getOne();
  }

  async update(id: string, body: any) {
    const { data } = await this.mongoApiService.updateOne(id, body);
    return data;
  }

  async remove(id: string) {
    const { data } = await this.mongoApiService.deleteOne(id);
    return data;
  }
}

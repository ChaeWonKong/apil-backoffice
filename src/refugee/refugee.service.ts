import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormResponseType } from 'src/common/form-response-type';
import { HttpService } from 'src/common/http/http.service';
import { MongoApiService } from 'src/common/mongo-api/mongo-api.service';
import { FilterRefugeeDto } from './dto/filter-refugee.dto';
import { FormResultDto } from './dto/result.dto';
import { Form } from './entities/form.entity';
// import { Refugee } from './entities/refugee.entity';
import { RefugeeDocument, Refugee } from './schemas/refugee.schema';

@Injectable()
export class RefugeeService {
  constructor(
    @InjectModel(Refugee.name)
    private refugeeModel: Model<RefugeeDocument>,

    private readonly httpService: HttpService,
    private readonly mongoApiService: MongoApiService, // private readonly refugeeRepository: Repository<Refugee>, // @InjectRepository(Refugee) // @InjectRepository(Form) // private readonly formRepository: Repository<Form>,
  ) {}

  create(body: any) {
    return this.refugeeModel.insertMany([body]);
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

  async findAll(filterDto?: FilterRefugeeDto) {
    return this.refugeeModel.find(filterDto).select(['-form']).exec();
  }

  findOne(id: string) {
    return this.refugeeModel.findById(id).exec();
    // const { data } = await this.mongoApiService.findOne(id);
    // return data;
  }

  async update(id: string, body: any) {
    return this.refugeeModel.updateOne({ _id: id }, body);
    // const { data } = await this.mongoApiService.updateOne(id, body);
    // return data;
  }

  async remove(id: string) {
    return this.refugeeModel.findByIdAndDelete(id);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '../http/http.service';

@Injectable()
export class MongoApiService {
  constructor(
    // @Inject(HttpService)
    private readonly httpService: HttpService,

    // @Inject(ConfigService)
    private configService: ConfigService,
  ) {}

  createRequestUrl(endpoint: string) {
    const baseUrl = this.configService.get<string>('MONGO_API_URL');
    return `${baseUrl}/${endpoint}`;
  }

  createRequestConfig() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': this.configService.get<string>('MONGO_API_KEY'),
      },
    };
  }

  createDataObject(data: any) {
    return {
      collection: 'refugee',
      database: 'tutorial',
      dataSource: 'apil',
      ...data,
    };
  }

  findOne(id: string) {
    const url = this.createRequestUrl('action/findOne');
    const data = this.createDataObject({ filter: { _id: { $oid: id } } });
    const config = this.createRequestConfig();
    return this.httpService.post(url, data, config);
  }

  findMany(filter?: Object) {
    const url = this.createRequestUrl('action/find');
    const data = this.createDataObject({ filter });
    const config = this.createRequestConfig();
    return this.httpService.post(url, data, config);
  }
  insertOne(document: any) {
    const url = this.createRequestUrl('action/insertOne');
    const data = this.createDataObject({ document });
    const config = this.createRequestConfig();
    return this.httpService.post(url, data, config);
  }
  insertMany() {}

  updateOne(id: string, $set: any) {
    const url = this.createRequestUrl('action/updateOne');
    const data = this.createDataObject({
      filter: { _id: { $oid: id } },
      update: { $set },
    });
    const config = this.createRequestConfig();
    return this.httpService.post(url, data, config);
  }

  // TODO: 추후 구현
  updateMany() {}
  replaceOne() {}

  deleteOne(id: string) {
    const url = this.createRequestUrl('action/deleteOne');
    const data = this.createDataObject({ filter: { _id: { $oid: id } } });
    const config = this.createRequestConfig();
    return this.httpService.post(url, data, config);
  }

  deleteMany() {}
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from './url.interface';
import { CreateUrlDto } from './create-url.dto';

@Injectable()
export class UrlService {
  constructor(@InjectModel('Url') private readonly urlModel: Model<Url>) {}

  async create(createUrlDto: CreateUrlDto): Promise<Url> {
    const createdUrl = new this.urlModel(createUrlDto);
    return createdUrl.save();
  }

  async findOne(id: string): Promise<Url> {
    return this.urlModel.findOneAndUpdate(
      { urlId: id },
      { $inc: { clicks: 1 } },
    );
  }
}

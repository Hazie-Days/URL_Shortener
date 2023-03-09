import { Model } from 'mongoose';
import { Url } from './url.interface';
import { CreateUrlDto } from './create-url.dto';
export declare class UrlService {
    private readonly urlModel;
    constructor(urlModel: Model<Url>);
    create(createUrlDto: CreateUrlDto): Promise<Url>;
    findOne(id: string): Promise<Url>;
}

import { UrlService } from './url.service';
import { CreateUrlDto } from './create-url.dto';
export declare class UrlController {
    private readonly urlService;
    constructor(urlService: UrlService);
    create(createUrlDto: CreateUrlDto): Promise<import("./url.interface").Url>;
    findOne(id: string): Promise<{
        url: string;
    }>;
}

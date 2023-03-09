import { Controller, Get, Post, Body, Redirect, Param } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './create-url.dto';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get('/id')
  @Redirect()
  async findOne(@Param('id') id: string) {
    const url = await this.urlService.findOne(id);
    return { url: url.origUrl };
  }
}

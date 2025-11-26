import { Controller, Get, Param } from '@nestjs/common';
import { CenotesService, Cenote } from './cenotes.service';

@Controller('cenotes')
export class CenotesController {
  constructor(private readonly cenotesService: CenotesService) {}

  @Get()
  findAll(): Cenote[] {
    return this.cenotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Cenote | undefined {
    return this.cenotesService.findOne(Number(id));
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'First route to test swagger' })
  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }

}

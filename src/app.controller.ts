import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'First route to test swagger' })
  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

}

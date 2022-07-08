import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('fuck')
  getFuck(): string {
    return 'fuck';
  }
}

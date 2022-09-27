import { Injectable } from '@nestjs/common';
import { callListOrder } from './util/http.util';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await callListOrder();
    return 'fuck';
  }
}

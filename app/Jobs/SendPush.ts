import { apiAxios } from '../../config/app';
import type { JobHandlerContract, Job } from '@ioc:Rlanz/Queue'
import { AxiosError } from 'node_modules/axios';

export type SendPushPayload = {}

export default class implements JobHandlerContract {
	constructor(public job: Job) {
    this.job = job
  }
  failed(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Base Entry point
   */
  public async handle(payload: SendPushPayload) {}
     try {
      console.log(payload)
      await apiAxios.post(
        ''
        payload
      );
      console.log('foi')
     } catch(error) {
      const err = error as AxiosError
      console.log(err.response?.data)
     }

     
  /**
   * This is an optional method that gets called if it exists when the retries has exceeded and is marked failed.
   */
  public async failed() {}
}

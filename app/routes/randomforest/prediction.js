import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class RandomforestPredictionRoute extends Route {
  @service store;

  async model(params) {
    console.log('estoy en prediction Randomforest');
    console.log(params);
    let response = await this.store.query('Randomforest', params);

    console.log(response);
    return response;
  }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class DecisiontreePredictionRoute extends Route {
  @service store;

  async model(params) {
    console.log('estoy en prediction Decisiontree');
    console.log(params);
    let response = await this.store.query('Decisiontree', params);

    console.log(response);
    return response;
  }
}

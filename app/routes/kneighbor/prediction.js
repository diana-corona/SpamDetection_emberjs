import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class KneighborPredictionRoute extends Route {
  @service store;

  async model(params) {
    console.log('estoy en prediction Kneighbor');
    console.log(params);
    let response = await this.store.query('Kneighbor', params);

    console.log(response);
    return response;
  }
}

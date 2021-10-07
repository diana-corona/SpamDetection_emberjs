import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class RandomforestPredictionController extends Controller {
  queryParams = ['message'];
  @tracked message = null;
}

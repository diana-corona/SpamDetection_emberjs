import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class DecisiontreePredictionController extends Controller {
  queryParams = ['message'];
  @tracked message = null;
}

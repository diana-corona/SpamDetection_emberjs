import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class KneighborPredictionController extends Controller {
  queryParams = ['message'];
  @tracked message = null;
}

import Model, { attr } from '@ember-data/model';

export default class RandomforestModel extends Model {
  @attr message;
  @attr('string') label;
  @attr('percentage') spamprob;
  @attr('string') model;
}

import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr route;
  @attr title;
  @attr description;
}

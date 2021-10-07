import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class InputTextFormComponent extends Component {
  @tracked messagetext = 'Write here';
}

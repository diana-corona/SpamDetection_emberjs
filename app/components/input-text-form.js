import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InputTextFormComponent extends Component {
  @tracked messagetext = 'Write here';
  @tracked response = "";
  @tracked responded = false;
  @tracked loading = false;

  @service store;
  @action
  async launchConfirmDialog() {
  	this.loading = true;
    this.response = await this.store.query(this.args.modelname, {message:this.messagetext});
    this.responded = true;
    this.loading = false;
  }

}

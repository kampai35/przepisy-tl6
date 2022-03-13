import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Input() fromParent: any;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  closeModal(sendData?: any) {
    if(sendData === null || sendData === undefined){
      this.activeModal.dismiss();
    }
    else{
      this.activeModal.close(sendData);
    }
  }

  submit(f: any){
    //
  }

}

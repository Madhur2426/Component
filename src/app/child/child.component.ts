import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  sendDataService: SendDataService = inject(SendDataService);
  selectedValue!: String;
  find: number = 0;
  addInfo: FormGroup;
  constructor() {
    this.addInfo = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      selectedValue: new FormControl(''),
    })
  }

  handleSelection(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement)?.value;
    this.selectedValue = selectedValue;
  }
  get Name() {
    return this.addInfo.get('name');
  }
  get Email() {
    return this.addInfo.get('email');
  }
  get Number() {
    return this.addInfo.get('phone');
  }
  info = ""
  getInformation(): any {
    if (this.addInfo.value.selectedType == "email") {
      this.info = this.addInfo.value.email!;
    }
    else {
      this.info = this.addInfo.value.phone!;
    }
    const data = {
      name: this.addInfo.value.name,
      type: this.addInfo.value.selectedValue,
      info: this.addInfo.value.selectedValue === 'email' ? this.addInfo.value.email : this.addInfo.value.phone
    };
    return data;
  }
  saveDetails() {
    this.sendDataService.addDetails(this.getInformation());
    this.sendDataService.postDetails.subscribe((response: any) => {
      if (response.status === 200)
        console.log("DATA Saved in DB")
      console.log(response)
    });
  }
}

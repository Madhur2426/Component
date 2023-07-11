import { Component, ComponentFactoryResolver, ViewChildren, QueryList, inject } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-fill-info',
  templateUrl: './fill-info.component.html',
  styleUrls: ['./fill-info.component.css']
})
export class FillInfoComponent {
  show: boolean = false;
  childComponent: any;
  @ViewChildren(ChildComponent) childComponents!: QueryList<any>;
  detailsService: SendDataService = inject(SendDataService);


  components: any[] = [{}]

  generateDynamicComponent() {
    this.components.push({});
  }

  ngAfterViewInit() {
    this.childComponents.forEach(childComponent => {
      console.log('/', childComponent.getInformation().info);
      if (childComponent.getInformation().info != '') {
        childComponent.saveDetails()
      }
    })
  }
  saveInformation() {
    setTimeout(() => {
      this.ngAfterViewInit();
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'app-widgetloading',
  templateUrl: './widgetloading.component.html',
  styleUrls: ['./widgetloading.component.css']
})
export class WidgetloadingComponent implements OnInit {

  @Input() widgetStatus:string;

  isWidgetNotReady:boolean = true;

  constructor(private appConstants: AppConstants) { }

  ngOnInit(): void {
    if(this.widgetStatus==this.appConstants.WIDGET_STATUS_OK) {
      this.hideComponent();
    }
  } 

  hideComponent() {
    this.isWidgetNotReady = false;
  }

}
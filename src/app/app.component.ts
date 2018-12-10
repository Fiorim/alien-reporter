import { Component, OnInit } from '@angular/core';
import { ReportFormService } from './report-form.service';
import { AlienForm } from './interfaces/alien-form';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alien-reporter';

  alienForm: AlienForm;


  constructor(private alienFormService: ReportFormService) { }

  ngOnInit() {
    this.alienFormService.getForm().subscribe((response: AlienForm) => {
      this.alienForm = response;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.alienForm.form, event.previousIndex, event.currentIndex);
  }
}


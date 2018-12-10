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

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.alienFormService.getForm().subscribe((response: AlienForm) => {
      this.alienForm = response;
    });
  }
}


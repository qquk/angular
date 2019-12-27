import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {

  filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'complete', label: 'Done'}
  ]

  @Output() filterEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterItems(status) {
    this.filterEvent.emit(status);
  }

}

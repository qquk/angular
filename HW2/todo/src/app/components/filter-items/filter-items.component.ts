import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent {

  filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'complete', label: 'Done'}
  ];

  @Output() filterEvent = new EventEmitter<string>();

  filterItems(status: string): void {
    this.filterEvent.emit(status);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  ngOnInit(): void {}

  searchHousingLocations(searchText: string) {
    if (searchText) {
      this.results = this.locationList.filter((location) =>
        location.city.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }

  selectedLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}

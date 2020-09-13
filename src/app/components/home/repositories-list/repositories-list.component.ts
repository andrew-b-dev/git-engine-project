import {Component, OnInit} from '@angular/core';
import {formatDistance} from 'date-fns';


@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {
  public repositories = [1, 2, 3, 4, 5];

  constructor() {
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from './store/actions/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-test';
  constructor(
    private store: Store,
  ){

  }

  ngOnInit() {
    this.store.dispatch(loadUsers())
  }

}

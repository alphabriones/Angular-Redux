import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state: any = {
    user: null,
    post: []
  };

  get state() {
    return this._state;
  }

  setState(newState: any) {
    this._state = [...this._state, ...newState];
  }

  addUser(user: any) {
    const users = [...this._state.users, user];
    this.setState({users});
  }
}

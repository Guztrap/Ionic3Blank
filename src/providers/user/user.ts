import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {    
  }

  createUser(user:UserModel){
    return this.http.post('http://10.11.1.219:3000/api/users', user);
  }

  loginUser(user:string, pwd:string){
    return this.http.post('http://10.11.1.219:3000/api/login', { user, pwd} )
  }
}

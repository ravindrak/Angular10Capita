import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'https://tasksmanager-302f5.firebaseio.com';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${baseUrl}/Task.json`);
  }

  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }

  creat(data){
    return this.http.post(baseUrl, data);
  }

  update(id, data){
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id){
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(){
    return this.http.delete(baseUrl);
  }

  findByDescription(description) {
    return this.http.get(`${baseUrl}/${description}.json`);
  }




}

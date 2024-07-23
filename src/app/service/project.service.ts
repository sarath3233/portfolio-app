import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  jsonPath: string = './assets/project_details.json'
  constructor(private httpClient: HttpClient) { }

  public getProjects(): Observable<any> {
    return this.httpClient.get(this.jsonPath);
  }
}

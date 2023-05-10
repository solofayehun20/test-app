import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  public users: any[] = [];

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    // create socket connection
    const socket = io('https://mst-full-stack-dev-test.herokuapp.com');
    
    // listen for 'data-update' event
    socket.on('data-update', (data: any) => {
      console.log('Received data update: ', data);
      this.updateUsers(data); // update the users array with the new data
    });

    // retrieve initial data
    this.apiService.getUsers().subscribe((data: any) => {
      console.log('Received initial data: ', data);
      this.updateUsers(data); // update the users array with the initial data
    });
  }

  private updateUsers(data: any) {
    this.users = Object.values(data);
  }
}

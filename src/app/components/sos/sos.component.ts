import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css'],
})
export class SosComponent implements OnInit {
  value = '';
  token: string = '';
  map_info = {};
  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    this.token = this.msg.getToken();
  }

  async sendLocation() {
    this.value = 'Alert sent!';
    if (!navigator.geolocation) {
      alert('Location is not supported');
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      this.map_info = {
        map_url:
          'https://maps.google.com/maps?q=' +
          position.coords.latitude +
          ',' +
          position.coords.longitude +
          '&hl=es;z=14&amp',
        latitute: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      axios.post(
        'https://safedesk.herokuapp.com/api/v1/sos/',
        { map_info: this.map_info },
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
    });
  }
}

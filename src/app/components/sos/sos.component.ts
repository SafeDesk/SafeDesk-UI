import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MessengerService } from 'src/app/services/messenger.service';

declare const L: any;

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css'],
})
export class SosComponent implements OnInit {
  value = '';
  google = '';
  date: any;
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
    this.setView();
  }

  async setView() {
    let { data } = await axios.get(
      'https://safedesk.herokuapp.com/api/v1/sos/',
      {
        headers: { Authorization: `Bearer ${this.token}` },
      }
    );

    console.log(new Date(data[0].created_at));
    const mapData = data[0].map_info;
    console.log(mapData);
    var map = L.map('map').setView([mapData.latitute, mapData.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 13,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var marker = L.marker([mapData.latitute, mapData.longitude]).addTo(map);
    var circle = L.circle([mapData.latitute, mapData.longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(map);
    this.google = mapData.map_url;
    this.date = new Date(data[0].created_at);
  }
}

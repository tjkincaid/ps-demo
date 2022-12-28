import { Component, OnInit } from '@angular/core';
import {UserSettings} from "../data/user-settings";

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  OriginalUserSettings: UserSettings={
    name: 'TJ',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'TJ has some notes...'
  }
  userSettings:UserSettings={...this.OriginalUserSettings};
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';


@Component({
  selector: 'my-app',
  template: `<navbar></navbar>`,
  providers: [SpotifyService]
})
export class AppComponent  { name = 'Angular'; }

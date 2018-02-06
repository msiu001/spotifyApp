import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private clientId: string = '44ed6bb4e6fa4a328b04087c0c85a4c8';
    
    constructor (private _http:Http) {}

    searchMusic(str:string, type='artist'){
        let headers = new Headers();
        let authToken = 'BQDsVAmHV7UWev2is7xjjLUgIkPAXXeQ7sG_3PB57_eRxubEXAy78n1Ji2YmMtoxBvZgXZT-W1oKBoP7NWocslMdXgma7bIV36XeoSQhr0WKEk_2leTIR5K5tbWVWdXhRXyWFcyXxcP-0mGM';
        headers.append('Authorization', 'Bearer '+authToken);
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, { headers })
          .map(res => res.json());
    }



    
}
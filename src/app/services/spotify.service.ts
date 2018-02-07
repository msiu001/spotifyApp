import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
       
    constructor (private _http:Http) {}

    searchMusic(str:string, type='artist'){
        let headers = new Headers();
        let authToken = 'BQBKoGdStcOf3H1zADmxYURv1Pj8Y7DAx6kU2E8YVpTlAyGNAUeE7dkmIjxz0SLlBeSmESvcWD913q1B6d_LHomuqX8wP-dYatatgjxMVj4YjQ49wnigmv9H_3LEf_I7RvWspE68icRpP8Bq';
        headers.append('Authorization', 'Bearer '+authToken);
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, { headers })
          .map(res => res.json());
    }

    getArtist(id: string){
        console.log("this is the id:"+ id);
        let headers = new Headers();
        let authToken = 'BQCkRg3mlk91XIkXeUSVQ2xlByyUuzHTVone36G5h02qzcF_CsJ2rvMfpoJHMurCZBuD89vT99vUeo8NmzTbCXK4fHghQVgtVVdJrWLAekTBbJNuiHzpUYxigbL6AgCZidboPz3QYsItFrbP';
        headers.append('Authorization', 'Bearer '+ authToken);
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+ id;
        return this._http.get(this.artistUrl, { headers })
          .map(res => res.json());
    }



    
}
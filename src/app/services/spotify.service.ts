import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
       
    constructor (private _http:Http) {}

    searchMusic(str:string, type='artist'){
        let headers = new Headers();
        let authToken = 'BQCWc5VJY2gbMORDVT0hVm-kzTzmSSjueLNKGixumaugyM_21-ivXmdnx37GophACjFU5hMpuVEcvA7Vn3_DrxLJ-VMsBHwfa_L1FET-o2kZx3cL-iAEvkjTd1_KNxYkEElpsDNoJRgzoxo3';
        headers.append('Authorization', 'Bearer '+authToken);
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, { headers })
          .map(res => res.json());
    }

    getArtist(id: string){
        console.log("this is the id:"+ id);
        let headers = new Headers();
        let authToken = 'BQBAMP-kzQgEUkOu85BmNIR5tjvbVTAELEIfAtkEPkLalLNtYGbQ9X1xjg4-R7RRd-yy7v9RLdz2TbRzGhuzfjNr7SFOUQX-dNqP7nrUHLl7vQAQsD-vJ-QXlhqJJDB6OxVeR1hRKmaHfhU3';
        headers.append('Authorization', 'Bearer '+ authToken);
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+ id;
        return this._http.get(this.artistUrl, { headers })
          .map(res => res.json());
    }

    getAlbums(artistId: string){
        console.log("this is the id:"+ artistId);
        let headers = new Headers();
        let authToken = 'BQBSrlssdepwmKvfnMxQ6TRGRu_veS440MdCjePyr9QEIDT06K9z3Kt4Fwz3Qj-GDwBxNG8giEzj1iUeYzEU11WsbZWQJ6rUZHN-5N5No10gMM5qFUihpYyToB3I31CWapOzA8KpNCBC6w';
        headers.append('Authorization', 'Bearer '+ authToken);
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums';
        return this._http.get(this.albumsUrl, { headers })
          .map(res => res.json());
    }


    
}
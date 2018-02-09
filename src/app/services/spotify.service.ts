import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
       
    constructor (private _http:Http) {}

    searchMusic(str:string, type='artist'){
        let headers = new Headers();
        let authToken = 'BQCZVHII9eGixErGamwlJf875o97SYL__e0G5PnT9-RLQyRk3zjkKr8iFPN69VKb9HTxSIvL9xn990LaiFkFQOTA4fsxLFEkY7CNkuV35cW91uH174OUo4jX-aw7Mi7YNwS56niG5LRRVDHQ';
        headers.append('Authorization', 'Bearer '+authToken);
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, { headers })
          .map(res => res.json());
    }

    getArtist(id: string){
        let headers = new Headers();
        let authToken = 'BQC43RVU2OdFs9s7fdCkgKxIYvmcYUBcASpjtmuG8ZPv0nX70W_2YAxA5MY0uY6q4AhMktdfGddQeFX8J49pbVR7fwBTUJEQN2EACE1y9ftfYru4Aclo1XY762wy-Ag7L83yPXRr8hGkjimG';
        headers.append('Authorization', 'Bearer '+ authToken);
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+ id;
        return this._http.get(this.artistUrl, { headers })
          .map(res => res.json());
    }

    getAlbums(artistId: string){
        let headers = new Headers();
        let authToken = 'BQDnLcqooOdjfQc4fbZYysOIptYWaSd15JwybZEPD272WxthMgcGcFsXRK7cHFixt_RtKZFq_l0htDID7aFGOFxZyQk7BIZN-wUB3I7nHxw7rLVMvUMa4InAAIWnGfE6DLxWCabklkc33g';
        headers.append('Authorization', 'Bearer '+ authToken);
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums';
        return this._http.get(this.albumsUrl, { headers })
          .map(res => res.json());
    }

    getAlbum(albumId: string){
        let headers = new Headers();
        let authToken = 'BQD4UL467CqCgjCRK8xkEAOy0OO-BbGXtgjetpUPAsb1PxVfBtVXIQRPhP3IvElJ5QDrF4OQWS01Cer9Q-V8W5FOy9d9ntCJGsFYieJcBcKzuF1wUZ1JAFHRqhdp7ZsdWB6y5Z-hNTWXrPO7';
        headers.append('Authorization', 'Bearer '+ authToken);
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+ albumId;
        return this._http.get(this.albumUrl, { headers })
          .map(res => res.json());
    }

    
}
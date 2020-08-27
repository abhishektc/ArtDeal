import { IPaintings } from './model/paintings.model';
import { IArtist} from './artist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pwt } from './model/portraitwallteach.model';
import { User, IUser } from './user.model';
import { Orders, IOrders } from './model/orders.model';

const API_URL = 'http://localhost:8080/api/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  //Artist
  addNewPaintings(formData:FormData): Observable<any> {
    return this.http.post(API_URL + '/addNewPainting', formData);
  }

  getArtistByid(id: any): Observable<IArtist> {
    return this.http.get<IArtist>(`${API_URL + '/getArtistById'}/${id}`);
  }

  updateArtistById(artist:IArtist): Observable<IArtist> {
    return this.http.put<IArtist>(`${API_URL + '/updateArtistById'}/${artist.id}`,artist);
  }

  updatePriceByArtistId(artist:IArtist): Observable<IArtist> {
    return this.http.put<IArtist>(`${API_URL + '/updatePriceByArtistId'}/${artist.id}`,artist);
  }

  getPortraitRequestByArtistId(id:any): Observable<Pwt[]> {
    return this.http.get<Pwt[]>(`${API_URL + '/getPortraitRequestByArtistId'}/${id}`);
  }

  getWallpaintRequestByArtistId(id:any): Observable<Pwt[]> {
    return this.http.get<Pwt[]>(`${API_URL + '/getWallpaintRequestByArtistId'}/${id}`);
  }

  getUserById(id:any): Observable<IUser> {
    return this.http.get<IUser>(`${API_URL + '/getUserById'}/${id}`);
  }
  
  getPwtById(id:any): Observable<Pwt> {
    return this.http.get<Pwt>(`${API_URL + '/getPwtById'}/${id}`);
  }

  portraitWallpaintRequestAcceptOrReject(pwt:Pwt): Observable<Pwt> {
    return this.http.put<Pwt>(`${API_URL + '/portraitWallpaintRequestAcceptOrReject'}/${pwt.id}`,pwt);
  }

  addOrders(orders: Orders): Observable<any> {
    return this.http.post(API_URL + '/addOrders', orders);
  }

  getOrdersByArtistId(id:any): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${API_URL + '/getOrdersByArtistId'}/${id}`);
  }

  updateOrderById(id:any, status:string): Observable<IOrders> {
    return this.http.put<IOrders>(`${API_URL + '/updateOrderById'}/${id}`,status);
  }

  updatePaintingsById(id:any, status:string): Observable<IPaintings> {
    return this.http.put<IPaintings>(`${API_URL + '/updatePaintingsById'}/${id}`,status);
  }

  getPaintingsById(id: any): Observable<IPaintings> {
    return this.http.get<IPaintings>(`${API_URL + '/getPaintingsById'}/${id}`);
  }

  getOrderById(id: any): Observable<Orders> {
    return this.http.get<Orders>(`${API_URL + '/getOrderById'}/${id}`);
  }
}

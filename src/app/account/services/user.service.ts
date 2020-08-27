import { Feedback } from './model/feedback.models';
import { Paintings } from 'src/app/account/services/model/paintings.model';
import { User, IUser } from './user.model';
import { IPaintings } from './model/paintings.model';
import { IArtist} from './artist.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICart } from './model/cart.model';
import { Orders, IOrders } from './model/orders.model';
import { Pwt, IPwt } from './model/portraitwallteach.model';

const API_URL = 'http://localhost:8080/api/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'artist', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  

  // user
  getArtistById(id: any): Observable<IArtist> {
    return this.http.get<IArtist>(`${API_URL + '/getArtistById'}/${id}`);
  }

  getAllArtist(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(API_URL + '/artistlist');
  }

  getAllPortraitArtist(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(API_URL + '/artistPortraitlist');
  }

  getAllWallArtist(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(API_URL + '/artistWallpainterlist');
  }

  getPaintingsByArtistId(id:any): Observable<IPaintings[]> {
    return this.http.get<IPaintings[]>(`${API_URL + '/getPaintingsByArtistId'}/${id}`);
  }

  getPaintingsById(id: any): Observable<IPaintings> {
    return this.http.get<IPaintings>(`${API_URL + '/getPaintingsById'}/${id}`);
  }

  updatePaintingsViewCount(paint:Paintings): Observable<IUser> {
    return this.http.put<IPaintings>(`${API_URL + '/updatePaintingsViewCount'}/${paint.id}`,paint);
  }

  getPwtById(id: any): Observable<IPwt> {
    return this.http.get<IPwt>(`${API_URL + '/getPwtById'}/${id}`);
  }

  addCart(cart: ICart): Observable<any> {
    return this.http.post(API_URL + '/addCart', cart);
  }

  getCartByUserId(id: any): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${API_URL + '/getCartByUserId'}/${id}`);
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(`${API_URL + '/getUserById'}/${id}`);
  }

  deleteCartById(id: any): Observable<any> {
    return this.http.delete(`${API_URL + '/deleteCartById'}/${id}`);
  }

  changeUserAddressById(user:IUser): Observable<IUser> {
      return this.http.put<IUser>(`${API_URL + '/changeUserAddressById'}/${user.id}`,user);
  }

  addOrders(orders: Orders): Observable<any> {
    return this.http.post(API_URL + '/addOrders', orders);
  }

  getOrdersByUserId(id: any): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${API_URL + '/getOrdersByUserId'}/${id}`);
  }

  getOrderById(id: any): Observable<Orders> {
    return this.http.get<Orders>(`${API_URL + '/getOrderById'}/${id}`);
  }

  updateReviewsById(order:IOrders): Observable<IUser> {
    return this.http.put<IOrders>(`${API_URL + '/updateReviewsById'}/${order.id}`,order);
  }

  getsSoldPaintingsCountByArtistId(id:any): Observable<Orders> {
    return this.http.get<Orders>(`${API_URL + '/getsSoldPaintingsCountByArtistId'}/${id}`);
  }

  savePortraitForm(formdata: FormData): Observable<any> {
    return this.http.post(API_URL + '/savePortraitForm', formdata);
  }

  saveWallpaintForm(formdata: FormData): Observable<any> {
    return this.http.post(API_URL + '/saveWallpaintForm', formdata);
  }

  updateOrderById(id:any, status:string): Observable<IOrders> {
    return this.http.put<IOrders>(`${API_URL + '/updateOrderById'}/${id}`,status);
  }

  updatePaintingsById(id:any, status:string): Observable<IPaintings> {
    return this.http.put<IPaintings>(`${API_URL + '/updatePaintingsById'}/${id}`,status);
  }

  getAllPaintingsByApproved(): Observable<IPaintings[]> {
    return this.http.get<IPaintings[]>(API_URL + '/getAllPaintingsByApproved');
  }

  getAllPaintingsByArtistId(id:any): Observable<IPaintings[]> {
    return this.http.get<IPaintings[]>(`${API_URL + '/getAllPaintingsByArtistId'}/${id}`);
  }

  getTopArtist(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(API_URL + '/getTopArtist')
  }

  getAllPaintings(): Observable<Paintings[]> {
    return this.http.get<Paintings[]>(API_URL + '/getAllPaintings')
  }

  getPwtByUserId(id:any): Observable<Pwt[]> {
    return this.http.get<Pwt[]>(`${API_URL + '/getPwtByUserId'}/${id}`);
  }

  get10Artist(): Observable<IArtist[]> {
    return this.http.get<IArtist[]>(API_URL + '/get10Artist')
  }

  feedback(feedback:Feedback): Observable<any> {
    return this.http.post(API_URL + '/feedback', feedback);
  }
}

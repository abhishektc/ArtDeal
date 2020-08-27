import { IFeedback } from './model/feedback.models';
import { IOrders } from './model/orders.model';
import { IUser } from './user.model';
import { IArtist} from './artist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaintings } from './model/paintings.model';

const API_URL = 'http://localhost:8080/api/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

    //admin
    getArtistById(id: any): Observable<IArtist> {
      return this.http.get<IArtist>(`${API_URL + '/getArtistById'}/${id}`);
    }

    getNewArtist(): Observable<IArtist[]> {
      return this.http.get<IArtist[]>(API_URL + '/newArtist');
    }
  
    artistApprove(Artist:IArtist): Observable<IArtist> {
      return this.http.put<IArtist>(`${API_URL + '/artistApproveById'}/${Artist.id}`,Artist);
    }
  
    deleteArtistById(id: any): Observable<IArtist> {
      return this.http.delete<IArtist>(`${API_URL + '/deleteArtistById'}/${id}`);
    }

    getNewPaintings(): Observable<IPaintings[]> {
      return this.http.get<IPaintings[]>(API_URL + '/getNewPaintings');
    }

    getPaintingsById(id: any): Observable<IPaintings> {
      return this.http.get<IPaintings>(`${API_URL + '/getPaintingsById'}/${id}`);
    }

    paintingsApprove(Paintings:IPaintings): Observable<IPaintings> {
      return this.http.put<IPaintings>(`${API_URL + '/paintingsApproveById'}/${Paintings.id}`,Paintings);
    }
  
    deletePaintingsById(id: any): Observable<IPaintings> {
      return this.http.delete<IPaintings>(`${API_URL + '/deletePaintingsById'}/${id}`);
    }

    getAllUser():Observable<IUser[]> {
      return this.http.get<IUser[]>(API_URL + '/getAllUser');
    }

    getAllOrders():Observable<IOrders[]> {
      return this.http.get<IOrders[]>(API_URL + '/getAllOrders');
    }

    getUserById(id: any): Observable<IUser> {
      return this.http.get<IUser>(`${API_URL + '/getUserById'}/${id}`);
    }

    deleteUserById(id: any): Observable<IUser> {
      return this.http.delete<IUser>(`${API_URL + '/deleteUserById'}/${id}`);
    }

    getAllArtist():Observable<IArtist[]> {
      return this.http.get<IArtist[]>(API_URL + '/getAllArtist');
    }

    getTotalArtist(){
      return this.http.get(API_URL + '/getTotalArtist');
    }
  
    getTotalUser(){
      return this.http.get(API_URL + '/getTotalUser');
    }

    getTotalOrdersByUserId(id:any){
      return this.http.get(`${API_URL + '/getTotalOrdersByUserId'}/${id}`);
    }

    getTotalCartByUserId(id:any){
      return this.http.get(`${API_URL + '/getTotalCartByUserId'}/${id}`);
    }

    getAllFeedback():Observable<IFeedback[]> {
      return this.http.get<IFeedback[]>(API_URL + '/getAllFeedback');
    }

    deleteFeedbackById(id: any): Observable<IFeedback> {
      return this.http.delete<IFeedback>(`${API_URL + '/deleteFeedbackById'}/${id}`);
    }
}

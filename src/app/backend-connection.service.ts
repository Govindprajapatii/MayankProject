import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mapTo, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
private readonly apiUrl = "";
  constructor(private http:HttpClient) { } 
   

  CoachingRegistration(CoachingData:any):Observable<boolean>{
    console.log(CoachingData);
  const CoachingDataModel = {
    Coaching_name:CoachingData.CoachingName,
      coaching_admin_name:CoachingData.AdminName,
      coaching_manager_name:CoachingData.ManagerName,
      Coaching_email_id:CoachingData.Email,
      Coaching_phone_number:CoachingData.Phone,
      Coaching_address:CoachingData.Address,
      Coaching_password:CoachingData.Password
  }
  console.log(CoachingDataModel);
  


   return this.http.post<any>(`${this.apiUrl}`,CoachingDataModel).pipe(
    mapTo(true),
    catchError(error => {
      console.log(error);
      return of(false);
    })
  );
  return of(true);
  
  }

}

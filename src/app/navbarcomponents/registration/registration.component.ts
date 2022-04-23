import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { BackendConnectionService } from 'src/app/backend-connection.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private backendService :BackendConnectionService) { }
  CoachingReg : any;
  ngOnInit(): void {

    this.CoachingReg = new FormGroup(
    {
       CoachingName : new FormControl('123'),
      AdminName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ManagerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]),
      Phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      Address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      // ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])

    });
    
  }
 
   onSubmit(){
    this.backendService.CoachingRegistration(this.CoachingReg.value).subscribe();
   }
  

}

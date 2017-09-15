import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import  {User}  from './user.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  uname: any;
  errormsg:any = '';
  user: FormGroup;
  constructor() {}
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

  fromval(){
    if(this.uname === undefined || this.uname ==='' ){
        this.errormsg = "Name Cannot be blank";
    } else {
      this.errormsg = "";
       alert('Success');
    }
  }

}

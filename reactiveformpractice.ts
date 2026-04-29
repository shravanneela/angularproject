import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{ CommonModule } from '@angular/common';  


@Component({
  selector: 'app-reactiveformpractice',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reactiveformpractice.html',
  styleUrl: './reactiveformpractice.css',
})
export class Reactiveformpractice {
usersArray:any[]=[];
userForm=new FormGroup({
  id:new FormControl("0"),
  name:new FormControl(""),
  username:new FormControl(""),
  email:new FormControl(""),

});
constructor(private http:HttpClient){
  this.getAllUsers();
  
}
getAllUsers(){
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    this.usersArray=res;
  })
} 
onEditUser(id:number){
  this.http.get("https://jsonplaceholder.typicode.com/users/" + id).subscribe((res:any)=>{
   this.userForm= new FormGroup({
   id:new FormControl(res.id),  
  name:new FormControl(res.name),
  username:new FormControl(res.username),
  email:new FormControl(res.email),
  });
  })
}

onSaveUser() {
  debugger;
  const obj=this.userForm.value;
  this.http.post("https://jsonplaceholder.typicode.com/users",obj).subscribe((res:any)=>{
    alert("user created")
  })
}
}

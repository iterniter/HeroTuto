import { Component } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'user',
  template: ` 
  
 <p>{{lastName}}</p>
  <h1>Gestion des Employes</h1>
            <fieldset>
                <form>
                    <label>First Name: </label><br>
                    <input type="text" name="firstName" [(ngModel)]="firstName">
                </form>
                <form>
                    <label>last Name: </label><br>
                    <input type="text" name="lastName" [(ngModel)]="lastName">
                </form>
                <form>
                    <label>Phone number: </label><br>
                    <input type="text" name="tel" [(ngModel)]="tel">
                </form>
                <form>
                    <label>Departement </label> <br>
                    <input type="text" name="functionEmploy" [(ngModel)]="functionEmploy">
                </form>
            </fieldset>
            <div>
                <button (click)="allEmploies()">{{showEmploies ?"hide All Emploies" : "show Emploies"}}</button>
                <button (click)="add()">Add</button>
                <button  (click)="delete()">Delete</button>
                <button (click)="editEmploy()">Edit</button>
                <button (click)="departementList()">DepartementList</button>
            </div>    
            <div *ngIf="showEmploies">
             <ul *ngFor="let Employer of tableauEmployer; let i = index">
                <li>
                    {{Employer.firstName}}<br>{{Employer.lastName}}<br>{{Employer.tel}}<br>{{Employer.functionEmploy}}
                </li>
             </ul>
            </div>    
            
         `,
providers: [PostService]
})
export class UserComponent  {
    firstName:string;
    lastName: string;
    tel: string;
    functionEmploy: string;
    tableauEmployer: Employer[];
    employer: Employer;
    showEmploies = false;
    tableauTemporaire: Employer[];

    constructor(private postService: PostService) {
        // Each line has the following format (see sample file):   first name,last name,phone number,department name 
         this.postService.getPost()
    .subscribe(employer => {
         this.tableauEmployer = employer;
        console.log(employer);
     });

 }

// show all Emploies
 allEmploies(): void {
     if (this.showEmploies) {
         this.showEmploies = false;
     }else {
     this.showEmploies = true;
     }
 }
 // I can Add, Edit or Remove an item from the Employ list
 // add
    add(): void {
     let emp = new  Employer( this.firstName, this.lastName, this.tel, this.functionEmploy);
        this.tableauEmployer.push(emp);
        console.log('to see if the employ has been add or not plz click on show All and check the last one');
    }

// delete
delete() {
    for ( let j = 0 ; j < this.tableauEmployer.length; j++) {
        if (this.tableauEmployer[j].firstName === this.firstName && this.tableauEmployer[j].lastName === this.lastName ){
           this.tableauEmployer.splice(j, 1);
        }
    }

 }

// Edit
 editEmploy() {
     let index;
     let weCanEdit = false;
 for ( let j = 0 ; j < this.tableauEmployer.length; j++) {
        if (this.tableauEmployer[j].firstName === this.firstName && this.tableauEmployer[j].lastName === this.lastName ) {
          index = j;
          weCanEdit = true;
        }
    }
    if (weCanEdit) {
        console.log(weCanEdit);
        this.tableauEmployer[index].firstName = this.firstName;
          this.tableauEmployer[index].lastName = this.lastName;
            this.tableauEmployer[index].tel = this.tel;
              this.tableauEmployer[index].functionEmploy = this.firstName;
    }

 }

// 3. The application displays two distinct lists:  Departments: 

departementList(){
   /* let tableau= this.tableauTemporaire;
    for(let i = 0 ; i < this.tableauEmployer.length ; i++){
        for(let j= 0 ; j < this.tableauEmployer.length ; j++){
            if(tableau[i] !== this.tableauEmployer[j]){
                tableau[i] = this.tableauEmployer[j];
            }
        }
    }
    this.tableauEmployer =tableau; */
}

}




 // There are two distinct entities: Employee and Department

/*interface Departement {
      name: string;
     }
}*/

export  class Employer {
        public firstName: string;
        public lastName: string;
        public tel: string;
        public functionEmploy: string ; //Departement;
        // normaly departement shoud be (deprtement : Departement) but i put string for my tests
        constructor (name: string, lastname: string, tel: string, functionEmploy: string) {
            this.firstName = name;
            this.lastName = lastname;
            this.tel = tel;
            this.functionEmploy = functionEmploy;
        }
        public setFirstName(newName:string){
            this.firstName = newName;
        }
        public setLastName(newName:string){
            this.lastName = newName;
        }
        public setTel(newName:string){
            this.tel = newName;
        }
        public setDeprtement(newName:string){
            this.functionEmploy = newName;

//getter use that for search an employ for delete for exemple

        } public getFirstName(): string {
            return this.firstName;
        }
        public getLastName(): string {
            return this.lastName;
        }
        public getTel() {
            return this.tel ;
        }
        public getDeprtement(){
            return this.functionEmploy ;
        }
}

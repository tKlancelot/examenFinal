import { Component, OnInit, TemplateRef } from '@angular/core';
import { Computers } from 'src/app/models/computers';
import { ComputersService } from 'src/app/services/computers.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  computers : Computers[];
  isLoading: boolean;
  // indice:number;
  modalRef: BsModalRef;
  rentabilite : number ;
  count : number;
  id: number;

  constructor(private httpget : ComputersService, private readShoes : ComputersService, private deleteComputer : ComputersService, private bsModalService: BsModalService) { }

  deleteThisComputer(id: number, template: TemplateRef<any>): void {
    this.id = id;
    this.modalRef = this.bsModalService.show(template, {class: 'modal-sm'});
  }



  confirm() {
    this.isLoading = true;
    this.deleteComputer.deleteComputer(this.id).subscribe(then => {
      this.deleteComputer.getAllComputers().subscribe((data: Computers[]) => {
        this.computers = data;
        this.isLoading = false;
        this.modalRef.hide();
      });
    });
  }

  decline() {
    this.modalRef.hide();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.httpget.getAllComputers().subscribe( data => {
      this.computers = data;
      // this.calcul(this.indice);
      this.isLoading = false;
      console.log(this.computers.length);
      this.count = this.computers.length ;
    });
  }
}



  // calcul(indice : number){
  //   let i : number;
  //   for (i = 0; i < this.computers.length; i++){
  //     indice = (Math.round(this.computers[i].sellingPrice - this.computers[i].buyingPrice));
  //     console.log(indice);
  //   }

  // }





import { Component, OnInit } from '@angular/core';
import { Computers } from 'src/app/models/computers';
import { ActivatedRoute } from '@angular/router';
import { ComputersService } from 'src/app/services/computers.service';

@Component({
  selector: 'app-detail-computer',
  templateUrl: './detail-computer.component.html',
  styleUrls: ['./detail-computer.component.css']
})
export class DetailComputerComponent implements OnInit {

  id : number;
  element : Computers;
  isLoading : boolean;

  constructor(private route : ActivatedRoute, private recupId : ComputersService) { }

  ngOnInit() {
    this.isLoading = true;
    this.recupId.getOneComputer(+this.route.snapshot.paramMap.get('id')).subscribe((data:
    Computers) => {
    this.element = data;
    this.isLoading = false;
    });
    }

}








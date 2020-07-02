import { Component, OnInit } from '@angular/core';
import { Computers } from 'src/app/models/computers';
import { ComputersService } from 'src/app/services/computers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {


  computer : Computers;
  isLoading : boolean;

  constructor(private editComputer : ComputersService, private route : ActivatedRoute, private router : Router) { }
  
  editThisComputer() {
    this.editComputer.updateComputer(this.computer).subscribe(then => {
    this.router.navigate(['/home']);
    });
  }

  ngOnInit(): void{
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.editComputer.getOneComputer(id).subscribe(data => {
        this.computer = data;
        this.isLoading = false;
        console.log(this.computer);
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { Computers } from 'src/app/models/computers';
import { ComputersService } from 'src/app/services/computers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {

  nouveauComputer : Computers;
  constructor(private addComputer : ComputersService, private router: Router) { }

  onSubmit() {
    this.addComputer.addComputer(this.nouveauComputer).subscribe(then => {
    this.router.navigate(['/home']);
    });
  }
  ngOnInit(): void {
    this.nouveauComputer = new Computers();
  }

}


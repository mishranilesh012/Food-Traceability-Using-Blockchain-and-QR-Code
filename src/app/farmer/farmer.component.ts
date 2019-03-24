import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css'],
})
export class FarmerComponent implements OnInit {

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;

  language: any;
  data: any;

  engStatus : boolean;
  hinStatus : boolean;


  constructor(config: NgbModalConfig, private modalService: NgbModal, calendar: NgbCalendar, private navbar: NavbarComponent) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

   }

   draw(event: any) {
    this.data = event.target.value;

    if(this.data == "English"){
      this.engStatus = true;
      this.hinStatus = false;
    }
    else{
      this.hinStatus = true;
      this.engStatus = false;
    }
    console.log(this.data);
  }

   open(content) {
    this.modalService.open(content);
  }

  // Datepicker
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    console.log(this.fromDate);
    console.log(this.toDate);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-processor',
  templateUrl: './processor.component.html',
  styleUrls: ['./processor.component.css']
})
export class ProcessorComponent implements OnInit {

  closeResult: string;
  role = 'Processor';
  tabP: boolean;
  tabT: boolean;
  btn = false;

  constructor(private modalService: NgbModal) {
    // if(this.role === 'Processor'){
    //   this.tabP = true;
    //   this.tabT = true;
    //   this.btn = false;
    // }
    // else{
    //   this.tabT = true;
    //   this.tabP = false;
    //   this.btn = true;
    // }
  }



  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  ngOnInit(){
  }

}

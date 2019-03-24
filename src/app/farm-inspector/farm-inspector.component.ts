import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-farm-inspector',
  templateUrl: './farm-inspector.component.html',
  styleUrls: ['./farm-inspector.component.css']
})
export class FarmInspectorComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  open(content) {
    this.modalService.open(content);
  }
  ngOnInit() {
  }

}

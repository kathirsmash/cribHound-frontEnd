import { Component, OnInit } from '@angular/core';
import { CreateCribComponent } from './create-crib/create-crib.component';

import { CribService } from './crib.service';
import { CribFilterPipe } from './crib-filter.pipe';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cribList: Array<any>;
  searchCrib: String;

  constructor(private cribService: CribService, private modalService: NgbModal) { }

  ngOnInit() {
    this.cribService.getCrib().subscribe((data) => {
      this.cribList = data;
    });
  }

  removeCrib(id: Number) {
    this.cribService.removeCrib(id).subscribe((data) => {
      this.ngOnInit();
    });
  }

  openCribModal(id?: Number) {
    const modalRef = this.modalService.open(CreateCribComponent,
      {
        scrollable: true,
        // windowClass: 'myCustomModalClass',
        keyboard: false,
        backdrop: 'static'
      });
      let data = {
        id: id,
      }
      modalRef.componentInstance.fromParent = data;
      modalRef.result.then((result) => {
        this.ngOnInit();
      }, (reason) => {
    });
  }
}

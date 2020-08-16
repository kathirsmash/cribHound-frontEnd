import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CribService } from '../crib.service';

@Component({
  selector: 'app-create-crib',
  templateUrl: './create-crib.component.html',
  styleUrls: ['./create-crib.component.css']
})
export class CreateCribComponent implements OnInit {
  cribObj = {id: 0, name: '', img: '', location: ''};
  @Input() fromParent;

  constructor(private cribService: CribService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if(this.fromParent.id) {
      this.cribService.getCrib(this.fromParent.id).subscribe((data) => {
        this.cribObj = data;
      });
    }
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

  onSubmit() {
    if(this.cribObj.name && this.cribObj.img && this.cribObj.location) {
      if(this.fromParent.id) {
        this.cribService.editCrib(this.cribObj).subscribe((data) => {
          this.activeModal.close();
        });
      } else {
        this.cribService.addCrib(this.cribObj).subscribe((data) => {
          this.activeModal.close();
        });
      }
    }
  }

}


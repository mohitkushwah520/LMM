import { Component, inject, OnInit } from '@angular/core';
import { DialogService }from '../../services/dialog.service';

@Component({
  selector: 'app-lmm-dialog',
  templateUrl: './lmm-dialog.component.html',
  styleUrls: ['./lmm-dialog.component.css']
})
export class LmmDialogComponent implements OnInit {

  constructor(private dialogService : DialogService) { }

  public data : any

  ngOnInit(): void {
    this.dialogService.rcnMsg().subscribe(res => {this.data = res})
  }

}

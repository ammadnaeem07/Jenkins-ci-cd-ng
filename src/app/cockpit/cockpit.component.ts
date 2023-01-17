import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() srvCreated = new EventEmitter<{srvName: string, srvConent: string}>();
  @Output() blPrintCreated = new EventEmitter<{srvName: string, srvConent: string}>();;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.srvCreated.emit({
      srvName: this.newServerName,
      srvConent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blPrintCreated.emit({
      srvName: this.newServerName,
      srvConent: this.newServerContent
    })
  }

}

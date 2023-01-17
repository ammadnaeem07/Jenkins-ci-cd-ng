import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_project';
  serverElements = [{type: 'server', name:'Test Server', content: 'Just a test server'}];

  onServerAdded(srvData: {srvName: string, srvConent: string}) {
    this.serverElements.push({
      type: 'server',
      name: srvData.srvName,
      content: srvData.srvConent
    });
  }

  onBlueprintAdded(bluprintData: {srvName: string, srvConent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluprintData.srvName,
      content: bluprintData.srvConent
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Document preview';
  viewUrl = "https://docs.google.com/gview?url=%URL%&embedded=true";
  width = "100%";
  height = "93vh";
  url: string | undefined;
  style: string | undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param) => {
        this.url = param['url'];
        this.viewUrl = param['viewUrl'] || this.viewUrl;
        let w = isNaN(param["width"]) ? param["width"] : param["width"]+"%";
        this.width = w || this.width;
        let h = isNaN(param["height"]) ? param["height"] : param["height"]+"%";
        this.height = h || this.height;
        this.style = `width:${this.width};height:${this.height};`
      });
  }
}

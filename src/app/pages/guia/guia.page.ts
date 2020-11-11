import { Component, OnInit } from '@angular/core';
import {DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.page.html',
  styleUrls: ['./guia.page.scss'],
})
export class GuiaPage implements OnInit {

  constructor(
      private pdf: DocumentViewer,
      private platform: Platform
  ) { }

  public options: DocumentViewerOptions = {
    title: 'Documento informativo de intérprete de señas',
    openWith: { enabled: true }
  };

  ngOnInit() {
  }

  goPdf() {
    this.pdf.viewDocument(this.pdfPlatform('interprete.pdf'), 'application/pdf', this.options);
  }

  pdfPlatform(pdf: string) {
    if (this.platform.is('ios')) {
      const baseUrl = location.href.replace('/index.html', '');
      return baseUrl + `/assets/${pdf}`;
    }
    if (this.platform.is('android')) {
      return `file:///android_asset/www/assets/${pdf}`;
    }
  }

}

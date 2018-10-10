import { Component, OnInit } from '@angular/core';
import { AttachedFile } from './attached-file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  visible = false;

  attachedFiles: AttachedFile[];

  ngOnInit(): void {

    this.attachedFiles = [];
  }

  openDialog() {

    this.fillData();

    this.visible = true;
  }

  private fillData() {
    this.attachedFiles.push( { downloadUri: '', sizeHumanReadable: '2MB', name: 'file 1.jpg', mimeType: '', size: 111 } );
    this.attachedFiles.push( { downloadUri: '', sizeHumanReadable: '3MB', name: 'file 2.jpg', mimeType: '', size: 111 } );
    this.attachedFiles.push( { downloadUri: '', sizeHumanReadable: '7MB', name: 'file 3.jpg', mimeType: '', size: 111 } );
    this.attachedFiles.push( { downloadUri: '', sizeHumanReadable: '7MB', name: 'file 4.jpg', mimeType: '', size: 111 } );
    this.attachedFiles.push( { downloadUri: '', sizeHumanReadable: '7MB', name: 'file 5.jpg', mimeType: '', size: 111 } );
    this.attachedFiles.push( { downloadUri: '', sizeHumanReadable: '7MB', name: 'file 6.jpg', mimeType: '', size: 111 } );
  }

  public onBlur(): void {
    console.log(`Blur!!`);
  }
}

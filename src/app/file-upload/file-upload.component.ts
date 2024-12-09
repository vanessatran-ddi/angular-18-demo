import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from "@angular/common";
import {GoabFileUploadCard, GoabFileUploadInput, GoabFormItem} from "@abgov/angular-components";
interface Uploader {
  upload: (url: string | ArrayBuffer) => void;
  abort: () => void;
}

interface Upload {
  file: File;
  uploader: Uploader;
}

class MockUploader implements Uploader {
  public onprogress: (percent: number) => void = (_: number) => { };
  public onabort: () => void = () => { };
  public onfail: (err: string) => void = (_: string) => { };
  public oncomplete: () => void = () => { };

  upload(_url: string | ArrayBuffer) {
    // implement your logic to upload files
  }

  abort() {
    // implement your logic to abort file upload
  }
}
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    GoabFileUploadInput,
    GoabFileUploadCard,
    CommonModule,
    GoabFormItem,
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileUploadComponent {
  uploads: Upload[] = [];
  progressList: Record<string, number> = {};

  uploadFile(e: any) {
    const { file } = e;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (!ev.target || !ev.target.result) {
        return;
      }

      const url = ev.target.result;
      const uploader = new MockUploader();

      this.uploads = [...this.uploads, { file, uploader }];

      uploader.oncomplete = () => console.log("File upload complete");
      uploader.onprogress = (percent: number) =>
        (this.progressList[file.name] = percent);
      uploader.onabort = () => console.log("Aborting upload");
      uploader.onfail = (err: string) => console.log("Upload failed: ", err);

      if (url) {
        uploader.upload(url);
      }
    };
    reader.readAsDataURL(file);
  }

  deleteFile(upload: Upload) {
    upload.uploader.abort();
    this.uploads = [...this.uploads].filter(
      (u) => u.file.name !== upload.file.name
    );
  }
}

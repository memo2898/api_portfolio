import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  handleFileUpload(files: Express.Multer.File[]) {
    const uploadedFiles = files.map((file) => file.filename);
    return uploadedFiles;
  }
}

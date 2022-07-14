import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { calculatefreshnessService } from '../../../service/src/lib/calculatefreshness.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('calcfreshness')
export class calculatefreshnessController {
  constructor(private service: calculatefreshnessService) {}

  
  @Post('predict')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async predict(@Body('id') id :number,@Body('type') type:string,@UploadedFile() file) {
    const predict =  await this.service.predict(id,type,file);
    console.log(predict);
    return predict;
  }
}
export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  };
  
  export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
  };

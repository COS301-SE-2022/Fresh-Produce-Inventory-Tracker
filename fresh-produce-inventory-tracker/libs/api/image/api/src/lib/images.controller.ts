import {
    Controller,
    Get,
    Post,
    UseInterceptors,
    UploadedFile,
    UploadedFiles,
    Res,
    Param,
    UseGuards,
  } from '@nestjs/common';
  import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { editFileName, imageFileFilter } from './utils/file-uploads.utils';
  import {AuthGuard} from '@nestjs/passport';
  
  @Controller('image')
  export class ImagesController {
   // @UseGuards(AuthGuard('jwt'))
    @Post('uploadone')
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async uploadedFile(@UploadedFile() file,) {
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return response;
    }
  
    @Post('uploadmultiple')
    @UseInterceptors(
      FilesInterceptor('image', 20, {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async uploadMultipleFiles(@UploadedFiles() files) {
      const response = [];
      files.forEach(file => {
        const fileReponse = {
          originalname: file.originalname,
          filename: file.filename,
        };
        response.push(fileReponse);
      });
      return response;
    }
  
    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
      return res.sendFile(image, { root: './files' });
    }
  }

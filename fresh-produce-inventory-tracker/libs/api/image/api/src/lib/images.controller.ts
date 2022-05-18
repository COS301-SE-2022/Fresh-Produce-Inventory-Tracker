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
    Req,
  } from '@nestjs/common';
  import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { editFileName, imageFileFilter } from './utils/file-uploads.utils';
  import {AuthGuard} from '@nestjs/passport';
  import {Request} from 'express';
  import {ImagesService} from '../../../service/src/lib/images.service';
  
  @Controller('image')
  export class ImagesController {
    constructor(private service:ImagesService){}
   @UseGuards(AuthGuard('jwt'))
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
    async uploadedFile(@Req() req:Request,@UploadedFile() file,) {
      console.log(req.user);
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      const resp = await this.service.uploadfile(req.user,file.filename);
      console.log(resp);
      return response;
    }
    @UseGuards(AuthGuard('jwt'))
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

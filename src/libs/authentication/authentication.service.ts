import { Injectable } from '@nestjs/common';
import { AuthenicationRepository } from './authentication.repository';

@Injectable({})
export class AuthenticationService {
    constructor(private repo:AuthenicationRepository){}
    async signup(email:string,password:string)
    {
        //encrypt
        let salt:string= '22';
        return await this.repo.createUser(email,password,salt);
        
    }
    signin()
    {
        return {mesg:'hello sign-in'};
    }
}

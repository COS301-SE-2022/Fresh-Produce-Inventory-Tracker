const  Signup = {
    email: 'bbbbb@bbbbb.com',
    name: 'Ray',
    surname: 'Ray',
    password: 'regte',
    
}
const  Signin = {
    email: 'bbbbb@bbbbb.com',
    password: 'regte',
    
}
const  resetpassword = {
    email: 'bbbbb@bbbbb.com',
    
    
}
const  editpassword = {
    email: 'bbbbb@bbbbb.com',
    password: 'regte',
    
}
describe('Authentication tests', () => {
    it('sign up for system ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/authentication/signup',Signup).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });

    it('sign in for system ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/authentication/signin',Signin).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('reset password ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/authentication/resetpassword',resetpassword).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('sign in for system ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/authentication/signin',editpassword).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('delete user ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/authentication/deleteuser',resetpassword).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
})
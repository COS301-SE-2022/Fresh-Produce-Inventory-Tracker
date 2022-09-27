// backend.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const profiledata = {
  id :1
}
const profiledataname = {
    id :1,
    name:'Piet'
  }
  const profiledatasurname = {
    id :1,
    surname:'Piet'
  }
  const profiledatabio = {
    id :1,
    bio:'Piet'
  }
  const profiledatavis = {
    id :1,
    visibility:'true'
  }
describe('profile tests', () => {
    it('get user profile ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/getprofile',profiledata).as('getprofile');
        cy.get('@getprofile').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('edit user profile name ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/editname',profiledataname).as('editname');
        cy.get('@editname').then(data=>{
            console.log(data)
            expect(data.status).to.equal(201)
        })
    });
    it('edit user profile surname ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/editsurname',profiledatasurname).as('editsurname');
        cy.get('@editsurname').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('edit user profile bio ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/editbio',profiledatabio).as('editbio');
        cy.get('@editbio').then(data=>{
            console.log(data)
            expect(data.status).to.equal(201)
        })
    });
    it('edit user profile visibility ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/editvisibility',profiledatavis).as('editvisibility');
        cy.get('@editvisibility').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('delete user profile name ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/deletename',profiledata).as('deletename');
        cy.get('@deletename').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('delete user profile surname ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/deletesurname',profiledata).as('deletesurname');
        cy.get('@deletesurname').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('delete user profile bio ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/deletebio',profiledata).as('deletebio');
        cy.get('@deletebio').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('delete user profile visibility ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/profile/deletevisibility',profiledata).as('deletevisibility');
        cy.get('@deletevisibility').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    
  })
  

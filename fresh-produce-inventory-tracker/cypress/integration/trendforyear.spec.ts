
const  gettrendsforitemyear = {
    id: 1,
    producetype: 'Steak'
    
    
}
const  updateyeartrend = {
    userid: 1,
    scaleid: 4
    
}
const  getallyear = {
    userid: 1,
    
}
const  getmonthaverages = {
    userid: 1,
    producetype:'Steak'
    
}
describe('trend tests', () => {
    
    it('get trends for item',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trendforyear/gettrendsforitem',gettrendsforitemyear).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('update Trend for year ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trendforyear/updateyeartrend',updateyeartrend).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('get all trends for user for year ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trendforyear/getall',getallyear).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('get monthly averages for produce ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trendforyear/getmonthaverages',getmonthaverages).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
})
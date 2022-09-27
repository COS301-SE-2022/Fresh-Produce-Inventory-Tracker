const  gettrendsalltrendsforday = {
    id:1,
    weekday: 'Wednesday'
    
}
const  gettrendsfordayanditem = {
    id: 1,
    weekday: 'Wednesday',
    producetype: 'Steak'
    
}
const  gettrendsforitem = {
    id: 1,
    producetype: 'Steak'
    
    
}
const  updateTrend = {
    userid: 1,
    scaleid: 4
    
}
const  getall = {
    userid: 1,
    
}
describe('trend tests', () => {
    it('get trends for all trends for day ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trend/gettrendsalltrendsforday',gettrendsalltrendsforday).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });

    it('get trends for day and item ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trend/gettrendsfordayanditem',gettrendsfordayanditem).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('get trends for item',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trend/gettrendsforitem',gettrendsforitem).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('update Trend ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trend/updateTrend',updateTrend).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('get all trends for user ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/trend/getall',getall).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
})
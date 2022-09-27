const scaledata = {
    id : 1,
    userid : 1
  }

  describe('Notofication tests', () => {
    it('get Notification ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/scale/getscale',scaledata).as('getScale');
        cy.get('@getScale').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
})
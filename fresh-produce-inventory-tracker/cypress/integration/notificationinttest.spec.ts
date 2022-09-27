const notificationdata = {
    receiver : "heinrichvt06@gmail.com"
  }

  describe('Notofication tests', () => {
    it('get Notification ',()=>{
        cy.request('POST','http://13.246.26.157:3333/api/notification/send',notificationdata).as('getNotify');
        cy.get('@getNotify').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
})
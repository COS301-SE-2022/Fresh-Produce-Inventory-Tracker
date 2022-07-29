const notificationdata = {
    receiver : "heinrichvt06@gmail.com"
  }

  describe('Notofication tests', () => {
    it('get Notification ',()=>{
        cy.request('POST','http://localhost:3333/api/notification/send',notificationdata).as('getNotify');
        
    });
})
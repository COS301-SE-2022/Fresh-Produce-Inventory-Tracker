const calculatefreshnessdata = {
    id :1 , 
    type: "apple",
    file : "files\\bread-7295.jpg"
  }

  describe('Freshness tests', () => {
    it('get freshnes prediction ',()=>{
        cy.request('POST','http://localhost:3333/api/calcfreshness/predict',calculatefreshnessdata).as('getfresh');
        
    });
})
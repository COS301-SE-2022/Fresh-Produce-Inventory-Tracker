const  createtask = {
    id: 1,
    message: 'Restock all apples'
    
}
let  gettasks = {
    id: 1,
  
}

let  deletetask = {
    id: 1,
    message: 'Restock all apples'
    
}

let idnum = 0;
describe('tasks tests', () => {
    
    it('get trends for item',()=>{
        cy.request('POST','http://localhost:3333/api/tasks/createtask',createtask).as('signup');
        cy.get('@signup').then(data=>{
            idnum = data.id;
            expect(data.status).to.equal(201)
        })
    });
    gettasks.id = idnum;
    deletetask.id = idnum;
    it('update Trend for year ',()=>{
        cy.request('POST','http://localhost:3333/api/tasks/gettasks',gettasks).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
    it('get all trends for user for year ',()=>{
        cy.request('POST','http://localhost:3333/api/tasks/deletetask',deletetask).as('signup');
        cy.get('@signup').then(data=>{
            expect(data.status).to.equal(201)
        })
    });
})
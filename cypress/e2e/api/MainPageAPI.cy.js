/// <reference types="cypress" />

describe('Main Page API', () => {
  it('Verify Main Page API', () => {

    cy.request({
      method:'GET',
      url:'https://bilete.cfrcalatori.ro/api/ro-RO/Stations/GetStationsAndCities',
      
    }).then((res) => {
      expect(res.status).to.eq(200)
      //expect(res.body).to.have.property('name')
      //expect(res.body).to.have.property('isImportant')
    })
  })

})
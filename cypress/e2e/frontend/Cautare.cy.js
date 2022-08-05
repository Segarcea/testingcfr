/// <reference types="cypress" />

describe('Cautare', () => {
    it('Verify Bucuresti Mangalia', () => {
      cy.visit('https://www.cfrcalatori.ro/')
      cy.get('#input-station-departure-name').type('București Nord')
      cy.get('#input-station-arrival-name').type('Mangalia')
      cy.get('#linkCautareAvansata').invoke('removeAttr', 'target').click()
      cy.wait(200)

      cy.get('#input-station-departure-name').type('București Nord')
      cy.get('#input-station-arrival-name').type('Mangalia')
      cy.get('#input-date-departure').click()
      cy.get('.ui-state-default').each(($el) => {
        var dateName = $el.text()
        if(dateName=='27')
        {
            cy.wrap($el).click()
        }
      })  
      cy.get('#form-search > div:nth-child(6) > input').click()

      cy.get('#button-itinerary-2-buy').click()
      cy.get('#button-next-step-2').click()

      cy.get('#input-ticket-fare-0-number').clear().type('2{enter}')
      cy.get('#button-next-step-3').click()

      cy.get('#button-next-step-4').click()
    }) 
  })
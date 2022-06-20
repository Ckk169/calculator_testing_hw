describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able add 1 to 4 and get 5', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })

  it('should be able to multiply 5 and 5, add 10 and get 35', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '35')
  });

  it('it should be able to divide 4 and 8,and get 0.5', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5')
  });

  it('should be able to subtract 3 and 4 , and get -1', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  // it('it should print the word Infinity, when 7 divide by 0',() => {
  //   cy.get('#number7').click();
  //   cy.get('#operator-divide').click();
  //   cy.get('#number0').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', 'Infinity')
  // })

  it('it was printing the string Infinity (correction - now prints 0), when 7 divide by 0', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  });







})
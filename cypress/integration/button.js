import Color from 'color';

describe(`Button`, () => {
  it(`should load buttons`, () => {
    cy.visit('http://localhost:4001');
    cy.get('#ts-button-id-1 > .mat-button-wrapper > .c-button__content').contains('Primary');
    // primary color converter
    const expectBackgroundColor = Color('#00538a').string();
    cy.get('.c-button').should('have.css', 'background-color', expectBackgroundColor);
    cy.percySnapshot();
  });
});

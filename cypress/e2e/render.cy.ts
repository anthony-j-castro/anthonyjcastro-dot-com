describe("The home page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="greetings"]').should("exist");
  });
});

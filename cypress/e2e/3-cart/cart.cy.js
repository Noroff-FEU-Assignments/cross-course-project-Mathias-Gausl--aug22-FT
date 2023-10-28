describe("add to cart and purchase", function () {
  it("clicks the correct game", function () {
    cy.visit("/index.html");
    cy.location("href").should("include", "/index.html").wait(4000);
    cy.contains("55£").click().wait(4000);
  });
  it("clicks add to cart then goes to cart", function () {
    cy.location("href").should("include", "/ping_pong.html");
    cy.get("#pingpong_btn").click().wait(2000);
    cy.get("#cart > .fa-solid").click().wait(2000);
    cy.get("#checkout_btn").click().wait(2000);
  });
  it("fill out checkout part 1", function () {
    cy.get("#name").type("ole normand").wait(2000);
    cy.get("#epost").type("olenormand@gmail.com").wait(2000);
    cy.get("#number").type("12345678").wait(2000);
    cy.get("#next_btn").click().wait(2000);
  });
  it("fill out checkout part 2", function () {
    cy.get("#adress").type("veien23").wait(2000);
    cy.get("#post-code").type("1111").wait(2000);
    cy.get("#next2_btn").click().wait(2000);
  });
  it("fill out checkout part 3", function () {
    cy.get("#card-number").type("1111111111111111").wait(2000);
    cy.get("#expiration").type("2211").wait(2000);
    cy.get("#cvc").type("123").wait(2000);
    cy.get("#checkout").click().wait(2000);
  });
});

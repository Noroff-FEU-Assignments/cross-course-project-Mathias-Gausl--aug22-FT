describe("add a product to cart then go to cart and remove it",function(){
    it("add product to cart",function(){
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.location('href').should('include', '/index.html').wait(4000)
        cy.contains("55£").click().wait(4000)
    })
    it("add to cart then go to cart",function(){
        cy.get("#pingpong_btn").click().wait(2000)
        cy.get("#cart").click().wait(2000)
    })
    
    it("press delete icon then go to proucts",function(){
        cy.get(".remove").click()
        cy.get("#checkout_btn").click().wait(2000)
    })
})
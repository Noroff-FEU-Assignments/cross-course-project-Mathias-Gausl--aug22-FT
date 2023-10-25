describe("go to login from landing page and login",function(){
    it("goes to login page",function(){
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('ul > :nth-child(3) > a').click().wait(2000)
    })
    it("fill out login information",function(){
        cy.get('#em').type("ddsjdsj@gmail.com").wait(2000)
        cy.get('#pass').type("ddsjdsjwwwwwwww").wait(2000)
        cy.get('#submit').click().wait(2000)
    })
})
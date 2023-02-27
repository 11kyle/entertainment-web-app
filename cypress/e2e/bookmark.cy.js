describe("bookmark toggle functionality", () => {
  it("toggles icon", () => {
    cy.visit("http://localhost:5173/entertainment-web-app/")
    cy.getByData("bookmark")
    .eq(0)
    .find("img")
    .should("have.attr", "src")
    .should("include", "icon-bookmark-empty.svg")
  })

  it("toggle icon", () => {
    cy.visit("http://localhost:5173/entertainment-web-app/")
    cy.getByData("bookmark")
    .eq(0).click()
    .find("img")
    .should("have.attr", "src")
    .should("include", "icon-bookmark-full.svg") // fails if image src doesn't change
  })
})
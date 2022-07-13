describe("ui-counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/");
  });

  it("생성시 버튼과 초기값(10)을 렌더링 한다", () => {
    cy.get(".count-display").should.equal("10");
  });

  it("+ 버튼 클릭시 1 증가한다.", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());

      cy.get(".plus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue + 1);
    });
  });
});

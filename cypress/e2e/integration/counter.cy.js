describe("ui-counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/");
  });

  it("생성시 버튼과 초기값(10)을 렌더링 한다", () => {
    cy.get(".count-display").should("have.value", "10");
  });

  it("+ 버튼을 클릭 시 count가 1증가한다.", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());
      cy.get(".plus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue + 1);
    });
  });

  it("- 버튼을 클릭 시 count가 1감소한다.", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());
      cy.get(".minus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue - 1);
    });
  });

  it("+ 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".plus-button").click();
    }

    cy.get(".count-display").then(($input) => {
      assert.isAtMost(Number($input.val()), 12);
    });
  });

  it(" - 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".minus-button").click();
    }

    cy.get(".count-display").then(($input) => {
      assert.isAtLeast(Number($input.val()), 8);
    });
  });
});

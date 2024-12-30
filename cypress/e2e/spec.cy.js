describe('PDF button test', () => {
  it('opens PDF in same tab when clicking the button', () => {
    cy.visit('./index.html')
    
    // Override window.open to change location instead
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url
      })
    })

    cy.get('#openPdfButton').click()
    
    // Verify the URL changed to the PDF
    cy.url().should('include', 'sample.pdf')
  })
})
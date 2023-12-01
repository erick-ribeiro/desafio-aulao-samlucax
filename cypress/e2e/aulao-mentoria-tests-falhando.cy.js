describe('Cadastrar entradas e saídas com bugs', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Cadastrar uma nova transação de entrada - falha 1', () => {
    // Arrange
    cy.contains('Nova Transação').click()

    // Act
    cy.get('#description').type('Mesada')
    cy.get('#amount').type(100)
    cy.get('#date').type('2023-02-01')
    cy.contains('Salvar').click()

    // Assert
    cy.get('tbody tr').should('have.length', 1)
    cy.get('tbody tr[data-index="0"]').then(() => {
      cy.get('td.description').should('have.text', 'Mesada')
      cy.get('td.income').should('contain', '100,00')
      cy.get('td.date').should('contain', '01/02/2023')
    })
  })

  it('Cadastrar uma nova transação de entrada - falha 2', () => {
    cy.contains('Nova Transação').click()
    cy.get('#description').type('Mesada')
    cy.get('#amount').type(100)
    cy.get('#date').type('2023-02-01')

    cy.contains('button', 'Salvar').click()
    
    cy.get('tbody tr').should('have.length', 1)
  })  

  it('Cadastrar uma nova transação de entrada - falha 3', () => {
    cy.contains('Nova Transação').click()
    cy.get('#description').type('Mesada')
    cy.get('#amount').type(100)

    cy.get('#date').type('2023-02-01') //YYYY-MM-DD

    cy.contains('Salvar').click()
    
    cy.get('tbody tr').should('have.length', 1)
  })

  it('Cadastrar uma nova transação de entrada - falha 4', () => {
    cy.contains('Nova Transação').click()

    cy.get('#amount').type(100)
    cy.get('#description').type('Mesada')
    cy.get('#date').type('2023-02-01')
    
    cy.contains('Salvar').click()

    cy.get('tbody tr').should('have.length', 1)
  })

  it('Cadastrar uma nova transação de entrada - falha 5', () => {
    cy.contains('Nova Transação').click()
    cy.get('#description').type('Mesada')
    cy.get('#amount').type(100)
    cy.get('#date').type('2023-02-01')

    cy.contains('Salvar').click()

    cy.get('.alert').should('not.exist')
    cy.get('tbody tr').should('have.length', 1)
  })

  it('Cadastrar uma nova transação de entrada - falha 6', () => {
    cy.contains('Nova Transação').click()
    cy.get('#description').type('Mesada')
    cy.get('#amount').type(100)
    cy.get('#date').type('2023-02-01')

    cy.contains('Salvar').click()

    cy.get('tbody tr').should('have.length', 1)
  })
})
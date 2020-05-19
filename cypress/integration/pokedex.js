context('Pokedex', () => {
    before(() => {
        const URL = "http://127.0.0.1:8080"
        cy.visit(URL)
    });

    describe('Usa el pokedex', () => {
        it('Escribe el nombre de un pokemon', () => {
            cy.get('#barra-busqueda').type('Pikachu')
        });
    });
});
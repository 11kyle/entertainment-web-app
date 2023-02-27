import EntertainmentGrid from './EntertainmentGrid.vue'

describe('<EntertainmentGrid />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(EntertainmentGrid)
  })
})
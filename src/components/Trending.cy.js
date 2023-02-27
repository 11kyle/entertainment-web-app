import Trending from './Trending.vue'

describe('<Trending />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Trending)
  })
})
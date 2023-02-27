import Bookmark from './Bookmark.vue'

describe('<Bookmark />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Bookmark)
  })
})
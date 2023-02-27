import PlayButton from './PlayButton.vue'

describe('<PlayButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PlayButton)
  })
})
///<reference types = "Cypress"/>
describe('The sanity test suite for travel site', () => {

  const hotels_button = '[class="hotels"]'
  const guides = '[class="guides js-list-guides"]'
  const tours = '[class="tours js-list-tours"]'
  const thigs_to_do = '[class="tours attraction-link"]'
  const destination = '[name="Filter.DestinationId"]'
  const adults = '[id="Filter_AdultNum"]'
  const children = '[id="Filter_ChildrenNum"]'
  const checkin = '[name="Filter.CheckIn"]'
  const checkout = '[name="Filter.CheckOut"]'
  const search_button = '[type="submit"]'

  beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })

  afterEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })

  it('navigate to the main page', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Home/Index')
  })

  it('verify tabs of the page', { defaultCommandTimeout: 5000 }, () => {
    cy.get(hotels_button).should("be.visible").should('have.text', ' Hotels')
    cy.get(guides).should("be.visible")
    cy.get(tours).should("be.visible")
    cy.get(thigs_to_do).should("be.visible")
  })

  it('verify_clicking_on_the_click_link_will_navigate_to_the_appropriate_page', () => {
    cy.get(hotels_button).click()
    cy.url('https://www.accesstravel.com/en-US/Hotel/List').should('eq','https://www.accesstravel.com/en-US/Hotel/List')
  })

  it('verify_clicking_on_the_guides_link_will_navigate_to_the_appropriate_page', () => {
    cy.get(guides).click()
    cy.url('https://www.accesstravel.com/en-US/Guide/List?DestinationId=2').should('eq','https://www.accesstravel.com/en-US/Guide/List?DestinationId=2')
  })

  it('verify_clicking_on_the_tours_link_will_navigate_to_the_appropriate_page', () => {
    cy.get(tours).click()
    cy.url('https://www.accesstravel.com/en-US/Tour/List?DestinationId=2').should('eq','https://www.accesstravel.com/en-US/Tour/List?DestinationId=2')
  })

  it('verify_clicking_on_the_things to do_link_will_navigate_to_the_appropriate_page', () => {
    cy.get(thigs_to_do).click()
    cy.url('https://www.accesstravel.com/en-US').should('eq','https://www.accesstravel.com/en-US')
  })

  it('verify_login_linkk properly_works', () => {
    cy.visit('https://www.accesstravel.com/en-US/Account/Login')
    cy.url().should('eq','https://www.accesstravel.com/en-US/Account/Login')
  })

  it('verify_Signuo_linkk properly_works', () => {
    cy.visit('https://www.accesstravel.com/en-US/Account/Register')
    cy.url().should('eq','https://www.accesstravel.com/en-US/Account/Register')
  })

  it ('positive_test_check_dropdown_menu' , () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(destination).should('be.visible')
    cy.get(destination).select('Jerusalem').should('be.visible')
    cy.get(destination).select('London').should('be.visible')
    cy.get(destination).select('New York').should('be.visible')
  })

  it ('positive_test_number_of_children' , () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(children).should('be.visible')
    cy.get(children).clear().type('1').should('have.value','1')
  })

  it ('positive_test_checkin_dates' , () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(checkin).should('be.visible')
    cy.get(checkin).clear()
    cy.get(checkin).type('2023-04-21')
  })

  it ('negative_test_checkout_dates' , () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(checkout).should('be.visible')
    cy.get(checkout).clear()
    cy.get(checkout).type('21042022')
    cy.get(search_button).click()
  })

  it ('negative_test_number_of_adults' , () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(adults).should('be.visible')
    cy.get(adults).clear().type('0').should('have.value','0')
    cy.get(search_button).click()
  })
})
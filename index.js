function main () {
  const body = document.querySelector('body')
  console.log('goodbye everyone')

  console.log('document test:', document)

  const heading = document.querySelector('h1')

  console.log('heading test:', heading)

  heading.addEventListener('click', () => {
    console.log('clicked test')
  })

  // 1. Select (find) the button
  const clickMeButton = document
    .querySelector('#click-me')

  // 2. Define the behavior
  function xyz () {
    console.log('You clicked on the button')

    // ADDING to the page

    // 1. Create the element
    const paragraph = document.createElement('p')

    // 2. Modify the element
    paragraph.textContent = 'Success!'

    // 3. Put the element on the page
    heading.append(paragraph)
  }

  // 3. Register an event handler
  // event type - string
  // event handler - function (callback)
  clickMeButton.addEventListener('click', xyz)

  const dontClickMeButton = document
    .querySelector('#dont-click-me')

  function abc () {
    console
      .log('text test:', dontClickMeButton.textContent)

    dontClickMeButton.textContent = 'You are in trouble!'
    clickMeButton.textContent = 'Now you are not allowed to click anything'

    clickMeButton.classList.add('protected')

    heading.remove()
  }

  dontClickMeButton.addEventListener('click', abc)

  const buttons = document.querySelectorAll('button')
  console.log('buttons test:', buttons)

  buttons.forEach(button => {
    button.addEventListener(
      'click',
      () => {
        button.textContent = 'this was clicked'
      }
    )
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main)
} else {
  main()
}
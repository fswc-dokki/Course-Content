function printData() {
    var formElement = document.querySelector('#book-form')
    console.log(`
        Title: ${formElement.title.value},
        Author: ${formElement.author.value},
        Description: ${formElement.desc.value}
    `)
}
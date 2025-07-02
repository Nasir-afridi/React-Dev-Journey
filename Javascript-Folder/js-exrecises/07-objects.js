const book = {
    title: 'English',
    author: 'john', 
    year: 2010,
    profile: {
        name: "Urdu"
    }
}

book.publisher = 'Lorem'
book.year = 2021
delete book.author

console.log(book.profile.name)
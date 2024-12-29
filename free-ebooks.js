const books = [
    { title: "Atomic Habits", description: "Small habits lead to big changes.", image: "free-ebooks/atomic-habits-image.jpg" },

    { title: "Crime and Punishment", description: "A story of guilt, morality, and redemption.", image: "free-ebooks/CrimeandPunishment.png" },

    { title: "How the Grinch Stole Christmas", description: "A heartwarming holiday favorite.", image: "free-ebooks/HowGrinchStoleChristmas.jpg" },
    
    { title: "The Sympathizer", description: "A gripping tale of identity and war.", image: "free-ebooks/SympathizerImage.jpg"},
    
    { title: "To Kill a Mockingbird", description: "A powerful tale of justice.", image: "free-ebooks/800px-To_Kill_a_Mockingbird_(first_edition_cover).jpg" },
    
    { title: "Win Every Argument", description: "Win Every Argument shows how anyone can communicate with confidence, rise above the tit tat...", image: "free-ebooks/WinEveryArgument.jpg" },
    
    { title: "The Metamorphosis", description: "In The Metamorphosis, Gregor Samsa wakes up as a giant insect, leading to his isolation and rejection by his family. The story explores themes of identity, alienation, and the absurdity of existence.", image: "free-ebooks/The Metamorphosis image.jpg" },
    
    { title: "The Hound of the Baskervilles", description: "Sherlock Holmes and Dr. Watson face a mystery on the moors in this classic caper from Sir Arthur Conan Doyle.", image: "free-ebooks/the hound of the Baskervilles.jpg" },
    
    { title: "The Great Gatsby", description: "A tragic tale of love and dreams.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    
    { title: "Brave New World", description: "A dystopian vision of control.", image: "https://m.media-amazon.com/images/I/71GNqqXuN3L._SL1500_.jpg" },
    
    { title: "Sapiens: A Brief History of Humankind", description: "Exploring the journey of humanity.", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYY7n0e-GylssxKw9s-5EYUo65I3liFsIGEVo5ynV3PZngtaCV" },
    
    { title: "Educated", description: "A memoir about resilience and education.", image: "https://pibook.vn/upload/product-slide/Sach-tieng-anh-educated-170424.jpg" },
    
    { title: "The Catcher in the Rye", description: "A story of teenage rebellion.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/800px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg" },
    
    { title: "The Road", description: "A haunting post-apocalyptic tale.", image: "https://prodimage.images-bn.com/pimages/9781419776779_p0_v1_s1200x630.jpg" },
    
    { title: "The Subtle Art of Not Giving a F*ck", description: "A counterintuitive guide to living.", image: "https://cdn0.fahasa.com/media/catalog/product/1/_/1_67_1.jpg" },
    
    { title: "Becoming", description: "Michelle Obama's inspiring memoir.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg" },
    
    { title: "Harry Potter and the Sorcerer's Stone", description: "The start of a magical journey.", image: "https://images-na.ssl-images-amazon.com/images/I/91A6EgLH+2L.jpg" },
    
    { title: "The Hobbit", description: "An epic fantasy adventure.", image: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF894,1000_QL80_.jpg" },
    
    { title: "Fahrenheit 451", description: "A warning about censorship.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg" },
    
    { title: "The Handmaid's Tale", description: "A dystopian story of control.", image: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF894,1000_QL80_.jpg" },
];

const booksPerPage = 3;
const totalPages = Math.ceil(books.length / booksPerPage);
let currentPage = 1;

function displayBooks() {
    const bookGrid = document.querySelector(".book-grid");
    bookGrid.innerHTML = "";

    if (currentPage <= totalPages) {
        const start = (currentPage - 1) * booksPerPage;
        const end = start + booksPerPage;

        books.slice(start, end).forEach((book) => {
            bookGrid.innerHTML += `
                <div class="book-item">
                    <div class="book-image">
                        <img src="${book.image}" alt="${book.title}">
                    </div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p class="description">${book.description}</p>
                        <button class="btn">Read More</button>
                    </div>
                </div>
            `;
        });
    } else {
        bookGrid.innerHTML = `<p class="placeholder-text">No books available on this page. Explore earlier pages for amazing eBooks!</p>`;
    }
}

function displayPagination() {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    if (currentPage > 1) {
        pagination.innerHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">Prev</button>`;
    }

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            pagination.innerHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            pagination.innerHTML += `<span class="ellipsis">...</span>`;
        }
    }

    if (currentPage < totalPages) {
        pagination.innerHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
    }
}

function changePage(page) {
    currentPage = page;
    displayBooks();
    displayPagination();
}

document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
    displayPagination();
});

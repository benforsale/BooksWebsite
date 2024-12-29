const booksForSale = [
    {
        title: "Animal Farm",
        description: "Renowned urban artist Shepard Fairey's new look for Orwell's timeless satire 'All animals are equal. But some animals are more equal than others.' Mr Jones of Manor Farm is so lazy and drunken that one day he forgets to feed his livestock. The ensuing rebellion under the leadership of the pigs Napoleon and Snowball leads to the animals taking over the farm. Vowing to eliminate the terrible inequities of the farmyard, the renamed Animal Farm is organised to benefit all who walk on four legs. But as time passes, the ideals of the rebellion are corrupted, then forgotten. And something new and unexpected emerges. . . Animal Farm - the history of a revolution that went wrong - is George Orwell's brilliant satire on the corrupting influence of power.",
        image: "books-fs-image/Animal-farm.jpg",
        price: "$10.99"
    },
    {
        title: "Dune\n by Frank Herbert",
        description: "What The Lord of the Rings is to fantasy, Dune is to science fiction. Presenting one of the most influential works of all time, which has inspired countless other stories for more than half a century, this is an awe-inspiring world, and a story of truly epic scope.\n\n‘An astonishing science fiction phenomenon’ \n — WASHINGTON POST\n‘I know nothing comparable to it except The Lord of the Rings’ \n — Arthur C. Clarke\n‘It is possible that Dune is even more relevant now than when it was first published’\n — NEW YORKER",
        image: "books-fs-image/dune-frank herbert.png", 
        price: "$8.99"
    },    
    {
        title: "Sapiens \n by \n Yuval Noah Harari",
        description: "Human history has been shaped by three major revolutions: the Cognitive Revolution (70,000 years ago), the Agricultural Revolution (10,000 years ago), and the Scientific Revolution (500 years ago). These revolutions have empowered humans to do something no other form of life has done, which is to create and connect around ideas that do not physically exist (think religion, capitalism, and politics). These shared “myths” have enabled humans to take over the globe and have put humankind on the verge of overcoming the forces of natural selection.",
        image: "books-fs-image/Sapiens.jpg",
        price: "$15.49"
    },
    {
        title: "How the Steel Was Tempered: Part One",
        description: "by Nikolai Ostrovsky (Author), J.T. Marsh (Editor) \n A classic novel arising from the Soviet Union in the thirties, How the Steel Was Tempered is a fictionalized account of author Nikolai Ostrovsky's experiences in fighting for the Bolsheviks during the Civil War and his difficulty in overcoming crippling injuries after the war ended. Centering on a young man named Pavel Korchagin, How the Steel Was Tempered follows his journey from ill-mannered malcontent through to disciplined soldier of the revolution, in the process coming to epitomize the ideal of the New Man.",
        image: "books-fs-image/how the steel was tempered.jpg",
        price: "$12.49"
    },
    {
        title: "Pride & Prejudice \n by Jane Austen",
        description: "Mr. Bennet of the Longbourn estate has five daughters, but his property is entailed, meaning that none of the girls can inherit it. His wife has no fortune, so it is imperative that at least one of the girls marry well in order to support the others on his death. The story charts the emotional development of Elizabeth Bennet who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.",
        image: "books-fs-image/pride-prejudice.jpg",
        price: "$11.99"
    },
    {
        title: "The Old Man and the Sea \n by Ernest Hemingway",
        description: "The Old Man and the Sea was awarded the Pulitzer Prize for Fiction in 1953, and the year after, the Nobel Prize in Literature was awarded to Ernest Hemingway in 1954. It was the last major work of fiction written by Hemingway that was published during his lifetime. One of his most famous works, this short novel is already a modern classic. It is the superbly told, tragic story of Santiago, an aging Cuban fisherman in the Gulf Stream and his struggles with a giant Marlin far out in the Gulf Stream off the coast of Cuba.",
        image: "books-fs-image/the old man and the sea.jpg",
        price: "$10.49"
    },
    {
        title: "Lord of the Flies \n by William Golding",
        description: "At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate. This far from civilization they can do anything they want. Anything. But as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far removed from reality as the hope of being rescued.",
        image: "books-fs-image/lord of the flies.jpg",
        price: "$14.49"
    }
];

function displayBooksForSale() {
    const bookGrid = document.getElementById("books-for-sale-grid");

    booksForSale.forEach((book, index) => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `<img src="${book.image}" alt="${book.title}" class="book-image">`;

        bookItem.addEventListener("click", () => {
            openBookView(index);
        });

        bookGrid.appendChild(bookItem);
    });
}

function openBookView(index) {
    const book = booksForSale[index];
    const bookView = document.getElementById("book-open");

    document.getElementById("book-cover-image").src = book.image;
    document.getElementById("book-title").innerText = book.title;
    document.getElementById("book-description").innerText = book.description;
    document.getElementById("book-price").innerText = book.price;

    bookView.classList.remove("hidden");
}

// Close book view when clicking outside
document.addEventListener("DOMContentLoaded", () => {
    displayBooksForSale();
    document.getElementById("book-open").addEventListener("click", (e) => {
        if (!e.target.closest(".book")) {
            document.getElementById("book-open").classList.add("hidden");
        }
    });
});

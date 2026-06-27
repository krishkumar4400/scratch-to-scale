import express from "express";

const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    name: "book 1",
    isPublished: true,
  },
  {
    id: 2,
    name: "book 2",
    isPublished: false,
  },
  {
    id: 3,
    name: "book 3",
    isPublished: true,
  },
  {
    id: 4,
    name: "book 4",
    isPublished: false,
  },
];

app.get("/", (req, res) => {
  res.send("The book store app");
});

app.get("/books", (req, res) => {
  res.json({ books });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => {
    return book.id === parseInt(id);
  });
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
      success: false,
    });
  }
  res.json({ book });
});

app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: "book 101",
    isPublished: true,
  };

  books.push(newBook);

  res.json({
    message: "book added",
    book: newBook,
    success: true,
  });
});

app.put("/books/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { bookName } = req.body;

    if (!id) {
      return res.status(404).json({
        message: "book id is required",
        success: false,
      });
    }
    if (!bookName) {
      return res.status(404).json({
        message: "book name is required",
        success: false,
      });
    }

    const book = books.find((book) => book.id === parseInt(id));

    if (!book) {
      return res.status(404).json({
        message: "invalid book id",
        success: false,
      });
    }

    book.name = bookName || book.name;
    book.isPublished = false;

    const response = {
      message: "book information updated",
      book,
      success: true,
    };
    res.status(202).json(response);
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/books/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({
        message: "book id required",
        success: false,
      });
    }

    const bookIndex = books.findIndex((book) => book.id === parseInt(id));
    console.log(bookIndex);

    if (bookIndex == -1) {
      return res.status(200).json({
        message: "invalid book id",
        success: false,
      });
    }

    const book = books.splice(bookIndex, 1);
    console.log(book);
    console.log(book[0]);

    res.json({
      message: `book ${id} is deleted`,
      success: true,
      book: book[0]
    });
  } catch (error) {
    console.log(error.message);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

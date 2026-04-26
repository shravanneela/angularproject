const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ================== MongoDB Connection ==================
mongoose.connect("mongodb://127.0.0.1:27017/libraryDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// ================== Schemas ==================

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
});
const User = mongoose.model("User", UserSchema);

const CategorySchema = new mongoose.Schema({
    name: String
});
const Category = mongoose.model("Category", CategorySchema);

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    available: { type: Boolean, default: true }
});
const Book = mongoose.model("Book", BookSchema);

const IssueSchema = new mongoose.Schema({
    book: String,
    user: String,
    date: { type: Date, default: Date.now }
});
const Issue = mongoose.model("Issue", IssueSchema);

// ================== ROUTES ==================

// REGISTER
app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send("Registered Successfully");
    } catch (err) {
        res.status(500).send("Error registering user");
    }
});

// LOGIN
app.post("/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        pass: req.body.pass
    });

    if (user) res.json(user);
    else res.status(401).send("Invalid credentials");
});

// ================= CATEGORY =================

// ADD CATEGORY
app.post("/category", async (req, res) => {
    const cat = new Category({ name: req.body.name });
    await cat.save();
    res.send("Category Added");
});

// GET CATEGORY
app.get("/category", async (req, res) => {
    const data = await Category.find();
    res.json(data);
});

// ================= BOOKS =================

// ADD BOOK
app.post("/books", async (req, res) => {
    console.log("📚 Incoming book:", req.body); // DEBUG

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        available: true
    });

    await book.save();

    res.send("Book Added");
});

// GET BOOKS
app.get("/books", async (req, res) => {
    const data = await Book.find();
    res.json(data);
});

// ================= ISSUE =================

// ISSUE BOOK
app.post("/issue", async (req, res) => {
    const { bookId, user } = req.body;

    const book = await Book.findById(bookId);

    if (!book) return res.send("Book not found");
    if (!book.available) return res.send("Already issued");

    book.available = false;
    await book.save();

    const issue = new Issue({
        book: book.title,
        user: user
    });

    await issue.save();

    res.send("Book Issued");
});

// GET ISSUES
app.get("/issue", async (req, res) => {
    const data = await Issue.find();
    res.json(data);
});

// RETURN BOOK
app.post("/return/:id", async (req, res) => {
    const issue = await Issue.findById(req.params.id);

    if (!issue) return res.send("Issue not found");

    const book = await Book.findOne({ title: issue.book });

    if (book) {
        book.available = true;
        await book.save();
    }

    const days = Math.ceil((new Date() - issue.date) / (1000*60*60*24));
    const fine = days > 7 ? (days - 7) * 5 : 0;

    await Issue.findByIdAndDelete(req.params.id);

    res.json({ message: "Returned", fine });
});

// ================= SERVER =================

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
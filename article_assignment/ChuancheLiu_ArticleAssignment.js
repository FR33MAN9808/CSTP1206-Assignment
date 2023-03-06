const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})

// Article Server

let articles = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
]

// GET API ARTICLES
app.get('/', (req,res) => {
    res.send(articles);
})
// POST API ARTICLES
app.post('/post',(req, res) => {
    const newArticle = req.body; 
    articles.push(newArticle);
    res.send(articles);
})
// DELETE API ARTICLES
app.delete('/delete/:id', (req, res) => {  
    const articleID = req.params.id;
    articles = articles.filter((article) => article.id != articleID ? true : false);
    res.send(articles);

})



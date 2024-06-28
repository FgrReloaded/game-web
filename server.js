const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    res.set('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});

app.use(express.static(path.join(__dirname, 'game')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'game', 'game.html'));
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

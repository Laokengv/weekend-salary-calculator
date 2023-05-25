const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.static('server/public'));
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server running on:', PORT);
});

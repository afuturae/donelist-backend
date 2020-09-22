import app from './app';
import './database';
import 'reflect-metadata';

app.listen(3333, () => {
    console.log('Server startet on port 3333...');
});

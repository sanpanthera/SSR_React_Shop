import 'babel-polyfill';
import {StaticRouter} from 'react-router';
import  express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.js'
import bodyParser from 'body-parser'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
//import sassMiddleWare from 'node-sass-middleware';

var data = require('./products.json');

const rootReducer = combineReducers({
    ctr: ()=>({a:1 })
});

const store = createStore(rootReducer);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get("/products",(req,res)=>{
    res.send(data);
})

app.get("*",(req,res)=> {
    const context = {};

    const content = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <Provider store={store}><App/></Provider>
          </StaticRouter>
        );

    const html = `<html lang="en">
    <head>
      <title>
        POC Shop
      </title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css">
    </head>
    <body>
        <div id='root'>${content}</div>
        <script src="client_bundle.js"></script>
    </body>
    </html>
    `;

   res.send(html);
});


app.listen(PORT, ()=> {
    console.info('Express listening on port  ', PORT);
});
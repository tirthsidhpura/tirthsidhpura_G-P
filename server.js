const express = require('express')
const axios = require('axios')
const app =express();
app.set('view engine','ejs')

app.get('/', async (req,res)=>{
    try{
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=fd509da5346a56c38b537aec86c56b8a&language=en-US&page=1';
        const getmovie = await axios(url);
        const datas = getmovie.data.results;
        console.log(datas)
        res.render('index',{articles:getmovie.data.results})
    }   
    catch(err) {
        console.log(err)
    }
})



app.listen('3000',(req,res)=>{
    console.log('server started')
})

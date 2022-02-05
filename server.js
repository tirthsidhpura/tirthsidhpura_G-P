const express = require('express')
const axios = require('axios')
const app =express();
app.set('view engine','ejs')

app.get('/', async (req,res)=>{
    try{
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=useyourownapikey;
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

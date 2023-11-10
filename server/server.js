import express from 'express';
import cors from 'cors';

const data ={
    "hasNext":true,
    "testimonails":[
        {
            "message":"Excellent Product",
            "id":"42"
        },
        {
            "message":"Love it, 5/5 stars!",
            "id":"55"
        }
    ]
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.json(data);
    console.log(data);
})



app.listen(3000, ()=>console.log("Server running at http://localhost:3000"));
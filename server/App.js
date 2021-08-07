const express=require("express");
const path=require("path");
const cors =require("cors");
const mongoose=require("mongoose");
const router =require("./Routers/Routers");
require('dotenv').config()
const app=express();
// module.exports = {   
//     devServer: {     
//        watchOptions: {
//           ignored: [ path.resolve(__dirname, 'dist'),         
//                      path.resolve(__dirname, 'node_modules'),         
//                      path.resolve(__dirname, 'img') // image folder path 
//                     ]    
// }},}
app.use(express.static(path.join(__dirname+"/img")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);
const PORT= process.env.PORT || 5000;
mongoose.connect(process.env.DATA_BS, {useNewUrlParser: true,useFindAndModify: false,useUnifiedTopology: true }).then(()=>{
    app.listen(PORT,()=>{     console.log(`bağlandık+${PORT}`);   });
}).catch(err=>{console.log(err)});

const express=require("express");
const router=express.Router();
const {DeletePost,getFilm,post_film,UpdatePost}=require("../Controllers/film");
const multer=require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./img")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname)
    }
  })

const  upload = multer({storage: storage });

router.get("/get_film",getFilm);

router.post("/post_film",upload.single('file'),post_film);

router.delete("/id/:postid",DeletePost);

router.patch("/id/:postid",upload.single('file'),UpdatePost);

module.exports= router;
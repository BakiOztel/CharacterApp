const FilmModel = require("../Model/Film_Model");
const fs=require("fs");
exports.getFilm = async (req, res) => {
    try {
        const Filmler = await FilmModel.find();
        res.status(200).json(Filmler);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

exports.post_film = async (req, res) => {
    const random=Math.floor(Math.random() * 100);
    const film = new FilmModel({
        name: req.body.name,
        img: req.file.filename,
        Abilities: req.body.Abilities,
        Race: req.body.Race,
        Power:random
    });
    try {
        await film.save();
        res.status(201).json(film);
        console.log("oldu");
    } catch (err) {
        res.status(409).json({ message: error.message });
    }

}
exports.DeletePost=async (req,res)=>{
    const id=req.params.postid;
    console.log(req.params.postid);
    try{
        await FilmModel.findOneAndRemove({_id:id}).then(post=>{
            const yol="./img/"+post.img;
            fs.unlinkSync(yol);
        });
        res.json({message:"lan silindi"});
    }catch(err){
        res.json({message:err});
    }
}

exports.UpdatePost= async (req,res)=>{
    var dosya;
    if(req.file){
        dosya={
            name:req.body.name,
            Abilities:req.body.Abilities,
            Race:req.body.Race,
            img:req.file.filename
        }
    }else{
        dosya={
            name:req.body.name,
            Abilities:req.body.Abilities,
            Race:req.body.Race
        }
    }
    FilmModel.findByIdAndUpdate(req.params.postid,dosya,{new:true}).then((newPost)=>{
        console.log(newPost);
        res.json(newPost);
    }).catch(err=>{
        res.json("hata");
        console.log(err);
    });
    // console.log(dosya);
}

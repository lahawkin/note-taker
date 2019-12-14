
const router = require("express").Router();
const fs = require("fs"); 


// routes is comming with /api

router.get("/notes",function(req,res){
    fs.readFile("db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
      });
})

router.post("/notes",function(req,res){
    console.log(req.body)
    fs.readFile("db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        var myFile = JSON.parse(data);
        
        var idTemp = 1
        if (myFile.length !==0){
            idTemp = myFile[myFile.length -1].id + 1
        }
        var newNote={
            title: req.body.title,
            text:req.body.text,
            id:idTemp
        }
        
        myFile.push(newNote)
        fs.writeFile("db/db.json", JSON.stringify(myFile), function (err, data) {
            if (err) throw err; 
            res.json(myFile); 
        } ); 
      });
    
})

router.delete("/notes/:id",function(req,res){
    console.log("delete id:", req.params.id)

    // read the file  and look for the eliment and eliminate the elment form array and write the file
})

module.exports = router; 
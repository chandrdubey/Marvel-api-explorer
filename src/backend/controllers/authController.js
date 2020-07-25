module.exports = {
    register : async (req , res) =>{
        res.json(200, {body :req.body})
    }
}
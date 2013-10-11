
exports.login = function(req, res){
    if(req.body.username === 'demo' && req.body.password === '123456'){
        req.session.user = req.body.username;
        res.send(true);
    }else{
        res.send(null);
    }
}
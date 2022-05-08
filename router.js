module.exports = function(app){
    app.use('/students',require('./routes/students'))
}
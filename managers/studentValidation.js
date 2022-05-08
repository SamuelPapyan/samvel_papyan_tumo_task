module.exports = function(body){
    const validationErrors = [];
    if(body.firstName.length < 5)
        validationErrors.push({
            field:"first-name",
            message:"First Name is required and it must have minimum 5 symbols"
        });
    if(body.lastName.length < 5)
        validationErrors.push({
            field:"last-name",
            message:"Last Name is required and it must have minimum 5 symbols"
        });
    if(body.username.length < 5)
        validationErrors.push({
            field:"username",
            message:"Username is required and it must have minimum 5 symbols"
        });
    if(body.password.length < 5)
        validationErrors.push({
            field:"password",
            message:"Password is required and it must have minimum 5 symbols"
        });
    return validationErrors;
}
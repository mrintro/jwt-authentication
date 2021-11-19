module.exports.handleAuthErrors = (err) => {
    let errors = {email: '', password: '', username: '', name: ''}
    if(err.code === 11000){
        errors[Object.keys(err.keyValue)[0]] = `${err.keyValue[Object.keys(err.keyValue)[0]]} already in use, choose different credentials`
    }
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }
    console.log(err)

    Object.keys(errors).forEach((key) => {if(errors[key]==="") delete errors[key]})
    console.log(errors)
    return errors
}
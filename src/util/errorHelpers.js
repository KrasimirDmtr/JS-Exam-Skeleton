const { Error, MongooseError } = require("mongoose")

exports.getErrorMessage = (err) => {
    if (err instanceof MongooseError || err instanceof Error.ValidationError || err instanceof Error.ValidatorError) {
        return Object.values(err.errors).at(0).message 
    } else {
        return err.message
    }
}
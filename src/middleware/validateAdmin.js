function validateAdmin(req, res, next) {
    const admin = req.params.admin
    if (req.query.admin === "true") {
        next()
    } else {
        next("You do not have access to that route.")
    }
}
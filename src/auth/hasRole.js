export const hasRole = (req, res, roles) => {
    try {
        const { role } = req.user || {}
        if (!roles.includes(role)) {
            return res.status(403).send("Bu yo'l san un emas")
        }
    } catch (error) {
        return res.status(403).send(error.message)
    }
}

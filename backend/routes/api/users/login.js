router.post('/login', async (req, res, next) => {
    passport.authenticate('local', async function(err, user) {
        if (err) return next(err);
        if (!user) {
            const err = new Error('Invalid credentials');
            err.statusCode = 400;
            err.errors = { email: "Invalid credentials" };
            return next(err);
        }
        return res.json({ user });
    })(req, res, next);
});
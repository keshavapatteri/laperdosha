import jwt from 'jsonwebtoken';

export const authUser = (req, res, next) => {
    try {
        // Collect token from cookies
        const { token } = req.cookies;

        // Check if token is present
        if (!token) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        // Verify and decrypt the token
        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Check if token is successfully verified
        if (!tokenVerified) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        // Optionally, you can attach the user data to the request object
        req.user = tokenVerified;

        // Proceed to the next middleware or route handler
        next();

    } catch (error) {
        // Handle errors (e.g., token expiration, invalid token)
        res.status(403).json({ success: false, message: "Token verification failed", error: error.message });
    }
};

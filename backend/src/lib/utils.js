import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {
        httpOnly: true,       // Prevents XSS attacks
        secure: process.env.NODE_ENV === "production",  // Secure in production
        sameSite: "Lax",      // Prevent CSRF (strict might cause issues with cross-origin)
        maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 days
        path: "/",            // Makes the cookie accessible site-wide
    });

    return token;
};

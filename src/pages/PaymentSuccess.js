import React from "react";
import { Link } from "react-router-dom";

export const PaymentSuccess = () => (
    <div class="cover" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <img src="https://thumbs.gfycat.com/HomelyMiserlyBats-size_restricted.gif" alt="" />
        <h3 style={{ padding: 50 }}>tadaaaaaaaaaaaa 🎉</h3>
        <Link to="/">Go Home</Link>
    </div>
)
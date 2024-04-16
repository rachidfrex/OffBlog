import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const { Cmp } = props;
    const navigate = useNavigate();
    const user = localStorage.getItem('user-info');

    useEffect(() => {
        if (!user) {
            navigate('/login', { replace: true });
        }
    }, [user, navigate]);

    return user ? <Cmp /> : null;
}

export default Protected;
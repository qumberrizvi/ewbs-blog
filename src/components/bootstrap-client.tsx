"use client"

import {useEffect} from 'react';

function BootstrapClient() {
    useEffect(() => {
        console.log('bootstrap loaded');
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return null;
}

export default BootstrapClient;

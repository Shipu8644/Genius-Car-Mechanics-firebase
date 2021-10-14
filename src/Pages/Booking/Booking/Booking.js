import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const Booking = () => {
    const { serviceId } = useParams();
    const [services] = useServices();
    console.log(services.length);
    return (
        <div>

            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;
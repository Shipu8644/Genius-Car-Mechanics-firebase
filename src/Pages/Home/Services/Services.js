import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();

    console.log(services.length);
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
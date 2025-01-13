import React, { useEffect, useState } from 'react';
import img from '../../assest/download.png';
import axios from 'axios';


import img1 from '../../assest/Animation - 1732949011974.gif'

const PrivacyPolicy = () => {
    const [loading, setLoading] = useState(true);
    const [termsData, setTermsData] = useState(null);
    const [error, setError] = useState(null);

    const fetchTermsData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://dually.app/api/api/v1/user/privacy');

            const data = response.data?.data;
            if (data && data.length > 0) {
                setTermsData(data[0].header);
            } else {
                setError('Terms and Conditions data not found.');
            }
        } catch (error) {
            console.error('Error fetching Terms and Conditions data:', error);
            setError('Error fetching Terms and Conditions data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTermsData();
    }, []);


    return (
        <div className="terms-container">
            <div className="terms-container_logo">
                <img src={img} alt="Logo" />
            </div>
            <h1>Dually Privacy Policy</h1>
            {loading ? (
                <div className="loading">
                    <img src={img1} alt="Logo" />
                </div>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (

                <div className="terms-content">
                    {termsData
                        ? termsData.split('\n').map((line, index) => (
                            <p key={index}>
                                {/^(\d+\.)/.test(line) ? <strong>{line}</strong> : line}
                            </p>
                        ))
                        : null}
                </div>

            )}
        </div>
    );
};

export default PrivacyPolicy;

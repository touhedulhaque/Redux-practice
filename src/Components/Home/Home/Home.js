import React from 'react';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import ReducerCount from '../../ReducerCount/ReducerCount';
import PatientManagement from '../../PatientManagement/PatientManagement';
import Footer from '../../ticker/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <HomePage />
            <ReducerCount />
            <PatientManagement />
            <Footer />
        </div>
    );
};

export default Home;
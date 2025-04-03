import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/Home.jsx'
import SubmitForm from './pages/SubmitForm.jsx'
import Information from './assets/Information.jsx'
import Contact from './pages/Contact.jsx'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    return (
        <Router basename="/stemscholars-website">
            <div className="bg-white dark:bg-black">
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/submitForm" element={<SubmitForm />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App

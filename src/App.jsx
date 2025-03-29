import React from 'react'
import Home from './assets/Home.jsx'
import SubmitForm from './pages/SubmitForm.jsx'
import Information from './assets/Information.jsx'
import Contact from './pages/Contact.jsx'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    let component
    switch (window.location.pathname) {
        case '/stemscholars-website/':
            component = <Home/>
            break
        case '/stemscholars-website/information/':
            component = <Information/>
            break
        case '/stemscholars-website/submitForm/':
            component = <SubmitForm/>
            break
        case '/stemscholars-website/contact/':
            component = <Contact/>
            break
    }
    return (
        <>
            <div className="bg-white dark:bg-black">
                <NavBar />
                <div>{component}</div>
            </div>
        </>
    )
}

export default App

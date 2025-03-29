import React from 'react'
import Home from './Pages/Home'
import SubmitForm from './Pages/SubmitForm'
import Information from './Pages/Information'
import Contact from './Pages/Contact'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    let component
    switch (window.location.pathname) {
        case '/stemscholars-website':
            component = <Home/>
            break
        case '/stemscholars-website/information':
            component = <Information/>
            break
        case '/stemscholars-website/submitForm':
            component = <SubmitForm/>
            break
        case '/stemscholars-website/contact':
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

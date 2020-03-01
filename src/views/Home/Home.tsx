import React from 'react'
import { NavigationBar } from '../../components/Navbar/Navbar'
import '../../App.css'
import { LoginCard } from '../../components/Login/Login'

function Home() {
    return (
        <div style={{ flex: 1 }}>
            <NavigationBar />
            <div>
               <LoginCard />
            </div>
        </div>
    )
}

export default Home
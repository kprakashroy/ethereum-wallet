import './App.css';
import React, { useState, useEffect } from 'react';



import HeaderContainer from './components/header-container';
import Deposit from './components/deposit';
import Navigation from './components/navigation';


export default function Main(){
  

    return(
        
        <div >
            <div className="Toastify" />
                <div className="flex min-h-screen">
                    <aside className="emd block sm:hidden">
                        <Navigation/>
                    </aside>
                    <main className="w-full sm:ml-[0px] ml-[11.25rem]  bg-[#f4f4f4]">
                        <div>
                            <HeaderContainer/>
                            <Deposit/>
                        </div>
                    </main>
                </div>
        </div>


    )
}
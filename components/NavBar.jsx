import React from "react"; 
import '../src/index.css'
function NavBar(){
    return (
        <>
            <div className="flex justify-between pl-5 pr-5 border-1 bg-slate-600 pt-5 pb-5 font-bold text-teal-400 shadow-2xl shadow-black rounded-lg sticky top-2 z-10" >
                <div className="cursor-pointer">logo</div>
                <ul className="flex gap-20 mr-52">
                    <li className="cursor-pointer"><a href="/home">Home</a></li>
                    <li className="cursor-pointer" ><a href="#">About</a></li>
                    <li className="cursor-pointer"><a href="#">Contact</a></li>
                </ul>   
            </div> 
        </>
    );
}

export default NavBar;

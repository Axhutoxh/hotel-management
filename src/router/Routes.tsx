import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/Mainlayout"



const Router = ()=>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}></Route>
        </Routes>
    </BrowserRouter>
    )
}


export default Router





export const MainRoutes = () =>{



    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/shop" element={<Product/>}/>
            <Route path='admin' element={<Admin/>}/>
            <Route path='dashboard' element={<AdminDashboard/>}/>
        </Routes>

  )
}

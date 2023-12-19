import { Route, Routes } from "react-router-dom";
import { Home } from "./admin/home/home.component";
import { PropertyType } from "./admin/property-type/property-type-form/property-type.component";
import { Property } from "./admin/property/property.component";


 export function AppRouter(){
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/property-type" element={<PropertyType></PropertyType>}></Route>
            <Route path="/property" element={<Property></Property>}></Route>
        </Routes>
    </div>
    )
 }


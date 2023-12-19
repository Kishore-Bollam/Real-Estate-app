import { PropertyView } from "../property-type/property-type-view/property-type-view.component";

export function Property(){
    return(
        <div>
            <h1 className="text-center text-danger">PROPERTY COMPONENT</h1>
      <form className="form-group m-5">
      <div>
            <label>PROPERTY-NAME</label>
            <input type="text" placeholder="Enter Property Name Here..." className="form-control m-2"></input>
           </div>
           <div>
            <label>PROPERTY DESCRIPTION</label>
            <input type="text" placeholder="Enter Property Description Here..." className="form-control m-2"></input>
           </div>

           <input type="button" value="Submit" className="btn btn-primary m-3"></input>
           <input type="reset" value="Reset" className="btn btn-danger m-3"></input>
      </form>
             <PropertyView></PropertyView>
        </div>
    )
}
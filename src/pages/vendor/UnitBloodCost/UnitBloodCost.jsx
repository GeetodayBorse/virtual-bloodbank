import React from 'react'
import "./Unitbloodcost.css"

const Unitbloodcost = () => {
  return (
    <section className="container-fluid">
    <section className="vendors-details d-flex m-4 ">
      {/* <!--Table of Unit Blood Cost--> */}
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" style= {{width: "1%"}}>Blood Group</th>
              <th scope="col" style= {{width: "1%"}}>Quantity (Units)</th>
              <th scope="col" style= {{width: "1%"}}>Price Per Unit(Rs)</th>
              <th scope="col" style= {{width: "1%"}}>Actions</th>
            </tr>
          </thead>
  
          <tbody className="border border-danger">
            <tr className="border-2" >
              <td className="border-2" style= {{width: "1%"}}>A+</td>
              <td className="border-2" style= {{width: "1%"}}>100</td>
              <td className="border-2" style= {{width: "1%"}}>50</td>
              <td className="d-flex gap-3 justify-content-center" >
                {/* <!--Add Button-->               */}
                <button className=" add text-white border-2 w-25 "><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                {/* <!--Delete Button--> */}
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button>
               
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">A-</td>
              <td className="border-2">80</td>
              <td className="border-2">45</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button> 
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button> 
              </td>
            </tr>
  
            <tr className="border-2">
              <td className="border-2">B+</td>
              <td className="border-2">120</td>
              <td className="border-2">60</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button>    
              </td>
            </tr>
            <tr className="border-2">
              <td className="border-2">B-</td>
              <td className="border-2">40</td>
              <td className="border-2">70</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button>   
              </td>
            </tr>
  
            <tr className="border-2">
              <td className="border-2">AB+</td>
              <td className="border-2">40</td>
              <td className="border-2">70</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button>
              </td>
            </tr>
  
            <tr className="border-2">
              <td className="border-2">AB-</td>
              <td className="border-2">40</td>
              <td className="border-2">70</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button> 
              </td>
            </tr>
  
            <tr className="border-2">
              <td className="border-2">O+</td>
              <td className="border-2">40</td>
              <td className="border-2">70</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button>
               
              </td>
            </tr>
  
            <tr className="border-2">
              <td className="border-2">O-</td>
              <td className="border-2">40</td>
              <td className="border-2">70</td>
              <td className="d-flex gap-3 justify-content-center">
                <button className="add text-white border-2 w-25"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                <button className="bg-danger text-white border-2 w-25"><i className="fa fa-trash" aria-hidden="true"></i></button> 
              </td>
            </tr> 
          </tbody>
        </table>
    </section>
  </section>
  )
}

export default Unitbloodcost
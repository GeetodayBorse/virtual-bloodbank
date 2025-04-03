import React from 'react'
import "./Vendorprofile.css"
import VendorImage from "../../../assets/Vendorprofileimg.jpg"

const Vendorprofile = () => {
  return (
    <>
    
<section className="d-flex justify-content-center">
{/* <!-- Main Content --> */}
<div className="container m-3">
  <div className="row">
    {/* <!-- Profile Content --> */}
    <main className="col-11 d-flex flex-column justify-content-center align-items-center m-4">
      {/* <!-- Profile Header --> */}
      <section className="mb-4 text-center">
        <img src={VendorImage} alt="Vendor Logo" className="vendor-logo"/>
        <h2>Vendor Name</h2>
        <p className="text-muted">vendor@example.com | +123-456-7890</p>
        <button className="btn btn-danger">Edit Profile</button>
      </section>

      {/* <!-- Profile Details --> */}
      <section className="mb-4 col-11">
        <h3>Profile Details</h3>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>Vendor Name</td>
            </tr>
            <tr>
              <th>Organization:</th>
              <td>Blood Bank Name</td>
            </tr>
            <tr>
              <th>Contact:</th>
              <td>+123-456-7890</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>vendor@example.com</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>123 Main Street, Springfield</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* <!-- Performance Metrics --> */}
      <section className="mb-4 col-11">
        <h3>Performance Metrics</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5>Total Stock Contributions</h5>
                <p className="fs-5">500 Units</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5>Requests Fulfilled</h5>
                <p className="fs-5">450</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5>Pending Requests</h5>
                <p className="fs-5">10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Activity Log --> */}
      <section className="mb-4 col-11">
        <h3>Recent Activity</h3>
        <ul className="list-group gap-4">
          <li className="list-group-item">Updated stock for A+ blood group on Jan 10, 2025.</li>
          <li className="list-group-item">Fulfilled request for B- blood group on Jan 9, 2025.</li>
          <li className="list-group-item">Added new blood group O- on Jan 8, 2025.</li>
        </ul>
      </section>
    </main>
  </div>
</div>
</section>
   
</>
  )
}

export default Vendorprofile
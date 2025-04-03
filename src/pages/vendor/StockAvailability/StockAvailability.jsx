import React from 'react'
import "./Stockavailability.css"

const Stockavailability = () => {
  return (
    <>
    <section className="text-center mb-5">
      <h2 className="bg-danger text-white p-4">Stock Overview</h2>
      <div className="row g-4 mt-4">
        <div className="col-md-4">
          <div className="stock-box card text-center shadow">
            <div className="card-body">
              <h3>Critical Required</h3>
              <p className="fs-3 fw-bold">5</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stock-box card text-center shadow">
            <div className="card-body">
              <h3>Low Stock Groups</h3>
              <p className="fs-3 fw-bold">2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stock-box card text-center shadow">
            <div className="card-body">
              <h3>Total Blood Units</h3>
              <p className="fs-3 fw-bold">250</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <section className="card shadow mb-4" id="stock-table">
        <div className="card-body">
          <h2 className="text-center mb-4 bg-danger text-white p-4">Stock Details</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Blood Group</th>
                <th>Available Units</th>
                <th>Last Updated</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="border border-danger">
              <tr className="border-2">
                <td className="border-2">A+</td>
                <td className="border-2">50</td>
                <td className="border-2">2025-01-01</td>
                <td className="border-2">Normal</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">O+</td>
                <td className="border-2">5</td>
                <td className="border-2">2025-01-05</td>
                <td className="border-2 text-danger fw-bold">Low Stock</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">B+</td>
                <td className="border-2">30</td>
                <td className="border-2">2025-01-07</td>
                <td className="border-2">Normal</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">AB+</td>
                <td className="border-2">2</td>
                <td className="border-2">2025-01-09</td>
                <td className="border-2 text-danger fw-bold">Critical</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">A-</td>
                <td className="border-2">50</td>
                <td className="border-2">2025-01-12</td>
                <td className="border-2">Normal</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">O-</td>
                <td className="border-2">5</td>
                <td className="border-2">2025-01-12</td>
                <td className="border-2 text-danger fw-bold">Low Stock</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">B-</td>
                <td className="border-2">30</td>
                <td className="border-2">2025-01-15</td>
                <td className="border-2">Normal</td>
              </tr>
              <tr className="border-2">
                <td className="border-2">AB-</td>
                <td className="border-2">2</td>
                <td className="border-2">2025-01-12</td>
                <td className="border-2 text-danger fw-bold">Critical</td>
              </tr>
            </tbody>
          </table>
      </div>
    </section>

    </>
  )
}

export default Stockavailability
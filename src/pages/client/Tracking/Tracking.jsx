import React from 'react'
import "./Tracking.css"

const Tracking = () => {
  return (
    <>
      <section className="d-flex justify-content-center">
        <section className="main-section col-10">
          <div className="modal-content">
            <img src="https://cdn3.iconfinder.com/data/icons/health-care/2000/Health7-2-512.png" alt="" className="image" />
            <section className="heading">
              <section>
                <h3 className="text-danger fw-bold">Blood Request Tracking</h3>
                <p>Track your blood request status here</p>
                <hr />
              </section>
              <section className="d-flex flex-row justify-content-center align-items-center">
                <section className="tracking col-4 p-2">
                  <div>Tracking ID: SRAE094532</div>
                </section>
              </section>
            </section>
            <section className="track-logo d-flex flex-row justify-content-between mt-2">
              <div className="status-step status-active">
                <i className="fa fa-thumbs-up fa-2x align-content-center" id="track-icon1" aria-hidden="true"></i>
                <p className="fw-bold fs-5">Request Received</p>
              </div>
              <div className="status-step status-active">
                <i className="fa fa-window-restore fa-2x align-content-center" id="track-icon2" aria-hidden="true"></i>
                <p className="fw-bold fs-5">Approval for Dispatch</p>
              </div>
              <div className="status-step">
                <i className="fa fa-truck fa-2x align-content-center" id="track-icon3" aria-hidden="true"></i>
                <p className="fw-bold fs-5">Blood Collected</p>
              </div>
              <div className="status-step">
                <i className="fa fa-check-circle fa-2x align-content-center" id="track-icon4" aria-hidden="true"></i>
                <p className="fw-bold fs-5">Delivered</p>
              </div>
            </section>
            <section className="d-flex justify-content-center align-content-center">
    <section className="col-10 mt-5">
      <table className="table table-bordered border-danger table-hover">
        <thead className="table-head">
          <tr className="border-2">
            <th scope="col" className="border-2">Actions</th>
            <th scope="col" className="border-2">Status</th>
            <th scope="col" className="border-2">Time</th>
          </tr>
        </thead>
        <tbody> 
          <tr className="border-2">
            <td className="trackingTable border-2">Request Received</td>
            <td className="trackingTable border-2">Completed</td>
            <td className="trackingTable border-2">10:00 AM, Jan 12</td>
        </tr>
        <tr className="border-2">
            <td className="trackingTable border-2">Approval for Dispatch</td>
            <td className="trackingTable border-2">In Progress</td>
            <td className="trackingTable border-2">11:00 AM, Jan 12</td>
        </tr>
        <tr className="border-2">
            <td className="trackingTable border-2">Blood Collected</td>
            <td className="trackingTable border-2">Pending</td>
            <td className="trackingTable border-2">--</td>
        </tr>
        <tr className="border-2">
            <td className="trackingTable border-2">Delivered</td>
            <td className="trackingTable border-2">Pending</td>
            <td className="trackingTable border-2">--</td>
        </tr>
        </tbody>
      </table>
    </section>
    </section>

            <section className=" mb-3 close d-flex justify-content-end">
              <button type="close" className="btn btn-danger" id="details">Close</button>
            </section>
          </div>
        </section>
      </section>
      
    </>
  )
}

export default Tracking
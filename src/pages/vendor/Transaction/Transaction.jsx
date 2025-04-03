import "./transaction.css";

import React from "react";

const Transaction = () => {
  return (
    <>
      <div className=" mt-5">
        {/* <!-- Header --> */}
        <div className="bg-danger">
          <h2 className="text-center mb-4 vendor-heading py-3 text-white">
            Transactions
          </h2>
        </div>
        {/* <!-- Summary Statistics --> */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card stats-card">
              <div className="card-body text-center bg-danger">
                <h5>Total Transactions</h5>
                <p className="stats-value text-white">25</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card stats-card bg-danger">
              <div className="card-body text-center">
                <h5>Total Units</h5>
                <p className="stats-value text-white">50</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card stats-card bg-danger">
              <div className="card-body text-center">
                <h5>Total Amount</h5>
                <p className="stats-value text-white">₹300,000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card stats-card bg-danger">
              <div className="card-body text-center">
                <h5>Pending Transactions</h5>
                <p className="stats-value text-white">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Search and Filter Section --> */}
        <section className="d-flex justify-content-center align-items-center gap-2 client-search mb-4">
          <input
            type="text"
            placeholder="Search by Vendor, Client, Receipt ID, or UTR"
            className="w-25 border-2 border-danger rounded-2 form-control"
            id="searchInput"
          />
          <button className="p-1 text-white bg-danger border-danger search-button rounded-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <select
            className="form-select filter-select ms-2 "
            id="bloodGroupFilter"
          >
            <option value="all">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </section>

        {/* <!-- Transactions Table --> */}
        <section className="vendors-details">
          <table className="table table-bordered table-hover">
            <thead className="transaction-heading text-white">
              <tr>
                <th scope="col" style={{ width: "5%" }}>
                  Sr. No
                </th>
                <th scope="col">Vendor Name</th>
                <th scope="col">Client Name</th>
                <th scope="col">Receipt ID</th>
                <th scope="col">UTR No</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Units</th>
                <th scope="col">Hospital Name</th>
                <th scope="col">Amount (₹)</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="border-2" id="transactionTableBody">
              <tr className="border-2">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Tonny</td>
                <td>20-02-25-14-30-00</td>
                <td>912345678912</td>
                <td>A-</td>
                <td>1</td>
                <td>Lilavati</td>
                <td>12,000</td>
                <td className="text-success">Completed</td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <tr className="border-2">
                <th scope="row">2</th>
                <td>Jane</td>
                <td>Alice</td>
                <td>21-02-25-09-15-00</td>
                <td>987654321098</td>
                <td>O+</td>
                <td>2</td>
                <td>Apollo</td>
                <td>25,000</td>
                <td className="text-warning">Pending</td>
                <td>
                  {/* <button className="btn btn-sm btn-warning">
                    Mark Complete
                  </button> */}
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Transaction;

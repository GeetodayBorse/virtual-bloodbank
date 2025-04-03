import "./inventory.css";

import React from "react";

const Inventory = () => {
  return (
    <>
      <div className="container mt-5">
        {/* <!-- Header --> */}
        <h2 className="text-center mb-4 vendor-heading py-3 text-white">
          Vendor Blood Inventory
        </h2>

        {/* <!-- Summary Statistics --> */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card stats-card">
              <div className="card-body text-center">
                <h5>Total Blood Groups</h5>
                <p className="stats-value text-white">8</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card stats-card">
              <div className="card-body text-center">
                <h5>Total Units Available</h5>
                <p className="stats-value  text-white" id="totalUnits">
                  420
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Add New Inventory & Filter Section --> */}
        <section className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#addInventoryModal"
          >
            <i className="fa-solid fa-plus"></i> Add Inventory
          </button>
          <select
            className="htmlForm-select filter-select"
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

        {/* <!-- Inventory Table --> */}
        <section className="vendors-details">
          <table className="table table-bordered table-hover">
            <thead className="inventory-heading text-white">
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Quantity (Units)</th>
                <th scope="col">Price Per Unit (₹)</th>
                <th scope="col">Total Value (₹)</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="inventoryTableBody">
              <tr className="border-2">
                <td>O+</td>
                <td>100</td>
                <td>50</td>
                <td>5,000</td>
                <td className="d-flex gap-3 justify-content-center">
                  <button
                    className="btn btn-sm btn-primary edit-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#editInventoryModal"
                  >
                    <i className="fa-solid fa-edit"></i>
                  </button>
                  <button className="btn btn-sm btn-danger delete-btn">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr className="border-2">
                <td>O-</td>
                <td>80</td>
                <td>45</td>
                <td>3,600</td>
                <td className="d-flex gap-3 justify-content-center">
                  <button
                    className="btn btn-sm btn-primary edit-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#editInventoryModal"
                  >
                    <i className="fa-solid fa-edit"></i>
                  </button>
                  <button className="btn btn-sm btn-danger delete-btn">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              {/* <!-- Add more rows as needed --> */}
            </tbody>
          </table>
        </section>

        {/* <!-- Add Inventory Modal --> */}
        <div
          className="modal fade"
          id="addInventoryModal"
          tabIndex="-1"
          aria-labelledby="addInventoryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addInventoryModalLabel">
                  Add New Inventory
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="addInventoryhtmlhtmlForm">
                  <div className="mb-3">
                    <label htmlFor="bloodGroup" className="htmlForm-label">
                      Blood Group
                    </label>
                    <select
                      className="htmlForm-select"
                      id="bloodGroup"
                      required
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="quantity" className="htmlForm-label">
                      Quantity (Units)
                    </label>
                    <input
                      type="number"
                      className="htmlForm-control"
                      id="quantity"
                      min="1"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="htmlForm-label">
                      Price Per Unit (₹)
                    </label>
                    <input
                      type="number"
                      className="htmlForm-control"
                      id="price"
                      min="1"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  id="saveInventoryBtn"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Edit Inventory Modal --> */}
        <div
          className="modal fade"
          id="editInventoryModal"
          tabIndex="-1"
          aria-labelledby="editInventoryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editInventoryModalLabel">
                  Edit Inventory
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="editInventoryhtmlhtmlForm">
                  <div className="mb-3">
                    <label htmlFor="editBloodGroup" className="htmlForm-label">
                      Blood Group
                    </label>
                    <input
                      type="text"
                      className="htmlForm-control"
                      id="editBloodGroup"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editQuantity" className="htmlForm-label">
                      Quantity (Units)
                    </label>
                    <input
                      type="number"
                      className="htmlForm-control"
                      id="editQuantity"
                      min="0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editPrice" className="htmlForm-label">
                      Price Per Unit (₹)
                    </label>
                    <input
                      type="number"
                      className="htmlForm-control"
                      id="editPrice"
                      min="1"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="updateInventoryBtn"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
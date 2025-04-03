import "./OrderManagement.css";
const OrderManagement = () => {
  return (
    <>
      {/* <!-- Main Content --> */}
      <div className="container my-5">
        <div className="table-container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">
              <i className="fas fa-shopping-cart me-2"></i>Order Management
            </h2>
            <button
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#filterModal"
            >
              <i className="fas fa-filter me-1"></i>Filter Orders
            </button>
          </div>

          {/* <!-- Filter Section --> */}
          <div className="filter-section">
            <form className="row g-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Order ID"
                />
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option value="">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-danger w-100">
                  Apply Filters
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Orders Table --> */}
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="text-white">
                <tr>
                  <th>Order ID</th>
                  <th>Client</th>
                  <th>Blood Type</th>
                  <th>Units</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="status-pending">
                  <td>ORD001</td>
                  <td>City Hospital</td>
                  <td>A+</td>
                  <td>5</td>
                  <td>
                    <span className="badge bg-warning text-dark">Pending</span>
                  </td>
                  <td>2025-02-22</td>
                  <td>
                    <button className="btn btn-sm btn-danger btn-action">
                      Process
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary btn-action ms-1"
                      title="View Details"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr className="status-processing">
                  <td>ORD002</td>
                  <td>Red Cross Clinic</td>
                  <td>O-</td>
                  <td>3</td>
                  <td>
                    <span className="badge bg-primary">Processing</span>
                  </td>
                  <td>2025-02-21</td>
                  <td>
                    <button className="btn btn-sm btn-success btn-action">
                      Complete
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary btn-action ms-1"
                      title="View Details"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr className="status-completed">
                  <td>ORD003</td>
                  <td>General Hospital</td>
                  <td>B+</td>
                  <td>2</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>2025-02-20</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary btn-action"
                      title="View Details"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <!-- Filter Modal --> */}
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="filterModalLabel">
                Filter Orders
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Order ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Order ID"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-control" />
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
              <button type="button" className="btn btn-danger">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderManagement;

import React from "react";
import "./FeedbackForm.css";
import Header from "../../../component/Header/Header";
import Footer from "../../../component/footer/Footer";
const FeedbackForm = () => {
  return (
    <>
      <section className="d-flex justify-content-center">
        <section className="main p-4 col-9">
          <div className="modal-content">
            <img
              src="https://cdn3.iconfinder.com/data/icons/health-care/2000/Health7-2-512.png"
              alt=""
              className="image"
            />
            <section>
              <div className="modal-header gap-5">
                <h3
                  className="modal-title text-danger"
                  id="staticBackdropLabel"
                >
                  Message/Complaint Form
                </h3>
              </div>
              <hr className="col-10" />
            </section>
            <div className="modal-body">
              <div className="mb-3 col-11">
                <label for="Name" className="patient-name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="details"
                  aria-describedby="Name"
                />
              </div>
              <div className="mb-3 col-11">
                <label for="exampleInputEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="details"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-11 mb-3">
                <label for="inputAddress" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  id="details"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer gap-3">
              <button type="button" className="btn btn-danger">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default FeedbackForm;

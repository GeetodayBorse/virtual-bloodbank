import React from "react";
import "./RequestForm.css";
const RequestForm = () => {
  return (
    <>
      <section className="d-flex bg-white justify-content-center">
        <section className="element col-10">
          <section className="content">
            <section className="form-outline p-4">
              <img
                src="https://cdn3.iconfinder.com/data/icons/health-care/2000/Health7-2-512.png"
                alt=""
                className="image"
              />
              <h4 className="text-danger">Blood Request Form</h4>
              <hr className="col-50" />
              <section>
                <form>
                  <section className="mb-3">
                    <div className="mb-3 col-20">
                      <label htmlFor="details" className="patient-name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control vw-75"
                        id="details"
                        aria-describedby="Name"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <section className="d-flex gap-5">
                      <div>
                        <label htmlFor="Contact-no" className="Contact">
                          Contact No
                        </label>
                        <input
                          type="tel"
                          className="form-control m-1"
                          id="details"
                        />
                      </div>
                      <div className="col-2">
                        <label id="number-label" htmlFor="number">
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          id="details"
                          min="0"
                          max="99"
                          className="form-control m-1"
                          aria-describedby="age"
                          placeholder="Age"
                        />
                      </div>

                      <section style={{ textAlign: "center" }}>
                        <label
                          htmlFor="gender"
                          className="gender"
                          style={{ display: "block", marginBottom: "10px" }}
                        >
                          Gender
                        </label>
                        <div
                          className="form-check form-check-inline"
                          style={{ display: "inline-flex", gap: "30px" }}
                        >
                          <div>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="male"
                            />
                            <label className="form-check-label " htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="female"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          <div>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="other"
                            />
                            <label className="form-check-label" htmlFor="other">
                              Other
                            </label>
                          </div>
                        </div>
                      </section>
                    </section>
                    <div className="mb-3 col-11">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="details"
                        aria-describedby="emailHelp"
                        style={{width:"70vw"}}
                      />
                    </div>
                    <div className="dropdown mb-3">
                      <label htmlFor="inputEmail4" className="form-label">
                        Blood Group
                      </label>
                      <select
                        className="btn btn-white dropdown-toggle"
                        id="details"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <option value="dropdown-item">
                          Select Blood Group
                        </option>
                        <option value="dropdown-item">A +ve</option>
                        <option value="dropdown-item">A -ve</option>
                        <option value="dropdown-item">B +ve</option>
                        <option value="dropdown-item">B -ve</option>
                        <option value="dropdown-item">AB +ve</option>
                        <option value="dropdown-item">AB -ve</option>
                        <option value="dropdown-item">O +ve</option>
                        <option value="dropdown-item">O -ve</option>
                      </select>
                    </div>
                    <div className="mb-3 col-4 d-inline-flex gap-2">
                      <label htmlFor="inputUnit" className="form-label col-6">
                        Quantity Required
                      </label>
                      <input
                        type="number"
                        name="unit"
                        id="details"
                        min="1"
                        max="10"
                        className="form-control gap-3"
                        aria-describedby="unit"
                      />
                      <label
                        id="number-label"
                        htmlFor="number"
                        className="form-label"
                      >
                        Units
                      </label>
                    </div>
                    <div className="dropdown mb-3">
                      <label htmlFor="inputEmail4" className="form-label">
                        Urgency Level
                      </label>
                      <select
                        className="btn btn-white dropdown-toggle"
                        id="details"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <option value="dropdown-item">Select</option>
                        <option value="dropdown-item">Immediate</option>
                        <option value="dropdown-item">With-in 24 hrs</option>
                        <option value="dropdown-item">Regular</option>
                      </select>
                    </div>
                    <div className="col-11 mb-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Hospital Name
                      </label>
                      <input
                        type="text"
                        className="form-control vw-75"
                        id="details"
                        placeholder="Enter Hospital Name"
                        
                      ></input>
                    </div>
                    <div className="col-11 mb-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Hospital Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="details"
                        placeholder="Road Name / Area / Colony"
                      ></input>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control w-50"
                        id="details"
                      />
                    </div>
                    <section className="d-flex w-75 gap-3">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="inputState" className="form-label">
                          State
                        </label>
                        <select id="details" className="form-select">
                          <option selected>Choose...</option>
                          <option value="States">Andhra Pradesh</option>
                          <option value="States">Arunachal Pradesh</option>
                          <option value="States">Assam</option>
                          <option value="States">Bihar</option>
                          <option value="States">Chhattisgarh</option>
                          <option value="States">Goa</option>
                          <option value="States">Gujarat</option>
                          <option value="States">Haryana</option>
                          <option value="States">Himachal Pradesh</option>
                          <option value="States">Jharkhand</option>
                          <option value="States">Karnataka</option>
                          <option value="States">Kerala</option>
                          <option value="States">Maharashtra</option>
                          <option value="States">Madhya Pradesh</option>
                          <option value="States">Manipur</option>
                          <option value="States">Meghalaya</option>
                          <option value="States">Mizoram</option>
                          <option value="States">Nagaland</option>
                          <option value="States">Odisha</option>
                          <option value="States">Punjab</option>
                          <option value="States">Rajasthan</option>
                          <option value="States">Sikkim</option>
                          <option value="States">Tamil Nadu</option>
                          <option value="States">Tripura</option>
                          <option value="States">Telangana</option>
                          <option value="States">Uttar Pradesh</option>
                          <option value="States">Uttarakhand</option>
                          <option value="States">West Bengal</option>
                        </select>
                      </div>
                      <div className="col-md-2 mb-3">
                        <label htmlFor="inputZip" className="form-label">
                          Pincode
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="details"
                        />
                      </div>
                    </section>
                    <div className="col-12">
                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="submit"
                        className="btn btn-danger submit"
                        id="details"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Submit
                      </button>
                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade "
                        id="staticBackdrop"
                        data-bs-backdrop="false"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5 align-items-center text-danger"
                                id="staticBackdropLabel"
                              >
                                OTP Generator
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <section className="otp-main">
                                <p>Enter the OTP sent to your email</p>
                                <section className="d-flex justify-content-center align-items-center">
                                  <section className="col-4 otp-input">
                                    <input
                                      type="text"
                                      className="otp mb-3 "
                                      id="otp-details"
                                      placeholder="Enter the OTP"
                                      maxLength="6"
                                      minLength="3"
                                      required
                                    />
                                    <button className="btn verify mb-3 bg-danger text-white border-0">
                                      Verify OTP
                                    </button>
                                  </section>
                                </section>
                                <p>
                                  Didn't recieved OTP?
                                  <a href="#" className="resend">
                                    Resend OTP
                                  </a>
                                </p>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="reset"
                        className="btn btn-secondary reset"
                        id="reset-btn"
                      >
                        Reset
                      </button>
                    </div>
                  </section>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default RequestForm;

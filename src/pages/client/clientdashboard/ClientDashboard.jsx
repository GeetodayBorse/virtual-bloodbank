import React from "react";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  return (
    <>
      <section class="container col-12 m-3">
        <div class="d-flex justify-content-between ">
          {/* <!-- Filters Section --> */}
          <section class="filters-card col-3">
            <h4 class="text-danger mb-3">Filters</h4>
            <hr class="text-danger" />
            <h5 class="text-danger mb-2">Search Blood</h5>
            <form>
              <section class="mb-3">
                <label for="blood-group" class="form-label">
                  Blood Group
                </label>
                <select class="form-select" id="blood-group">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A +ve</option>
                  <option value="A-">A -ve</option>
                  <option value="B+">B +ve</option>
                  <option value="B-">B -ve</option>
                  <option value="AB+">AB +ve</option>
                  <option value="AB-">AB -ve</option>
                  <option value="O+">O +ve</option>
                  <option value="O-">O -ve</option>
                </select>
              </section>
              <section class="mb-3">
                <label for="units" class="form-label">
                  Units
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="Units"
                  placeholder="Enter required units"
                  min="0"
                  max="99"
                />
              </section>
              <section class="mb-3">
                <label for="urgency" class="form-label">
                  Urgency
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Immediate
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Within 24 Hours
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Within 3 Days
                  </label>
                </div>
                {/* </select> */}
              </section>
              <section class="mb-3">
                <label for="distance" class="form-label">
                  Distance
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Within 5 km
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Within 10 km
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    More than 10 km
                  </label>
                </div>
              </section>
              {/* </select> */}
            </form>
          </section>

          <div class="search col-10">
            {/* <!-- Navigation Tabs --> */}
            <ul
              class="nav nav-tabs justify-content-center d-flex align-items-center"
              id="searchTabs"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="state-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#states"
                  type="button"
                  role="tab"
                  aria-controls="states"
                  aria-selected="true"
                >
                  States
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="cuisines-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cuisines"
                  type="button"
                  role="tab"
                  aria-controls="city"
                  aria-selected="false"
                >
                  City
                </button>
              </li>
              <li class="nav-iStem" role="presentation">
                <button
                  class="nav-link"
                  id="dishes-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dishes"
                  type="button"
                  role="tab"
                  aria-controls="pincode"
                  aria-selected="false"
                >
                  PinCode
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="locations-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#locations"
                  type="button"
                  role="tab"
                  aria-controls="locations"
                  aria-selected="false"
                >
                  Hospital Name
                </button>
              </li>
            </ul>

            {/* <!-- Tab Content --> */}
            <div class="tab-content main-content">
              {/* <!-- States Tab --> */}
              <div
                class="tab-pane fade show active"
                id="states"
                role="tabpanel"
                aria-labelledby="state-tab"
              >
                <div class="search-bar">
                  <label for="State" class="form-label"></label>
                  <select class="form-select" id="State">
                    <option value="" disabled selected>
                      Select your State...
                    </option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Maharashtra</option>
                    <option>Madhya Pradesh</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Tripura</option>
                    <option>Telangana</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                  <button class="button">Next</button>
                </div>
              </div>

              {/* <!-- Cuisines Tab --> */}
              <div
                class="tab-pane fade"
                id="cuisines"
                role="tabpanel"
                aria-labelledby="cuisines-tab"
              >
                <div class="search-bar">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter City..."
                  />
                  <button class="button">Next</button>
                </div>
              </div>

              {/* <!-- Dishes Tab --> */}
              <div
                class="tab-pane fade"
                id="dishes"
                role="tabpanel"
                aria-labelledby="dishes-tab"
              >
                <div class="search-bar">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your PinCode..."
                  />
                  <button class="button">Next</button>
                </div>
              </div>

              {/* <!-- Locations Tab --> */}
              <div
                class="tab-pane fade"
                id="locations"
                role="tabpanel"
                aria-labelledby="locations-tab"
              >
                <div class="search-bar">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hospital Name..."
                  />
                  <button class="button">Search</button>
                </div>
              </div>
            </div>

            <section class="quick-search row ">
              <section class="col-12">
                <h5 class="text-danger">Nearby Blood Banks</h5>
                <p>Located blood banks near your location.</p>
                <section class="Quick-search-item-lists flex-wrap justify-content-between">
                  <section class="Quick-search-item d-flex shadow-sm">
                    {/* <!--Quick search image--> */}
                    <section class="Quick-search-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX_M4bAMCG5iwSEKQgb-ABcKXbGohKNPAqA&s"
                        alt=""
                      />
                    </section>
                    {/* <!--Quick search text--> */}
                    <section class="Quick-search-content p-3">
                      <p class="h5 text-danger">Arpan Blood Centre</p>
                      <p class="text-secondary">Tilak Rd, Nashik Open 24hrs</p>
                    </section>
                  </section>

                  <section class="Quick-search-item d-flex shadow-sm">
                    {/* <!--Quick search image--> */}
                    <section class="Quick-search-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX_M4bAMCG5iwSEKQgb-ABcKXbGohKNPAqA&s"
                        alt=""
                      />
                    </section>
                    {/* <!--Quick search text--> */}
                    <section class="Quick-search-content p-3">
                      <p class="h5 text-danger">LifeSaver Blood Bank</p>
                      <p class="text-secondary">123 Main Street, Springfield</p>
                    </section>
                  </section>
                  <section class="Quick-search-item d-flex shadow-sm">
                    {/* <!--Quick search image--> */}
                    <section class="Quick-search-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX_M4bAMCG5iwSEKQgb-ABcKXbGohKNPAqA&s"
                        alt=""
                      />
                    </section>
                    {/* <!--Quick search text--> */}
                    <section class="Quick-search-content p-3">
                      <p class="h5 text-danger">LifeSaver Blood Bank</p>
                      <p class="text-secondary">123 Main Street, Springfield</p>
                    </section>
                  </section>
                  <section class="Quick-search-item d-flex shadow-sm">
                    {/* <!--Quick search image--> */}
                    <section class="Quick-search-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX_M4bAMCG5iwSEKQgb-ABcKXbGohKNPAqA&s"
                        alt=""
                      />
                    </section>
                    {/* <!--Quick search text--> */}
                    <section class="Quick-search-content p-3">
                      <p class="h5 text-danger">LifeSaver Blood Bank</p>
                      <p class="text-secondary">123 Main Street, Springfield</p>
                    </section>
                  </section>
                  <section class="Quick-search-item d-flex shadow-sm">
                    {/* <!--Quick search image--> */}
                    <section class="Quick-search-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX_M4bAMCG5iwSEKQgb-ABcKXbGohKNPAqA&s"
                        alt=""
                      />
                    </section>
                    {/* <!--Quick search text--> */}
                    <section class="Quick-search-content p-3">
                      <p class="h5 text-danger">HealthCare Blood Bank</p>
                      <p class="text-secondary">789 Oak Street, Springfield</p>
                    </section>
                  </section>
                  <section class="Quick-search-item d-flex shadow-sm">
                    {/* <!--Quick search image--> */}
                    <section class="Quick-search-image" />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX_M4bAMCG5iwSEKQgb-ABcKXbGohKNPAqA&s"
                      alt=""
                    />
                  </section>
                  {/* <!--Quick search text--> */}
                  <section class="Quick-search-content p-3">
                    <p class="h5 text-danger">Red Cross Center</p>
                    <p class="text-secondary">456 Elm Street, Springfield</p>
                  </section>
                </section>
              </section>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientDashboard;

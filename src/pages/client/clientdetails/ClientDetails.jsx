import "./clientdetails.css";

const ClientDetails = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center gap-2 client-search ">
        <input
          type="search"
          placeholder="Search Client Name "
          className="w-25 border-2 border-danger rounded-2"
        />
        <button className="p-1 text-white bg-danger border-danger search-button rounded-2">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </section>

      <section className="client-details  m-4  ">
        <table className="table table-bordered table-hover ">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Client Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Hospital Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2">
              <th className="border-2" scope="row">
                1
              </th>
              <td className="border-2">Mark</td>
              <td className="border-2">@mdo</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
            <tr className="border-2">
              <th className="border-2" scope="row">
                2
              </th>
              <td className="border-2">Jacob</td>
              <td className="border-2">@fat</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                3
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                4
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                5
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                6
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                7
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                8
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                9
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                10
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                11
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
            <tr className="border-2">
              <th className="border-2" scope="row">
                12
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>

            <tr className="border-2">
              <th className="border-2" scope="row">
                12
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
            <tr className="border-2">
              <th className="border-2" scope="row">
                12
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
            <tr className="border-2">
              <th className="border-2" scope="row">
                12
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
            <tr className="border-2">
              <th className="border-2" scope="row">
                12
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
            <tr className="border-2">
              <th className="border-2" scope="row">
                12
              </th>
              <td className="border-2">Larry the Bird</td>
              <td className="border-2">@twitter</td>
              <td className="border-2">+918888</td>
              <td className="border-2">Lilavati</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ClientDetails;

// import React from 'react'
// import "./Receipt.css"
// // import { useReactToPrint } from "react-to-print";

// const Receipt = () => {
//   return (
//     <>
    
//     <section className="d-flex justify-content-center mt-2">
//     <section className="receipt-container">
//       {/* <!-- Header --> */}
//       <div className="receipt-header">
//         <h1>Blood Bank Receipt</h1>
//       </div>
//       {/* <!-- Body --> */}
//       <div className="receipt-body">
//         {/* <!-- Payment Details --> */}
//         <div className="receipt-section">
//           <h4 className="text-danger pt-2">Payment Details:</h4>
//           <table className="table table-group-divider">
//             <tbody>
//               <tr>
//                 <td className="receiptTable d-flex justify-content-between"><strong>Receipt ID:</strong>AO35246-79860</td>
//               </tr>
//               <tr>
//                 <td className="receiptTable d-flex justify-content-between"><strong>Date of Payment:</strong>22nd December 2024</td>
//               </tr>
//               <tr>
//                 <td className="receiptTable d-flex justify-content-between"><strong>Amount Paid:</strong>Rs.1500</td>
//               </tr>
//               <tr>
//                 <td className="receiptTable d-flex justify-content-between"><strong>Payment Method:</strong>Credit Card</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* <!-- Blood Bank Details --> */}
//         <div className="receipt-section">
//           <h4 className="text-danger">Blood Bank Details:</h4>
//           <table className="table table-group-divider">
//             <tbody>
//               <tr>
//                 <td className="recieptTable d-flex justify-content-between"><strong>Blood Bank Name:</strong>LifeSaver Blood Bank</td>
//               </tr>
//               <tr>
//                 <td className="recieptTable d-flex justify-content-between"><strong>Contact:</strong>+91 123 456 7890</td>
//               </tr>
//               <tr>
//                 <td className="recieptTable d-flex justify-content-between"><strong>Address:</strong>123 Main Street, Nashik, Maharashtra</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* <!-- Vendor Details --> */}
//         <div className="receipt-section">
//           <h4 className="text-danger">Vendor Details:</h4>
//           <table className="table table-group-divider">
//             <tbody>
//               <tr>
//                 <td className="recieptTable d-flex justify-content-between"><strong>Vendor Name:</strong>HealthCorp Supplies</td>
//               </tr>
//               <tr>
//                 <td className="recieptTable d-flex justify-content-between"><strong>Vendor Contact:</strong>+91 123 456 7890</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* <!-- Receipt Footer --> */}
//       <section className="receipt-footer">
//         <pre className="align-items-center">
//           Thank you for your support!
//           Together, we save lives.<i className="fa fa-heartbeat" aria-hidden="true"></i>
//         </pre>
//       </section>
//     </section>
//   </section>
  
//   </>
//   )
// }

// export default Receipt



import React from "react";
import "./Receipt.css";

const Receipt = () => {
  return (
    <>
      <section className="d-flex justify-content-center mt-2">
        <section className="receipt-container">
          {/* Header */}
          <div className="receipt-header">
            <h1>Blood Bank Receipt</h1>
          </div>

          {/* Body */}
          <div className="receipt-body">
            {/* Payment Details */}
            <div className="receipt-section">
              <h4 className="text-danger pt-2">Payment Details:</h4>
              <table className="table table-group-divider">
                <tbody>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Receipt ID:</strong> AO35246-79860
                    </td>
                  </tr>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Date of Payment:</strong> 22nd December 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Amount Paid:</strong> Rs.1500
                    </td>
                  </tr>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Payment Method:</strong> Credit Card
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Blood Bank Details */}
            <div className="receipt-section">
              <h4 className="text-danger">Blood Bank Details:</h4>
              <table className="table table-group-divider">
                <tbody>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Blood Bank Name:</strong> LifeSaver Blood Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Contact:</strong> +91 123 456 7890
                    </td>
                  </tr>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Address:</strong> 123 Main Street, Nashik, Maharashtra
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Vendor Details */}
            <div className="receipt-section">
              <h4 className="text-danger">Vendor Details:</h4>
              <table className="table table-group-divider">
                <tbody>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Vendor Name:</strong> HealthCorp Supplies
                    </td>
                  </tr>
                  <tr>
                    <td className="receiptTable d-flex justify-content-between">
                      <strong>Vendor Contact:</strong> +91 123 456 7890
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Receipt Footer */}
          <section className="receipt-footer">
            <pre className="align-items-center">
              Thank you for your support!
              Together, we save lives.{" "}
              <i className="fa fa-heartbeat" aria-hidden="true"></i>
            </pre>
          </section>
        </section>
      </section>
    </>
  );
};

export default Receipt;

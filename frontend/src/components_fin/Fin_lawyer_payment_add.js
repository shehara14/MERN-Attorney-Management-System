
import React from 'react';
import "./FinLawyerPaymentAdd.css";

function Fin_lawyer_payment_add (props) {
  const {_id, RequestId, RequestDate, LawyerId, ServiceID, Amount, PaymentMethod} = props.user;

  return (
   <div>
    <br></br>
    <br></br>
    
    <div className="table-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  <table className="payment-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>RequestID</th>
        <th>Request Date</th>
        <th>Lawyer ID</th>
        <th>Service ID</th>
        <th>Amount RS.</th>
        <th>Payment Method</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{_id}</td>
        <td>{RequestId}</td>
        <td>{RequestDate}</td>
        <td>{LawyerId}</td>
        <td>{ServiceID}</td>
        <td>{Amount}</td>
        <td>{PaymentMethod}</td>
        <td>
          <button className="delete-button">Delete</button>
          <button className="update-button">Update</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div> 

  );
}

export default Fin_lawyer_payment_add;

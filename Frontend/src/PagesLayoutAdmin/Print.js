import React from "react";
import "../foam.css";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  // const styling = useStyles();
  const { data } = props;

  return (
    <div ref={ref} style={{ display: "flex" }}>
      <div>
        <table>
          <th>
            <h2 style={{ align: "center" }}>Talha School System</h2>
            <h4>36-C,Korongi No 5, Phone No. 021-35047744</h4>
            <h4 style={{ paddingBottom: "20px" }}>Karachi</h4>
          </th>
          <tr>
            <th style={{ paddingBottom: "20px" }}>School's Copy</th>
          </tr>
          {data
            ? data.map((obj) => (
                <tr>
                  <tr>
                    <td>Challan Number:</td>
                    <td>{obj.Challan_number}</td>
                  </tr>
                  <tr>
                    <td>Student ID:</td>
                    <td>{obj.Student_id}</td>
                  </tr>
                  <tr>
                    <td>Student Name:</td>
                    <td>{obj.Student_name}</td>
                  </tr>
                  <tr>
                    <td>Father Name:</td>
                    <td>{obj.F_name}</td>
                  </tr>
                  <tr>
                    <td>Class:</td>
                    <td>{obj.Class}</td>
                  </tr>
                  <tr>
                    <td>Issue Date:</td>
                    <td>{obj.Issue_date}</td>
                  </tr>
                  <tr>
                    <td>Due Date:</td>
                    <td>{obj.Due_date}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td style={{ paddingBottom: "40px" }}></td>
                  </tr>
                  <tr>
                    <td>Anual Charges:</td>
                    <td>{obj.Anual_charge}</td>
                  </tr>
                  <tr>
                    <td>Addmission Fees:</td>
                    <td>{obj.Addmision_fee}</td>
                  </tr>
                  <tr>
                    <td>Tution Fees:</td>
                    <td>{obj.Tution_fee}</td>
                  </tr>
                  <tr>
                    <td>Extra Fees:</td>
                    <td>{obj.Extra_fee}</td>
                  </tr>
                  <tr>
                    <td>Lab Fees:</td>
                    <td>{obj.Lab_fee}</td>
                  </tr>
                  <tr>
                    <td>Exam Fees:</td>
                    <td>{obj.Exam_fee}</td>
                  </tr>
                  <tr>
                    <td>Previous amount:</td>
                    <td>
                      {obj.TotalAmount !== 0
                        ? obj.TotalAmount -
                          obj.Addmision_fee -
                          obj.Anual_charge -
                          obj.Exam_fee -
                          obj.Extra_fee -
                          obj.Tution_fee -
                          obj.Lab_fee
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Total amount:</td>
                    <td>{obj.TotalAmount}</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "40px" }}></td>
                  </tr>
                  <tr>
                    <td>Deposit By : </td>
                    <td>___________________</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "40px" }}></td>
                  </tr>
                  <tr>
                    <td>Recieved By : </td>
                    <td>___________________</td>
                  </tr>
                </tr>
              ))
            : []}
        </table>
      </div>
      {/* <div style={{ padding: "10%" }}> </div> */}
      <div>
        <table>
          <th>
            <h2 style={{ align: "center" }}>Talha School System</h2>
            <h4>36-C,Korongi No 5, Phone No. 021-35047744</h4>
            <h4 style={{ paddingBottom: "20px" }}>Karachi</h4>
          </th>
          <tr>
            <th style={{ paddingBottom: "20px" }}>Depositor's Copy</th>
          </tr>
          {data
            ? data.map((obj) => (
                <tr>
                  <tr>
                    <td>Challan Number:</td>
                    <td>{obj.Challan_number}</td>
                  </tr>
                  <tr>
                    <td>Student ID:</td>
                    <td>{obj.Student_id}</td>
                  </tr>
                  <tr>
                    <td>Student Name:</td>
                    <td>{obj.Student_name}</td>
                  </tr>
                  <tr>
                    <td>Father Name:</td>
                    <td>{obj.F_name}</td>
                  </tr>
                  <tr>
                    <td>Class:</td>
                    <td>{obj.Class}</td>
                  </tr>
                  <tr>
                    <td>Issue Date:</td>
                    <td>{obj.Issue_date}</td>
                  </tr>
                  <tr>
                    <td>Due Date:</td>
                    <td>{obj.Due_date}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td style={{ paddingBottom: "40px" }}></td>
                  </tr>
                  <tr>
                    <td>Anual Charges:</td>
                    <td>{obj.Anual_charge}</td>
                  </tr>
                  <tr>
                    <td>Addmission Fees:</td>
                    <td>{obj.Addmision_fee}</td>
                  </tr>
                  <tr>
                    <td>Tution Fees:</td>
                    <td>{obj.Tution_fee}</td>
                  </tr>
                  <tr>
                    <td>Extra Fees:</td>
                    <td>{obj.Extra_fee}</td>
                  </tr>
                  <tr>
                    <td>Lab Fees:</td>
                    <td>{obj.Lab_fee}</td>
                  </tr>
                  <tr>
                    <td>Exam Fees:</td>
                    <td>{obj.Exam_fee}</td>
                  </tr>
                  <tr>
                    <td>Previous amount:</td>
                    <td>
                      {obj.TotalAmount !== 0
                        ? obj.TotalAmount -
                          obj.Addmision_fee -
                          obj.Anual_charge -
                          obj.Exam_fee -
                          obj.Extra_fee -
                          obj.Tution_fee -
                          obj.Lab_fee
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Total amount:</td>
                    <td>{obj.TotalAmount}</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "40px" }}></td>
                  </tr>
                  <tr>
                    <td>Deposit By : </td>
                    <td>___________________</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "40px" }}></td>
                  </tr>
                  <tr>
                    <td>Recieved By : </td>
                    <td>___________________</td>
                  </tr>
                </tr>
              ))
            : []}
        </table>
      </div>
    </div>
  );
});

import React, { useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./Print";
import { useRef, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { Paper } from "@material-ui/core";
// import "../foam.css";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fdfdff",
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
  },
  content: { padding: theme.spacing(4), margin: theme.spacing(3) },
  table: {
    border: "1px solid white",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid white",
    borderCollapse: "collapse",
    backgroundColor: "#96D4D4",
  },
  td: {
    border: "1px solid white",
    borderCollapse: "collapse",
    backgroundColor: "#96D4D4",
  },
}));

export default function PrintTable() {
  const styling = useStyles();
  const [data, setData] = useState([]);
  const [challanData, setchallanData] = useState([]);
  const [classes, setClass] = useState();
  const [date, setDate] = useState();
  const [challan, setChallan] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getDetails = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/admin/getFeeDetailsByClass",
      { Class: classes, Date: date },
      {
        withCredentials: true,
      }
    );

    setData(response.data.result);
  };
  useEffect(() => {
    if (challan !== "") handlePrint();
  }, [challan && challanData]);
  return (
    <Paper elevation={0} square className={styling.root}>
      <h3>Enter Class:</h3>
      <select
        style={{ width: "200px" }}
        onChange={(e) => {
          setClass(e.target.value);
        }}
      >
        <option value="nursery"> Nursery</option>
        <option value="kg1"> KG-1</option>
        <option value="kg2">KG-2</option>
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
        <option value="5"> 5</option>
        <option value="6"> 6</option>
        <option value="7"> 7</option>
        <option value="8"> 8</option>
        <option value="9"> 9</option>
        <option value="10"> 10</option>
      </select>
      <h3>Enter Date:</h3>
      <input
        type="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <br />
      <button
        onClick={getDetails}
        style={{ padding: "5px", marginTop: "20px", marginBottom: "20px" }}
      >
        Submit
      </button>
      <table className={styling.table}>
        <tr>
          <th className={styling.th}>Challan Number</th>
          <th className={styling.th}>Student ID</th>
          <th className={styling.th}>Class</th>
          <th className={styling.th}>Issue Date</th>
          <th className={styling.th}>Due Date</th>
          <th className={styling.th}>Anual Charge</th>
          <th className={styling.th}>Admission Fee</th>
          <th className={styling.th}>Tution Fee</th>
          <th className={styling.th}>Extra Fee</th>
          <th className={styling.th}>Lab Fee</th>
          <th className={styling.th}>Exam Fee</th>
          <th className={styling.th}>Total Fee</th>
          <th className={styling.th}>Print</th>
        </tr>
        {data
          ? data.map((obj) => (
              <tr>
                <td>{obj.Challan_number}</td>
                <td>{obj.Student_id}</td>
                <td>{obj.Class}</td>
                <td>{obj.Issue_date}</td>
                <td>{obj.Due_date}</td>
                <td>{obj.Anual_charge}</td>
                <td>{obj.Addmision_fee}</td>
                <td>{obj.Tution_fee}</td>
                <td>{obj.Extra_fee}</td>
                <td>{obj.Lab_fee}</td>
                <td>{obj.Exam_fee}</td>
                <td>{obj.TotalAmount}</td>
                <td>
                  <button
                    value={obj.Challan_number}
                    onClick={(e) => {
                      setChallan(e.target.value);
                      setchallanData([obj]);
                    }}
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))
          : []}
      </table>
      {/* <h1>{challan}</h1> */}
      {challan !== "" ? (
        <ComponentToPrint ref={componentRef} id={challan} data={challanData} />
      ) : (
        "No Challan Selected"
      )}
    </Paper>
  );
}

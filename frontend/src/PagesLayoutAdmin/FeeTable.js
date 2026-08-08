import React from "react";
import { CssBaseline } from "@material-ui/core";
import ManageFeeTable from "../AdminFoam/ManageFeeTable";
export default function StudentTable() {
  const columns = [
    { title: "Challan Number", field: "Challan_number", editable: true },
    { title: "Student ID", field: "Student_id", editable: true },
    { title: "Class", field: "Class", editable: true },
    { title: "Issue Date", field: "Issue_date", editable: true },
    { title: "Due Date", field: "Due_date", editable: true },
    { title: "Anual Charges", field: "Anual_charge" },
    { title: "Admission Fees", field: "Addmision_fee" },
    { title: "Tution Fees", field: "Tution_fee" },
    { title: "Extra Fees", field: "Extra_fee" },
    { title: "Exam Fees", field: "Exam_fee" },
    { title: "Lab Fees", field: "Lab_fee" },
    { title: "Total Fees", field: "TotalAmount", editable: true },
    { title: "Fee Status", field: "Feestatus", editable: true },
    { title: "Received By", field: "recievedBy" },
  ];

  return (
    <>
      <ManageFeeTable columns={columns} />

      <CssBaseline />
    </>
  );
}

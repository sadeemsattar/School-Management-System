import React from "react";
import { CssBaseline } from "@material-ui/core";
import ManageStudentTable from "../AdminFoam/ManageStudentTable";
export default function StudentTable() {
  const columns = [
    { title: "Student Name", field: "Student_name" },
    { title: "ID", field: "Student_id", editable: false },
    { title: "Class", field: "Class" },
    { title: "Gender", field: "gender", editable: false },
    { title: "Age", field: "Age" },
    { title: "B-Form", field: "B_form" },
    { title: "Religion", field: "Religion" },
    { title: "Nationality", field: "Nationality" },
    { title: "DOB", field: "DOB" },
    { title: "Place Of Brith", field: "POB" },
    { title: "Address", field: "Address" },
    { title: "Date Of Addmission", field: "DOA" },
    { title: "Father Name", field: "F_name" },
    { title: "Father Contact", field: "F_contact" },
    { title: "Father Occupation", field: "F_occupation" },
    {
      title: "Father Office Address",
      field: "F_office_address",
    },
    { title: "Mother Name", field: "M_name" },
    { title: "Mother Contact", field: "M_contact" },
    { title: "Guardian Name", field: "G_name" },
    { title: "Guardian Contact", field: "G_contact" },
    { title: "Guardian Relation", field: "G_relation" },
  ];

  return (
    <>
      <ManageStudentTable columns={columns} />

      <CssBaseline />
    </>
  );
}

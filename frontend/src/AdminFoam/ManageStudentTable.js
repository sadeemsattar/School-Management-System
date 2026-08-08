import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fdfdff",
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
  },
  content: { padding: theme.spacing(4), margin: theme.spacing(3) },
}));
const showMessage = (msg) => {
  if (msg === "Add") toast.success("Data Added Succesful!");
  else if (msg === "Delete") toast.success("Data Delete SUccesful!");
  else if (msg === "Update") toast.success("Data Update Succesful!");
  else toast.error("Error In Performing Operation");
};

export default function ManageStudentTable(props) {
  const { columns } = props;
  const classes = useStyles();
  // ---------------------------------------
  const [tableData, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/admin/getStudent",
      {
        withCredentials: true,
      }
    );
    setData(response.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Paper elevation={0} square className={classes.root}>
      <Typography variant="h6" component="div"></Typography>
      <MaterialTable
        title="Manage Student Table"
        data={tableData}
        columns={columns}
        options={{
          // filtering: true
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        editable={{
          //   onRowAdd: (newRow) =>
          //     new Promise((resolve, reject) => {
          //       // const updateRows = [...tableData, newRow];
          //       const response = axios.post(
          //         "http://localhost:5000/admin/addhr",
          //         {
          //           firstName: newRow.FIRST_NAME,
          //           lastName: newRow.LAST_NAME,
          //           email: newRow.EMAIL,
          //           phoneNumber: newRow.PHONE_NUMBER,
          //           dob: newRow.DOB,
          //           hireDate: newRow.HIRE_DATE,
          //           address: newRow.ADDRESS,
          //           cnic: newRow.CNIC,
          //         },
          //         { withCredentials: true }
          //       );
          //       setTimeout(() => {
          //         //setData(updateRows);
          //         getData();
          //         resolve();
          //         showMessage("Add");
          //       }, 3000);
          //     }),
          onRowUpdate: (newValueRow, oldValueRow) =>
            new Promise((resolve, reject) => {
              // const rowIndex = oldValueRow.tableData.id;
              // const updateRows = [...tableData];
              // updateRows[rowIndex] = newValueRow;
              axios.put(
                "http://localhost:5000/api/v1/admin/updateStudent",
                {
                  name: newValueRow.Student_name,
                  ID: oldValueRow.Student_id,
                  classes: newValueRow.Class,
                  gender: oldValueRow.gender,
                  age: newValueRow.Age,
                  bform: newValueRow.B_form,
                  religion: newValueRow.Religion,
                  nationality: newValueRow.Nationality,
                  DOB: newValueRow.DOB,
                  POB: newValueRow.POB,
                  address: newValueRow.Address,
                  DOA: newValueRow.DOA,
                  FatherName: newValueRow.F_name,
                  FatherContact: newValueRow.F_contact,
                  FatherOccupation: newValueRow.F_occupation,
                  FatherOfficeAddress: newValueRow.F_office_address,
                  FatherNationality: newValueRow.F_nationality,
                  MotherName: newValueRow.M_name,
                  MotherContact: newValueRow.M_contact,
                  GaudrianName: newValueRow.G_name,
                  GuardianContact: newValueRow.G_contact,
                  GuardianRelationship: newValueRow.G_relation,
                },

                { withCredentials: true }
              );
              setTimeout(() => {
                // setData(updateRows);
                getData();
                resolve();
                showMessage("Update");
              }, 3000);
            }),

          //   onRowDelete: (selectedRow) =>
          //     new Promise((resolve, reject) => {
          //       // const rowIndex = selectedRow.tableData.id;
          //       // const updateRows = [...tableData];
          //       // updateRows.splice(rowIndex, 1);
          //       axios.delete("http://localhost:5000/admin/addhr", {
          //         data: { hrId: selectedRow.HR_ID },
          //         withCredentials: true,
          //       });
          //       setTimeout(() => {
          //         // setData(updateRows);
          //         getData();
          //         resolve();
          //         showMessage("Delete");
          //       }, 3000);
          //     }),
        }}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </Paper>
  );
}

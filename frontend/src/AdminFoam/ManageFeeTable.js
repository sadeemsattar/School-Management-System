import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { toast } from "react-toastify";
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
export default function ManageFeeTable(props) {
  const { columns } = props;
  const classes = useStyles();
  // ---------------------------------------
  const [tableData, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/admin/getFeeDetails",
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
        title="Manage Fee Table"
        data={tableData}
        columns={columns}
        options={{
          filtering: true,
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        editable={{
          onRowUpdate: (newValueRow, oldValueRow) =>
            new Promise((resolve, reject) => {
              var Feestatus = oldValueRow.Feestatus;
              var Total = oldValueRow.TotalAmount;
              if (newValueRow.Anual_charge !== oldValueRow.Anual_charge) {
                if (newValueRow.Anual_charge > oldValueRow.Anual_charge) {
                  Total =
                    Total +
                    (newValueRow.Anual_charge - oldValueRow.Anual_charge);
                } else {
                  Total =
                    Total -
                    (oldValueRow.Anual_charge - newValueRow.Anual_charge);
                }
              }
              if (newValueRow.Addmision_fee !== oldValueRow.Addmision_fee) {
                if (newValueRow.Addmision_fee > oldValueRow.Addmision_fee) {
                  Total =
                    Total +
                    (oldValueRow.Addmision_fee - newValueRow.Addmision_fee);
                } else {
                  Total =
                    Total -
                    (oldValueRow.Addmision_fee - newValueRow.Addmision_fee);
                }
              }
              if (newValueRow.Tution_fee !== oldValueRow.Tution_fee) {
                if (newValueRow.Tution_fee > oldValueRow.Tution_fee) {
                  Total =
                    Total + (newValueRow.Tution_fee - oldValueRow.Tution_fee);
                } else {
                  Total =
                    Total - (oldValueRow.Tution_fee - newValueRow.Tution_fee);
                }
              }
              if (newValueRow.Extra_fee !== oldValueRow.Extra_fee) {
                if (newValueRow.Extra_fee > oldValueRow.Extra_fee) {
                  Total =
                    Total + (newValueRow.Extra_fee - oldValueRow.Extra_fee);
                } else {
                  Total =
                    Total - (oldValueRow.Extra_fee - newValueRow.Extra_fee);
                }
              }
              if (newValueRow.Lab_fee !== oldValueRow.Lab_fee) {
                if (newValueRow.Lab_fee > oldValueRow.Lab_fee) {
                  Total = Total + (newValueRow.Lab_fee - oldValueRow.Lab_fee);
                } else {
                  Total = Total - (oldValueRow.Lab_fee - newValueRow.Lab_fee);
                }
              }
              if (newValueRow.Exam_fee !== oldValueRow.Exam_fee) {
                if (newValueRow.Exam_fee > oldValueRow.Exam_fee) {
                  Total = Total + (newValueRow.Exam_fee - oldValueRow.Exam_fee);
                } else {
                  Total = Total - (oldValueRow.Exam_fee - newValueRow.Exam_fee);
                }
              }
              if (newValueRow.recievedBy !== "") {
                Total = 0;
                Feestatus = 1;
              }
              axios.put(
                "http://localhost:5000/api/v1/admin/updateFeeDetails",
                {
                  Challan_number: oldValueRow.Challan_number,
                  Student_id: oldValueRow.Challan_number,
                  Class: oldValueRow.Class,
                  Issue_date: oldValueRow.Issue_date,
                  Due_date: oldValueRow.Due_date,
                  Anual_charge: parseInt(newValueRow.Anual_charge),
                  Addmision_fee: parseInt(newValueRow.Addmision_fee),
                  Tution_fee: parseInt(newValueRow.Tution_fee),
                  Extra_fee: parseInt(newValueRow.Extra_fee),
                  Lab_fee: parseInt(newValueRow.Lab_fee),
                  Exam_fee: parseInt(newValueRow.Exam_fee),
                  TotalAmount: Total,
                  Feestatus: Feestatus,
                  recievedBy: newValueRow.recievedBy,
                },

                { withCredentials: true }
              );
              setTimeout(() => {
                getData();
                resolve();
                showMessage("Update");
              }, 3000);
            }),
        }}
      />
    </Paper>
  );
}

import "../foam.css";
import React, { useState } from "react";
import axios from "axios";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fdfdff",
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
  },
  content: { padding: theme.spacing(4), margin: theme.spacing(3) },
}));
export default function AddStudent() {
  const styling = useStyles();
  const [classes, setClass] = useState();
  const [dueDate, setDueDate] = useState();
  const [issueDate, setIssueDate] = useState();
  const [anualFee, setAnualCharges] = useState();
  const [admissionFee, setAdmissionFee] = useState();
  const [extraFee, setExtraFee] = useState();
  const [labFee, setLabFee] = useState();
  const [tutionFee, setTutionFee] = useState();
  const [examFee, setExamFee] = useState();
  const [msg, setMsg] = useState();

  const addFeeInfo = async (e) => {
    try {
      await axios.post(
        "http://localhost:5000/api/v1/admin/addFeeInfo",
        {
          classes: classes,
          issue_date: issueDate,
          due_date: dueDate,
          anualFee: anualFee,
          admissionFee: admissionFee,
          extraFee: extraFee,
          labFee: labFee,
          tutionFee: tutionFee,
          examFee: examFee,
        },
        { withCredentials: true }
      );
      setMsg("Add Successfull");
    } catch (err) {
      if (err.response === 400);
      {
        setMsg("Error");
      }
    }
  };

  return (
    <>
      <Paper elevation={0} square className={styling.root} align="center">
        <form classes={styling.content}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            style={{ margin: "30px" }}
          >
            Add Fee Detail
          </Typography>
          <table>
            <tr>
              <td>Class :</td>
              <td>
                <select
                  style={{ width: "200px" }}
                  onChange={(e) => {
                    setClass(e.target.value);
                  }}
                >
                  <option value="nursery"> Nursery</option>
                  <option value="kg1"> KG-1</option>
                  <option value="kg2"> KG-2</option>
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
              </td>
            </tr>
            <tr>
              <td>Issue Date :</td>
              <td>
                <input
                  type="date"
                  required
                  onChange={(e) => {
                    setIssueDate(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Due Date :</td>
              <td>
                <input
                  type="date"
                  required
                  onChange={(e) => {
                    setDueDate(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Anual Charges :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setAnualCharges(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td> Admission Fees :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setAdmissionFee(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Tution Fee :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setTutionFee(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Extra Fee :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setExtraFee(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Exam Fee:</td>
              <td>
                <input
                  type="number"
                  onChange={(e) => {
                    setExamFee(e.target.value);
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>Lab Fee : </td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setLabFee(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value="Submit"
                  className="btnSuccess"
                  onClick={addFeeInfo}
                />
              </td>
            </tr>
          </table>
          <h3>{msg}</h3>
        </form>
      </Paper>
    </>
  );
}

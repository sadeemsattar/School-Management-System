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
  const [name, setName] = useState();
  const [classes, setClass] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [bform, setBform] = useState();
  const [religion, setReligion] = useState();
  const [nationality, setNationality] = useState();
  const [DOB, setDOB] = useState();
  const [POB, setPOB] = useState();
  const [address, setAddress] = useState();
  const [DOA, setDOA] = useState();
  const [FatherName, setFName] = useState();
  const [FatherContact, setFContact] = useState();
  const [FatherOccupation, setFOccupation] = useState();
  const [FatherOfficeAddress, setFOfficeAddress] = useState();
  const [FatherNationality, setFNationality] = useState();
  const [MotherName, setMName] = useState();
  const [MotherContact, setMContact] = useState();
  const [GaudrianName, setGName] = useState();
  const [GuardianContact, setGContact] = useState();
  const [GuardianRelationship, setGRelationship] = useState();
  const [msg, setMsg] = useState();

  const addStudentInfo = async (e) => {
    try {
      await axios.post(
        "http://localhost:5000/api/v1/admin/addStudentInfo",
        {
          name: name,
          classes: classes,
          gender: gender,
          age: age,
          bform: bform,
          religion: religion,
          nationality: nationality,
          DOB: DOB,
          POB: POB,
          address: address,
          DOA: DOA,
          FatherName: FatherName,
          FatherContact: FatherContact,
          FatherOccupation: FatherOccupation,
          FatherOfficeAddress: FatherOfficeAddress,
          FatherNationality: FatherNationality,
          MotherName: MotherName,
          MotherContact: MotherContact,
          GaudrianName: GaudrianName,
          GuardianContact: GuardianContact,
          GuardianRelationship: GuardianRelationship,
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
            Add Student
          </Typography>
          <table>
            <tr>
              <td>Student Name :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </td>
            </tr>
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
              <td>Gender :</td>
              <td>
                <select
                  style={{ width: "200px" }}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="Male"> Male</option>
                  <option value="Female"> Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Age :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>B-Form :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setBform(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Religon :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setReligion(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Nationality :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Date Of Birth:</td>
              <td>
                <input
                  type="date"
                  required
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Place Of Birth :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setPOB(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Address :</td>
              <td>
                <textarea
                  type="text"
                  required
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Date Of Admission :</td>
              <td>
                <input
                  type="date"
                  required
                  onChange={(e) => {
                    setDOA(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td> Father Name:</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Father Contact :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setFContact(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Father Occupation :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFOccupation(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Father Office Address :</td>
              <td>
                <textarea
                  type="text"
                  onChange={(e) => {
                    setFOfficeAddress(e.target.value);
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>Father Nationality:</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFNationality(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Mother Name :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setMName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Mother Contact Number :</td>
              <td>
                <input
                  type="number"
                  onChange={(e) => {
                    setMContact(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Gaudrian Name :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setGName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Guardian Contact Number :</td>
              <td>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setGContact(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Guardian Relationship :</td>
              <td>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setGRelationship(e.target.value);
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
                  onClick={addStudentInfo}
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

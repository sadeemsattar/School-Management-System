import "../../foam.css";
import React, { useState } from "react";
import axios from "axios";
import { Paper, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Userpassword, setUserpassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Signin = async (e) => {
    // e.preventDefault();
    // console.log(Username, Userpassword);

    try {
      await axios.post(
        "http://localhost:5000/api/v1/login",
        {
          name: Username,
          password: Userpassword,
          isAdmin: true,
        },
        { withCredentials: true } //important if want to save cookie in browser
      );
      navigate("/admin");
    } catch (err) {
      if (err.response === 401);
      {
        setMsg("Credentials not found. Please try again");
      }
    }
  };

  return (
    <Paper elevation={0} square align="center">
      <foam>
        <Typography
          variant="h2"
          component="div"
          align="center"
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          Student Management System
        </Typography>
        <Typography
          variant="h4"
          component="div"
          align="center"
          style={{ marginBottom: "20px" }}
        >
          Login Form
        </Typography>
        <table>
          <tr>
            <td>User Name :</td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Password :</td>
            <td>
              <input
                type="password"
                onChange={(e) => {
                  setUserpassword(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="submit"
                value="Sign in"
                onClick={() => {
                  setMsg("");
                  Signin();
                }}
                className="btnSuccess"
              />
            </td>
          </tr>
        </table>
        <tr>
          <td>{msg}</td>
        </tr>
      </foam>
    </Paper>
  );
}

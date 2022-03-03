import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Login from "../component/Login/Login";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import AdminDashBoard from "../PagesLayoutAdmin/AdminDashBoard";
import ViewStudent from "../PagesLayoutAdmin/StudentTable";
import AddStudent from "../PagesLayoutAdmin/AddStudent";
import FeeTable from "../PagesLayoutAdmin/FeeTable";
import AddFeeDetail from "../AdminFoam/AddFeeDetail";
import PrintTable from "../PagesLayoutAdmin/PrintTable";

const theme = createTheme({
  palette: {
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "none",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin" element={<AdminDashBoard />}>
            <Route exact path="student-add" element={<AddStudent />} />
            <Route exact path="student-view-update" element={<ViewStudent />} />
            <Route exact path="PrintChallan" element={<PrintTable />} />
            <Route exact path="fees-manage" element={<FeeTable />} />
            <Route exact path="fees-detail" element={<AddFeeDetail />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

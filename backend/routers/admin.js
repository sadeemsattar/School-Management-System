const { query } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../config");
router.get(`/get`, async (req, res) => {
  db.query("select * from adminRegister ", (err, result) => {
    if (err)
      return res
        .status(400)
        .json({ status: "Failed", msg: "No user Availabele" });
    return res.status(200).json({ status: "Success", result });
  });
});

router.put(`/updateStudent`, async (req, res) => {
  const {
    name,
    ID,
    classes,
    age,
    bform,
    religion,
    nationality,
    DOB,
    POB,
    address,
    DOA,
    FatherName,
    FatherContact,
    FatherOccupation,
    FatherOfficeAddress,
    FatherNationality,
    MotherName,
    MotherContact,
    GaudrianName,
    GuardianContact,
    GuardianRelationship,
  } = req.body;
  // console.log(req.body);
  db.query(
    "update studentinfo set Student_name = '" +
      name +
      "',Class='" +
      classes +
      "',Age='" +
      age +
      "',B_form = '" +
      bform +
      "',Religion='" +
      religion +
      "',Nationality='" +
      nationality +
      "',DOB='" +
      DOB +
      "',POB='" +
      POB +
      "',Address='" +
      address +
      "',DOA='" +
      DOA +
      "',F_name='" +
      FatherName +
      "',F_contact='" +
      FatherContact +
      "',F_occupation='" +
      FatherOccupation +
      "',F_office_address='" +
      FatherOfficeAddress +
      "',F_nationality='" +
      FatherNationality +
      "',M_name='" +
      MotherName +
      "',M_contact='" +
      MotherContact +
      "',G_name='" +
      GaudrianName +
      "',G_contact='" +
      GuardianContact +
      "',G_relation='" +
      GuardianRelationship +
      "' where Student_id='" +
      ID +
      "' ",
    (err) => {
      if (err) {
        // console.log(err);
        return res
          .status(400)
          .json({ status: "Failed", msg: "Cannot Update Data" });
      } else {
        return res.status(200).json({ status: "Success", msg: "Update Done" });
      }
    }
  );
});

router.get(`/getStudent`, async (req, res) => {
  db.query(
    "select Student_name,Student_id,gender,Class,Age,B_form,Religion,Nationality,date_format(DOB, '%Y-%m-%d' ) as 'DOB',POB,Address,date_format(DOA, '%Y-%m-%d' ) as 'DOA',F_name,F_contact,F_occupation,F_office_address,F_nationality,M_name,M_contact,G_name,G_contact,G_relation from studentinfo",
    (err, result) => {
      if (err)
        return res
          .status(400)
          .json({ status: "Failed", msg: "No user Availabele" });

      return res.status(200).json({ status: "Success", result });
    }
  );
});
router.get(`/getFeeDetails`, async (req, res) => {
  db.query(
    "select Challan_number,Student_id,Class,date_format(Issue_date, '%Y-%m-%d' ) as 'Issue_date',date_format(Due_date, '%Y-%m-%d' ) as 'Due_date',Anual_charge,Addmision_fee,Tution_fee,Extra_fee,Lab_fee,Exam_fee,TotalAmount,Feestatus,recievedBy  from voucher",
    (err, result) => {
      if (err)
        return res
          .status(400)
          .json({ status: "Failed", msg: "No Challan Availabele" });

      return res.status(200).json({ status: "Success", result });
    }
  );
});
router.post(`/getFeeDetailsByClass`, async (req, res) => {
  const { Class, Date } = req.body;

  db.query(
    "select C.Challan_number,S.Student_name,S.F_name,S.Student_id,S.Class,date_format(C.Issue_date, '%Y-%m-%d' ) as 'Issue_date',date_format(C.Due_date, '%Y-%m-%d' ) as 'Due_date',C.Anual_charge,C.Addmision_fee,C.Tution_fee,C.Extra_fee,C.Lab_fee,C.Exam_fee,C.TotalAmount,C.Feestatus,C.recievedBy  from voucher C ,studentinfo S where S.Student_id = C.Student_id and C.Class = ? and C.Issue_date = ?",
    [Class, Date],
    (err, result) => {
      if (err) {
        return res
          .status(400)
          .json({ status: "Failed", msg: "No Challan Availabele" });
      }
      return res.status(200).json({ status: "Success", result });
    }
  );
});
router.post(`/getChallan`, async (req, res) => {
  const { ChallanID } = req.body;

  db.query(
    "select S.Student_name,S.F_name,S.Student_id,S.Class,date_format(C.Issue_date, '%Y-%m-%d' ) as 'Issue_date',date_format(C.Due_date, '%Y-%m-%d' ) as 'Due_date',C.Anual_charge,C.Addmision_fee,C.Tution_fee,C.Extra_fee,C.Lab_fee,C.Exam_fee,C.TotalAmount,C.Feestatus,C.recievedBy  from voucher C ,studentinfo S where S.Student_id = C.Student_id and C.Challan_number = ?",
    [ChallanID],
    (err, result) => {
      if (err) {
        return res
          .status(400)
          .json({ status: "Failed", msg: "No Challan Availabele" });
      }
      return res.status(200).json({ status: "Success", result });
    }
  );
});
router.put(`/updateFeeDetails`, async (req, res) => {
  const {
    Challan_number,
    Student_id,
    Class,
    Issue_date,
    Due_date,
    Anual_charge,
    Addmision_fee,
    Tution_fee,
    Extra_fee,
    Lab_fee,
    Exam_fee,
    TotalAmount,
    Feestatus,
    recievedBy,
  } = req.body;

  db.query(
    "update voucher set Anual_charge = '" +
      Anual_charge +
      "',Addmision_fee='" +
      Addmision_fee +
      "',Tution_fee='" +
      Tution_fee +
      "',Extra_fee = '" +
      Extra_fee +
      "',Lab_fee='" +
      Lab_fee +
      "',Exam_fee='" +
      Exam_fee +
      "',TotalAmount='" +
      TotalAmount +
      "',Feestatus='" +
      Feestatus +
      "',recievedBy='" +
      recievedBy +
      "' where Challan_number='" +
      Challan_number +
      "' ",
    (err) => {
      if (err) {
        return res
          .status(400)
          .json({ status: "Failed", msg: "Cannot Update Data" });
      } else {
        return res.status(200).json({ status: "Success", msg: "Update Done" });
      }
    }
  );
});

router.post(`/addStudentInfo`, async (req, res) => {
  const {
    name,
    classes,
    gender,
    age,
    bform,
    religion,
    nationality,
    DOB,
    POB,
    address,
    DOA,
    FatherName,
    FatherContact,
    FatherOccupation,
    FatherOfficeAddress,
    FatherNationality,
    MotherName,
    MotherContact,
    GaudrianName,
    GuardianContact,
    GuardianRelationship,
  } = req.body;
  let Student_id;
  db.query(
    "select Student_id from studentinfo ORDER BY Student_id DESC",
    (err, row) => {
      if (err) {
        return res.status(500).json({ message: "Internal Error Occured..." });
      }
      if (row.length === 0) {
        Student_id = "S0";
      } else {
        Student_id = `S${
          parseInt(row[0].Student_id.substring(1, row[0].Student_id.length)) + 1
        }`;
      }
      db.query(
        "insert into studentinfo values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          name,
          Student_id,
          classes,
          gender,
          age,
          bform,
          religion,
          nationality,
          DOB,
          POB,
          address,
          DOA,
          FatherName,
          FatherContact,
          FatherOccupation,
          FatherOfficeAddress,
          FatherNationality,
          MotherName,
          MotherContact,
          GaudrianName,
          GuardianContact,
          GuardianRelationship,
        ],
        (err, result) => {
          if (err) {
            return res.status(400).json({ status: "failed", err: err });
          }
          return res.status(200).json({ status: "success", result: result });
        }
      );
    }
  );
});

router.post(`/addFeeInfo`, async (req, res) => {
  const {
    classes,
    issue_date,
    due_date,
    anualFee,
    admissionFee,
    extraFee,
    labFee,
    tutionFee,
    examFee,
  } = req.body;

  // select student
  db.query(
    "select Student_id from studentinfo where class = ?",
    [classes],
    (err, result) => {
      // if Error in Query
      if (err) {
        return res.status(400).json({ status: "failed", err });
      }
      // if Find Student
      if (result.length != 0) {
        // console.log("Student Selected");
        var current_month = new Date().getMonth() + 1;
        var current_year = new Date().getFullYear();
        var previous_year = new Date().getFullYear();

        // console.log(current_month, current_year, previous_year);

        // to check current month challan generated or not

        db.query(
          "select * from voucher V,studentinfo S where S.Student_id = V.Student_id and DATE_FORMAT(V.Issue_date, '%Y-%m') like '" +
            `${current_year}-${
              current_month >= 10 ? current_month : `0${current_month}`
            }` +
            "' ",
          (err1, res1) => {
            // console.log(res1);
            if (current_month == 1) {
              previous_year = new Date().getFullYear() - 1;
              current_month = 13;
            }
            // if error in query
            if (err1) {
              // console.log(err1);
              return res.status(400).json({ status: "failed", err1 });
            }
            // if current month challan not generated
            if (res1.length == 0) {
              // check for previous month challan
              // console.log(previous_year, current_month);
              db.query(
                "select * from voucher V,studentinfo S where S.Student_id = V.Student_id and DATE_FORMAT(V.Issue_date, '%Y-%m') like '" +
                  `${previous_year}-${
                    current_month > 10
                      ? current_month - 1
                      : `0${current_month - 1}`
                  }` +
                  "'",
                (err2, res2) => {
                  // previous month challan  available
                  // console.log(res2.length);
                  if (res2.length != 0) {
                    // console.log("Challan Generated");
                    for (let i = 0; i < result.length; i++) {
                      var challan_id = Math.floor(
                        Math.random() * parseInt(Date.now())
                      );
                      var totalFees =
                        parseInt(anualFee) +
                        parseInt(admissionFee) +
                        parseInt(tutionFee) +
                        parseInt(examFee) +
                        parseInt(labFee) +
                        parseInt(extraFee) +
                        res2[i].TotalAmount;
                      // console.log(
                      //   "In Previous month LOOP",
                      //   result[i].Student_id,
                      //   totalFees,
                      //   challan_id,
                      //   issue_date,
                      //   due_date
                      // );
                      db.query(
                        "insert into voucher values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [
                          challan_id.toString(),
                          result[i].Student_id,
                          classes,
                          issue_date,
                          due_date,
                          parseInt(anualFee),
                          parseInt(admissionFee),
                          parseInt(tutionFee),
                          parseInt(examFee),
                          parseInt(labFee),
                          parseInt(extraFee),
                          parseInt(totalFees),
                          false,
                          "",
                        ],
                        (err3) => {
                          if (err3) {
                            // console.log(err3);
                            // console.log("Error2");
                            return res.status(404).json({
                              status: "failed",
                              msg: "Cannot Add Fee",
                            });
                          }
                        }
                      );
                    }
                    res.status(200).json({
                      status: "Success",
                      msg: "First Challan Generated",
                    });
                  }

                  // previous month challan not available
                  if (res2.length == 0) {
                    console.log("First Time Challan Generated");
                    for (let i = 0; i < result.length; i++) {
                      var challan_id = Math.floor(
                        Math.random() * parseInt(Date.now())
                      );
                      var totalFees =
                        parseInt(anualFee) +
                        parseInt(admissionFee) +
                        parseInt(tutionFee) +
                        parseInt(examFee) +
                        parseInt(labFee) +
                        parseInt(extraFee);
                      // console.log(
                      //   "In Current month LOOP",
                      //   result[i].Student_id,
                      //   totalFees,
                      //   challan_id,
                      //   issue_date,
                      //   due_date
                      // );
                      db.query(
                        "insert into voucher values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [
                          challan_id.toString(),
                          result[i].Student_id,
                          classes,
                          issue_date,
                          due_date,
                          parseInt(anualFee),
                          parseInt(admissionFee),
                          parseInt(tutionFee),
                          parseInt(examFee),
                          parseInt(labFee),
                          parseInt(extraFee),
                          parseInt(totalFees),
                          false,
                          "",
                        ],
                        (err4) => {
                          if (err4) {
                            // console.log(err4);
                            // console.log("Error4");
                            return res.status(404).json({
                              status: "failed",
                              msg: "Cannot Add Fee",
                            });
                          }
                        }
                      );
                    }
                    res
                      .status(200)
                      .json({ status: "Success", msg: "Challan Generated" });
                  } else {
                    console.log(err2);
                  }
                }
              );
            }
            //  current month challan generated already
            else if (res1.length > 0) {
              // console.log("Already Present");
              return res
                .status(400)
                .json({ status: "failed", msg: "Fee Already Added" });
            }
          }
        );
      }
      // if no Student Found
      else {
        return res
          .status(401)
          .json({ status: "failed", msg: "No Student available " });
      }
    }
  );
});

module.exports = router;

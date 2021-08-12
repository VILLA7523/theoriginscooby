const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class AttendanceModel {
  async create() {
    var dateToday = new Date();
    var score = 3;
    const con = connectionDb.promise();
    const data = await con.query(
      "INSERT INTO attendances (Date,Score) VALUES (?,?)",
      [dateToday, score]
    );
    return data[0];
  }
  
  async getasisbycuiestudent(id) {
    const conextion = connectionDb.promise();
    const data = await conextion.query(
    "SELECT * FROM attendances INNER JOIN curse_attendances ON attendances.AttendanceID = curse_attendances.AttendanceId WHERE curse_attendance.StudentID = ?",
    [id]
    );
    return data[0];
  }
}

module.exports = AttendanceModel;

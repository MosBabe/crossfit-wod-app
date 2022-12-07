
const recordService = require("../services/recordService");

const getRecordForWorkout = (req,res) =>{
    const {params: {workoutId}} = req;
    console.log(workoutId)
    if(!workoutId){
      res.status(400).send({status: "FAILED", data:{ error: "Parameter ':workoutId' can not be empty" }});
    }
    try {
        console.log("recordcontroller try a girdi");
      const record = recordService.getRecordForWorkout(workoutId);
      res.status(204).send({status:"OK", data:record});
    } catch (error) {
      res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  }

 module.exports = { getRecordForWorkout };
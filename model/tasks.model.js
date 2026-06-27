const mongoose = require("mongoose");

// schema
const taskSchmea = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true  
    },
    status: {
        type: String,
        enum: ["not-started", "in-progress", "completed"],
        default: "not-started",
        required: true
    }
});

const Tasks = mongoose.model("tasks", taskSchmea);
module.exports = Tasks;
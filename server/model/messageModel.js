const { default: mongoose } = require('mongoose');
const monooge = require('mongoose');

const messageSchema = new monooge.Schema(
    {
        message: {
            text: {
                type: String,
                required: true
            },
        },
        users: Array,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = monooge.model("Messages", messageSchema);
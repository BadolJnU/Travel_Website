import User from '../models/User.js'

//create new User package

export const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const saveUser = await newUser.save()

        res.status(200).json({success: true, message: "Successfully new user Created", data: saveUser});
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to create. Try Again"});
    }
}

//update User Details

export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({success: true, message: "Successfully Updated user information", data: updatedUser});

    } catch (err) {
        res.status(500).json({success: false, message: "Failed to update. Try Again"});
    }
};

//delete User Details

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({success: true, message: "Successfully deleted user"});

    } catch (err) {
        res.status(500).json({success: false, message: "Failed to delete. Try Again"});
    }
};

//get single User Details

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id)

        res.status(200).json({success: true, message: "Successfully Found the user", data: user});

    } catch (err) {
        res.status(404).json({success: false, message: "Not Found. Try Again"});
    }
};

//get all User User Details

export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({});

        res.status(200).json({success: true, count: Users.length, message: "Successfully founded all the users", data: users});
    } catch (err) {
        res.status(404).json({success: false, message: "Not Found. Try Again"});
    }
}
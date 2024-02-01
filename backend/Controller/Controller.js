import Tour from '../models/Tour.js'

//create new tour package

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const saveTour = await newTour.save()

        res.status(200).json({success: true, message: "Successfully Created", data: saveTour});
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to create. Try Again"});
    }
}

//update Tour Details

export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({success: true, message: "Successfully Updated", data: updatedTour});

    } catch (err) {
        res.status(500).json({success: false, message: "Failed to update. Try Again"});
    }
};

//delete Tour Details

export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id)

        res.status(200).json({success: true, message: "Successfully deleted"});

    } catch (err) {
        res.status(500).json({success: false, message: "Failed to delete. Try Again"});
    }
};

//get single Tour Details

export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findByIdAndDelete(id)

        res.status(200).json({success: true, message: "Successfully Found", data: tour});

    } catch (err) {
        res.status(404).json({success: false, message: "Not Found. Try Again"});
    }
};

//get all tour Tour Details

export const getAllTour = async (req, res) => {

    //for pagination

    const page = parseInt(req.query.page);

    //console.log(page);

    try {
        const tours = await Tour.find({}).skip(page * 8).limit(8);

        res.status(200).json({success: true, count: tours.length, message: "Successful", data: tours});
    } catch (err) {
        res.status(404).json({success: false, message: "Not Found. Try Again"});
    }
}

//get tour by search

export const getTourbySearch = async (req, res) => {
    //here 'i' means case sensitive

    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}});

        res.status(200).json({success: true, message: "Successful", data: tours});
    } catch (err) {
        res.status(404).json({success: false, message: "Not Found. Try Again"});
    }
}


//get featured Tour Details

export const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({featured:true}).limit(8);

        res.status(200).json({success: true, count: tours.length, message: "Successful", data: tours});
    } catch (err) {
        res.status(404).json({success: false, message: "Not Found. Try Again"});
    }
}

//get Tour counts

export const getTourCount = async (req, res) => {
    
    try {
        const countTour = await Tour.estimatedDocumentCount()

        res.status(200).json({success: true, message: "Successfully counted", data: countTour});

    } catch (err) {
        res.status(500).json({success: false, message: "Failed to fetch. Try Again"});
    }
};




import doctorModel from '../models/doctorModel.js';

// Toggle availability status of a doctor
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    if (!docId) {
      return res.status(400).json({ success: false, message: 'Doctor ID is required' });
    }

    const docData = await doctorModel.findById(docId);

    if (!docData) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    docData.available = !docData.available;
    await docData.save();

    res.json({ success: true, message: 'Availability changed successfully' });
  } catch (error) {
    console.error('Error in changeAvailability:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Return list of doctors without exposing password and email
const doctorsList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select('-password -email');
    res.json({ success: true, doctors });
  } catch (error) {
    console.error('Error in doctorsList:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { changeAvailability, doctorsList };

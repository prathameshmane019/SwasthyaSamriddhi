const mongoose = require('mongoose');
const { decrypt, encrypt } = require('../libs/encryption');
const HealthRecord = require('./HealthRecord');

const updateExistingRecords = async () => {
    const records = await HealthRecord.find();

    for (const record of records) {
        record.diagnosis = decrypt(record.diagnosis);
        record.prescription = decrypt(record.prescription);
        record.status = decrypt(record.status);
        record.notes = decrypt(record.notes);

        await record.save();
    }
};

updateExistingRecords().then(() => {
    console.log('Existing records updated successfully.');
}).catch((error) => {
    console.error('Error updating existing records:', error);
});

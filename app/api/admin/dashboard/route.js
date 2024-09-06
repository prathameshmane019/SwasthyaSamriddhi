import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/app/libs/connectDb';
import HealthRecord from '@/app/models/records';
import User from '@/app/models/user';
import { decrypt } from "../../../libs/encryption";

export async function GET(req) {
    await connectMongoDB();

    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const address = searchParams.get('address');
    const disease = searchParams.get('disease');

    try {
        const aggregationPipeline = [
            // Date range filter
            startDate && endDate ? {
                $match: {
                    createdAt: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }
            } : null,

            {
                $lookup: {
                    from: 'users',
                    localField: 'patientId',
                    foreignField: '_id',
                    as: 'patient'
                }
            },
            { $unwind: '$patient' },

            // Address filter
            address ? {
                $match: {
                    'patient.address': { $regex: address, $options: 'i' }
                }
            } : null,

            // Disease filter (assuming diagnosis field contains disease information)
            disease ? {
                $match: {
                    diagnosis: { $regex: disease, $options: 'i' }
                }
            } : null,

            // Group by disease for visualization
            {
                $group: {
                    _id: '$diagnosis',
                    count: { $sum: 1 },
                    records: { $push: '$$ROOT' }
                }
            },

            // Sort by count descending
            { $sort: { count: -1 } }
        ].filter(Boolean); // Remove null stages

        const result = await HealthRecord.aggregate(aggregationPipeline);

        // Decrypt sensitive fields
        const decryptedResult = result.map(group => ({
            ...group,
            records: group.records.map(record => ({
                ...record,
                diagnosis: decrypt(record.diagnosis),
                prescription: decrypt(record.prescription),
                status: decrypt(record.status),
                notes: decrypt(record.notes),
            }))
        }));

        // Prepare data for charts
        const chartData = decryptedResult.map(group => ({
            disease: group._id,
            count: group.count
        }));

        return NextResponse.json({
            chartData,
            detailedRecords: decryptedResult
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Failed to fetch records" }, { status: 500 });
    }
}
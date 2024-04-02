import crypto from 'crypto';
const algorithm ='aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); 
const iv = Buffer.from(process.env.IV, 'hex'); 

export const encrypt = (text) => {
    try {
        console.log(iv);
        console.log(key);
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    } catch (error) {
        console.error('Encryption error:', error);
        throw error;
    }
};

export const decrypt = (text) => {
    try {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    } catch (error) {
        console.error('Decryption error:', error);
        throw error;
    }
};

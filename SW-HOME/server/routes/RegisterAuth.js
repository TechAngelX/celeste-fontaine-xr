const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const bcrypt = require('bcrypt');

// Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING
};


// Generate a unique username
function generateAcctUsername(fname, lname) {
    const firstInitial = fname ? fname.charAt(0).toLowerCase() : '';
    const lastFour = lname.length >= 5 ? lname.substring(0, 5).toLowerCase() : lname.toLowerCase();
    let randomNumbers;
    do {
        randomNumbers = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    } while (randomNumbers.startsWith('1') || randomNumbers.startsWith('0'));
    return firstInitial + lastFour + randomNumbers;
}

// Handle POST request for registration
router.post('/', async (req, res) => {
    console.log("Received registration request:", req.body);

    const { firstname, lastname, password, pwordConfirm, accountType, customer, staff, staffrole, dept } = req.body;

    if (pword !== pwordConfirm) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log("Successfully connected to the database with config:", dbConfig);

        const username = generateAcctUsername(fname, lname);

        // Check if the username already exists
        const userCheck = await connection.execute(
            `SELECT USERNAME FROM USER_ACC WHERE USERNAME = :username`,
            [username],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(pword, 10);



        // Insert the new user into USER_ACC table
        const result = await connection.execute(
            `INSERT INTO USER_ACC (userName, fName, lName, accType, pWord, eMail) 
            VALUES (:username, :pword, :fname, :lname, :email, :accType)`,
            [username, hashedPassword, fname, lname, email, accType],
            { autoCommit: true }
        );

        const userId = result.lastRowid; // Get the generated USERID

        if (accType === '1') { // Customer
            await connection.execute(
                `INSERT INTO CUSTOMER (cust_ID, userName, fName, lName, eMail, user_ID) 
                VALUES (TO_NUMBER('2' || cust_id_seq.NEXTVAL), :fname, :lname, :email, :programme, :degreeTypeId, :dept, :awardname, :userId)`,
                [fname, lname, email, , /* degreeTypeId */, /*  */, /* deptId */, , userId],
                { autoCommit: true }
            );
        } else if (accType === '2') { // Staff
            await connection.execute(
                `INSERT INTO STAFF (staff_ID, staffRole_ID, eMail, fName, lName, dept_ID, user_ID) 
                VALUES (generate_staff_id(:fname, :lname), :staffrole, :email, :fname, :lname, :dept, :userId)`,
                [staffrole, email, fname, lname, dept, userId],
                { autoCommit: true }
            );
        }

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error connecting to the database or registering user:', error);
        res.status(500).json({ message: 'Database connection error or registration failed' });
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log("Database connection closed.");
            } catch (err) {
                console.error('Error closing the database connection:', err);
            }
        }
    }
});

module.exports = router;

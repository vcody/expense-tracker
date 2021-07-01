const Transaction = require('../models/Transaction');

// @description     Get all transactions
// @route           GET /api/v1/transactions
// @access          Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await ransaction.find(); 

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @description     Add transaction
// @route           POST /api/v1/transactions
// @access          Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
    
        return res.send(201).json({
            success: true,
            data: transaction
    } catch (error) {
        
    }
}

// @description     Delete transaction
// @route           DELETE /api/v1/transactions/:id
// @access          Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transactions');
}
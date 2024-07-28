const { createAgent } = require('../models/Agent');

const registerAgent = async (req, res) => {
    try {
        const agent = await createAgent(req.body);
        res.status(201).json(agent);
    } catch (error) {
        console.error('Error registering agent:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { registerAgent };

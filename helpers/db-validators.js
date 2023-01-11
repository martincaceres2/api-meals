import { Role } from '../models/Role.js';

export const validRole = async (role = '') => {

    const roleExists = await Role.findOne({ role });

    if (!roleExists) {
        return res.status(404).json({
            msg: 'This role is not in the DB'
        });
    }
}; 

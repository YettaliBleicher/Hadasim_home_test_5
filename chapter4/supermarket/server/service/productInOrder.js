import connectToDatabase from './database.js';
import { getQuery, insertQuery, updateQuery, deleteQuery, getOutsideQuery } from './query.js'


const getProductByOrderId = async (orderId) => {
    try {
        const query = `
        SELECT * FROM ProductsInOrder WHERE Order_Id = '${orderId}';
    `;
        let result = await getOutsideQuery(query);
        console.log(result)
        return result

    } catch (error) {
        console.error('Error executing query:', error);
        return null; // או לזרוק שגיאה לפי הצורך
    }
};

export {getProductByOrderId}

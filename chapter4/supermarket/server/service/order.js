import connectToDatabase from './database.js';
import { getQuery, insertQuery, updateQuery, deleteQuery, getOutsideQuery } from './query.js'

const getOrdersBySupplier = async (supplierId) => {
    try {
        console.log("service");
        const query = `
        SELECT * FROM Orders WHERE Supplier_Id = '${supplierId}';
    `;
        let result = await getOutsideQuery(query);
        console.log(result)
        return result

    } catch (error) {
        console.error('Error executing query:', error);
        return null; // או לזרוק שגיאה לפי הצורך
    }
};

const updateOrder = async (orderId) => {
    try {
        let statusId = 2;
        let updateU = `Status_Id = ${statusId}`;
        let order = await updateQuery("Orders", updateU, "Order_Id", orderId);
        return order;
    } catch (err) {
        console.error('Query Error:', err);
        return { "error": "err" };
    }
};
export {getOrdersBySupplier, updateOrder}
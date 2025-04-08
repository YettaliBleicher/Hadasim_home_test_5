import connectToDatabase from './database.js';
import { getQuery, insertQuery, updateQuery, deleteQuery, getOutsideQuery } from './query.js'


const getSuppliers = async () => {
    try {
        let suppliers = await getQuery("Suppliers");
        return suppliers;
    } catch (err) {
        console.error('Query failed! Error:', err);
        return [];
    } finally {

    }
};

const getSupplierById = async (supplierId) => {
    try {
        const query = `
        SELECT * FROM Suppliers WHERE Supplier_Id = '${supplierId}';
    `;
        let result = await getOutsideQuery(query);
        console.log(result)
        return result

    } catch (error) {
        console.error('Error executing query:', error);
        return null; // או לזרוק שגיאה לפי הצורך
    }
};
const addSupplier = async (newSupplier) => {
    try {
        let nameValues = "";
        let values = "";
        for (const key in newSupplier) {
            nameValues += key + ',';
            if (typeof newSupplier[key] === "string")
                values += `'${newSupplier[key]}',`;
            else
                values += newSupplier[key] + ',';
        }
        nameValues = nameValues.slice(0, -1);
        values = values.slice(0, -1);
        console.log("------"+nameValues);
        console.log("******"+values);

        let supplier = await insertQuery("Suppliers", nameValues, values);
        console.log("++++++"+JSON.stringify(supplier))
        return supplier;
    } catch (err) {
        console.error('Query Error:', err);
        return { "error": "err" };
    }
};


// const updateUser = async (userId, updatedUser) => {
//     try {
//         let updateU = "";
//         for (const key in updatedUser) {
//             if (typeof updatedUser[key] === "string") {
//                 updateU += `${key} = '${updatedUser[key]}', `;
//             }
//             else
//                 if (typeof updatedUser[key] === 'boolean') {
//                     if (updatedUser[key] == true)
//                         updateU += ` ${key} = 1 ,`;
//                     else
//                         updateU += `${key} = 0 ,`;
//                 }
//                 else {
//                     updateU += `${key} = ${updatedUser[key]}, `;
//                 }
//         }
//         updateU = updateU.slice(0, -2);
//         let user = await updateQuery("users", updateU, "userId", userId);
//         return user;
//     } catch (err) {
//         console.error('Query Error:', err);
//         return { "error": "err" };
//     }
// };


// const deleteUser = async (userId) => {
//     try {
//         let user = await deleteQuery("users", "userId", userId);
//         return user;
//     } catch (err) {
//         console.error('Query Error:', err);
//         return { "error": "err" };
//     }
// };

// export { getUsers, getUserById, addUser, updateUser, deleteUser }
export {getSuppliers, getSupplierById, addSupplier}
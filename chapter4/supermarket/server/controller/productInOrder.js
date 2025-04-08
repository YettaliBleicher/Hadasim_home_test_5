import {getProductByOrderId} from '../service/productInOrder.js'

export class ProductInOrder {
    getById = async (req, res) => {

        try {
            const orderId = req.params.orderId;
            let products = await getProductByOrderId(orderId);
            res.send(products);

        } catch (error) {
            console.error('there was an error:', error.message);
            res.status(500).send(error.message);
        }
    };
}
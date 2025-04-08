import {getOrdersBySupplier, updateOrder} from '../service/order.js'

export class Order {
getBySupplierId = async (req, res) => {

    try {
        // console.log("controller");
        const supplierId = req.params.supplierId;
        // console.log(supplierId);
        let orders = await getOrdersBySupplier(supplierId);
        // console.log("after service")
        res.send(orders);

    } catch (error) {
        console.error('there was an error:', error.message);
        res.status(500).send(error.message);
    }
};

update = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        let updatedOrder = await updateOrder(orderId);
        // console.log(updatedOrder)
        res.send(updatedOrder);
    } catch (error) {
        console.log('There was an error:', error.message);
        res.status(500).send(error.message);
    }
}

}
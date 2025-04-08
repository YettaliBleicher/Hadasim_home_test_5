let allSuppliers = null;

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    // console.log(phone+" - "+ password);


    const supplierDetails = {
        phone: phone,
        supplierPassword: password
    };

    // console.log("supplierDetails---"+ JSON.stringify(supplierDetails));

    const getSuppliers = async function () {
        // console.log("in fetch");
        try {
            const suppliers = await fetch('http://localhost:3000/supplier', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            return await suppliers.json();
        } catch (error) {
            messageElement.textContent = "An error occurred. Please try again.";
        }
    };

    allSuppliers = await getSuppliers();
    // console.log("all suppliers---"+ JSON.stringify(allSuppliers[0]));
    let suppliers = allSuppliers[0];

    const supplier = suppliers.find(item => item.Phone === supplierDetails.phone && item.Supplier_Password === supplierDetails.supplierPassword);
    if (!supplier) {
        messageElement.textContent = "עדיין לא בצעת רישום";
        return;
    }
    // console.log("log++++"+supplier);
    localStorage.setItem("supplier", JSON.stringify(supplier));
    window.open('../../html/supplier/orders.html', '_self');
    // אם המשתמש נמצא במערכת, מעבירים אותו לדף הבית או לדף ייעודי
    

});












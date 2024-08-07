const dataHandler = {
    decodeData: async (buffer) => {
        return JSON.parse(buffer.toString())
    },
    prepareData: async (data) => {
        let dataToSend = {
            "order_status_id": `${data.id}`, // order ID
            "date_add": `${Math.floor(new Date(data.date_created).getTime())}`, // TIMESTAMP UNIX
            "user_comments": `${data.customer_note}`, // USER COMMENT
            "admin_comments": "", // seller comment
            "phone": `${data.billing.phone}`, // phone
            "email": `${data.billing.email}`, // e-mail
            "user_login": "", // user login
            "currency": `${data.currency}`, // currency
            "payment_method": `${data.payment_method_title}`, // payment method
            "payment_method_cod": "0", // cash on delivery
            "paid": `${data.payment_method_title === "Direct bank tranfer"?"0":1}`, // paid or not
            "delivery_method": "", // delivery method           (DO IT!)
            "delivery_price": "10", // delivery price           (DO IT!)
            "delivery_fullname": `${data.shipping.first_name} ${data.shipping.last_name}`, // full name
            "delivery_company": `${data.shipping.company}`, // company
            "delivery_address": `${data.shipping.address_1}/${data.shipping.address_2}`, // address
            "delivery_city": `${data.shipping.city}`, // city
            "delivery_state": `${data.shipping.state}`, // state (optional)
            "delivery_postcode": `${data.shipping.postcode}`, // postcode
            "delivery_country_code": `${data.shipping.country}`, // country code
            "delivery_point_id": ``, // point id         (DO IT!)
            "delivery_point_name": ``,           // (DO IT)
            "delivery_point_address": ``,
            "delivery_point_postcode": ``,
            "delivery_point_city": "",
            "invoice_fullname": `${data.billing.first_name} ${data.billing.last_name}`,
            "invoice_company": `${data.billing.company}`,
            "invoice_nip": ``, // (DO IT)
            "invoice_address": `${data.billing.address_1}/${data.billing.address_2} `,
            "invoice_city": `${data.billing.city}`,
            "invoice_state": `${data.billing.state}`,
            "invoice_postcode": `${data.billing.postcode}`,
            "invoice_country_code": `${data.billing.country}`,
            "want_invoice": ``, // (do it)
            "extra_field_1": ``,
            "extra_field_2": ``,
            "custom_extra_fields": {  // TODO
                "135": "B2B",
                "172": "1646913115"
            },
            "products": [
              {
                "storage": "db",
                "storage_id": 0,
                "product_id": "5434",
                "variant_id": 52124,
                "location": "A1-13-7",
                "name": "Harry Potter and the Chamber of Secrets",
                "sku": "LU4235",
                "ean": "1597368451236",
                "price_brutto": 20.00,
                "tax_rate": 23,
                "quantity": 2,
                "weight": 1
              }
            ]
        }
        console.log(dataToSend)
    },
    sendData: async () => {

    }
}

module.exports = dataHandler
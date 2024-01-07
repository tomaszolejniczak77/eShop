// const checkProducts = (data, callback) => {
//     setTimeout(() => {
//         callback({status: 'ok'})
//     }, 2000)
// }

// const checkPrice = (data, callback) => {
//     setTimeout(() => {
//         callback( {status: 'ok', data })
//     }, 2000);
// }

// const makeOrder = (data, callback) => {
//     setTimeout(() => {
//         callback({orderId: 123, data})
//     }, 2000);
// }

// const checkPromotionForOrder = (orderId, callback) => {
//     setTimeout(() => {
//         callback(['kurs HTML za 50%!']);
//     }, 2000);
// }

// const orderData = {};

// checkProducts(orderData, (response) => {
//     const { status } = response;
//     console.log('Czy produkty są dostępne: ', status)

//     checkPrice(orderData, (response2) => {
//         const { status, order} = response2;
//         console.log('Cena poprawna:', status)

//         makeOrder(orderData, (response3) => {
//             const { orderId, data} = response3;
//             console.log('Order ID', orderId);

//             checkPromotionForOrder(orderId, (response4) => {
//             const promo = response4
//             console.log('Promocje: ', promo)
//             })
//         })
//     })
// });



// //callback

// const checkProductsCallback = (data, callback) => {
//     setTimeout(() => {
//         callback({status: 'ok'})
//     }, 2000)
// }

// checkProductsCallback({}, response => {
//     console.log(response.status);
// })

//promise chaining
// const checkProduct = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({status: 'ok'});
//         }, 2000);
//     })
// }

// const checkPrice = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve( {status: 'ok', data })
//         }, 2000);
//     }) 
// }

// const makeOrder = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({orderId: 123, data})
//         }, 2000);
//     })
// }

// const checkPromotionForOrder = (orderId) => {
//     return new Promise((resolve, reject) => {
//         console.log('Order ID', orderId);
//         setTimeout(() => {
//             // resolve(['kurs HTML za 50%!']);
//             reject(new Error('Błąd serwera'));
//         }, 2000);
//     })
// }

// const orderData = {};

// const asyncFunction = async () => {

//     try {
//     await checkProduct(orderData);
//     await checkPrice(orderData);
//     const response = await makeOrder(orderData);
//     const promo = await checkPromotionForOrder(response);
//     console.log('Promocje:', promo);
//   } catch (error) {
//         alert(error.message);
//     }

// }
    

// asyncFunction();

// //promise pattern 
// checkProduct(orderData)
// .then(response => {
//     console.log('Czy produkty dostępne:', response.status);
//     return checkPrice(orderData);
// })
// .then(response => {
//     console.log('Cena poprawna:', response.status);
//     return makeOrder(orderData);
// })
// .then(response => {
//     console.log(('Order ID', response.orderId))
//     return checkPromotionForOrder(response.orderId);
// })
// .then(response =>{
//     console.log('Promocej:', response);
// })
// .catch(error => {
//     alert(error);
// })


const purchaseDateDiv = document.querySelector('#date');
const purchasedItemsDiv = document.querySelector('#purchasedItems');
const totalPutchasedPriceDiv = document.querySelector('#totalPurchasedPrice');
const purchaseBtn = document.querySelector('#purchaseBtn');
const formDiv = document.querySelector('form');

const validateName = (value) => {
    if (!value) return 'Imię i nazwisko jest wymagane';
}

const validateMail = (value) => {
    if (!value) return 'Adres e-mail jest wymagany';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return 'Adres e-mail jest niepoprawny';
}

const validateMailConfirm = (value, mail) => {
    if (!value) return 'Podaj ponownie adres e-mail';
    if (value !== mail) return 'Podane adresy e-mail różnią się';

}

const validateTel = (value) => {
    if (!value) return 'Numer telefonu jest wymagany';
    if (value.length < 9) return 'Podany numer jest zbyt krótki';
}

const validate = (key, value, allValues) => {
    switch (key) {
        case 'name': return validateName(value);
        case 'mail': return validateMail(value);
        case 'mailConfirm': return validateMailConfirm(value, allValues.mail);
        case 'tel': return validateTel(value);
    }
}

const validateValues = (values) => {

    const errors = [];
     
    Object.entries(values).forEach(([key, value]) => {
        const error = validate(key, value, values);
        if (error) errors.push(error);
    })
    
    document.querySelector('#errors').innerHTML = errors
    .map(e => `<li>${e}</li>`)
    .join('');

    return errors.length > 0;

}

const purchaseBtnClick = (e) => {
    e.preventDefault();

    // const formValue = document.querySelector('form').elements['name'].value;

    const elements = document.querySelector('form').elements;

    const formValues = {
        name: elements['name'].value,
        mail: elements['mail'].value,
        mailConfirm: elements['mailConfirm'].value,
        tel: elements['tel'].value,
        payment: elements['payment'].value,
    }
    
    const hasErrors = validateValues(formValues);

    if (!hasErrors) { 
        document.querySelector('#loading').style.display = 'flex';

        localStorage.removeItem('items')
    
     setTimeout(() => {
        window.location.href = '/podziekowanie.html';
     }, 3000);

    }

}

formDiv.addEventListener('submit', purchaseBtnClick);


const showPurchaseDate = (element) => {
    const d = new Date();
    element.innerHTML = d.toLocaleString();
}

showPurchaseDate(purchaseDateDiv);

const items = JSON.parse(localStorage.getItem('items'));

const showPurchasedItems = (products, element) => {
    const html = products.map((p) => 
        `<li>${p.quantity} x "${p.name}"</li>`
    ).join('');
    element.innerHTML = html;
}

showPurchasedItems(items, purchasedItemsDiv);

totalPutchasedPriceDiv.innerHTML = localStorage.getItem('totalPrice');
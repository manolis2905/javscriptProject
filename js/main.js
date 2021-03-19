'use strike;'

let createEmployees = (data) => {
    let employees = '';
    data.forEach(em => {
        employees += `<div class="card" style="width: 12rem;">
        <img src="${em.photo}" class="card-img-top" alt="${em.photo}">
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span>${em.first_name}</span> <span>${em.last_name}</span></li>
            <li class="list-group-item">${em.skills}</li>
            <li class="list-group-item">${em.email}</li>
            <li class="list-group-item">${em.country}</li>
            <li class="list-group-item">${em.sallary}</li>
        </ul>
        </div></div>`
    });
    document.querySelector('#cards').innerHTML = employees;
};

let search = (query) => {
    if (!query) {
        return data;
    }
    let filteredData = data.filter(em => {
        em.first_name.toLowerCase().includes(query.toLowerCase()) || em.last_name.toLowerCase().includes(query.toLowerCase()) ||
            em.skills.toLowerCase().includes(query.toLowerCase()) || em.email.toLowerCase().includes(query.toLowerCase()) ||
            em.country.toLowerCase().includes(query.toLowerCase())

    });
    return filteredData;
};

createEmployees(search());




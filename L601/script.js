let elementFound = false;
while (!elementFound) {
    let id = prompt('შეიყვანეთ სტუდენტის ID ');
    let datas = document.querySelectorAll('div');
    let i;
    for (i = 0; i < datas.length; i++) {
        let result = datas[i].getAttribute(['data-student-id']);
        if (id === result) {
            elementFound = true;
            datas[i].style.backgroundColor = 'red';
        }
    }
    // tu id === result, elementFound iqneba true; da imisatvis rom amoagdos alerti roca ar iqneba true veubnebit tu  elementFound aris false anu !elementFound (!araris true);
    if (!elementFound) {
        alert('ID არასწორია');
    }
}
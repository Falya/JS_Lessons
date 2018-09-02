function ajaxModule () {
	let message = new Object();
    message.failure = 'Что-то пошло не так...';

    let formModul = document.getElementsByClassName('main-form')[0],
        form = document.getElementById('form'),
        contact = document.querySelector('.contact-form');

    //Вызов функций отображения процесса отправки
    formSubmit(formModul, 'status', formModul);
    formSubmit(form, 'm-f', contact);
    // Функция отображения процесса отправки и отправки 
    // forName - имя формы, extra - добавляемый класс, container - куда добавляем message
    function formSubmit(formName, extra, container) {
        let input = formName.getElementsByTagName('input'),
            statusMessage = document.createElement('div'),
            divCircle = document.createElement('div'),
            divComplete = document.createElement('div');

        statusMessage.classList.add(extra, 'fade');
        formName.addEventListener('submit', (event) => {
            event.preventDefault();
            container.appendChild(statusMessage);

            // AJAX
            let formData = new FormData(formName);

            function postData(data) {

                return new Promise((resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


                    request.onreadystatechange = () => {

                        if (request.readyState < 4) {
                            resolve();
                            console.log('loading');
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                console.log('success');
                                resolve();
                            } else {
                                reject();
                                console.log('fail');
                            }
                        }
                    };
                    request.send(formData);
                });
            } // End postData
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => {
                    statusMessage.style.display = 'block';
                    statusMessage.appendChild(divCircle);
                    divCircle.appendChild(divComplete);
                    divCircle.classList.add('circle-loader');
                })
                .then(() => {
                    divCircle.classList.add('load-complete');
                    divComplete.classList.add('draw', 'checkmark');
                    setTimeout(() => {
                        statusMessage.classList.add('fadeOut');
                        statusMessage.classList.remove('fade');
                        divCircle.classList.remove('load-complete');
                        divComplete.classList.remove('draw', 'checkmark');
                        setTimeout(() => {
                            statusMessage.style.display = 'none';
                            statusMessage.classList.remove('fadeOut');
                        }, 1500);
                    }, 2000);
                })
                .catch(() => {
                    statusMessage.classList.remove(extra, 'fade');
                    statusMessage.cssText = '';
                    statusMessage.innerHTML = message.failure;
                })
                .then(clearInput);
        });
    }
}

module.exports = ajaxModule;
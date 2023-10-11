/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('user')) {
    document.getElementById('invite-name').innerText = urlParams.get('user');
}

if (urlParams.has('host') && urlParams.has('group')) {
    const params = new URLSearchParams({ g: urlParams.get('group'), p: urlParams.get('p') });
    const url = 'colabs://' + urlParams.get('host') + '/?' + params.toString();
    document.getElementById('open-button').href = url;
    // document.getElementById('open-button').href = "#";
    // document.getElementById('open-button').onclick = () => { window.location.href = url; }
}
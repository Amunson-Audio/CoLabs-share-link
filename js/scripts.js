/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('name')) {
    document.getElementById('invite-name').innerText = urlParams.get('name');
}

if (urlParams.has('host') && urlParams.has('group')) {
    const params = new URLSearchParams({ group: urlParams.get('group') });
    const url = 'http://' + urlParams.get('host') + '/?' + params.toString();
    document.getElementById('open-button').href = url;
}
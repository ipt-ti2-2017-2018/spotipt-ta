document.addEventListener('DOMContentLoaded', function main() {
    var xhr = new XMLHttpRequest();
    /**
     * @type {Element}
     */
    var discoteca = null;

    xhr.open('GET', '/assets/xml/discot.xml');

    xhr.onload = function (_) {
        if (xhr.status === 200) {
            discoteca = xhr.responseXML;
            init();
        } else {
            console.error('Erro', xhr.status);
        }
    };

    xhr.onerror = function (_) {
        console.error('Erro');
    };

    xhr.send();

    function init() {
        var cds = discoteca.querySelectorAll('cd');

        for (var i = 0; i < cds.length; i++) {
            var cd = cds[i];

            var titulo = cd.getAttribute('titulo');

            var tituloContainer = document.createElement('p');
            tituloContainer.textContent = titulo;

            document.body.appendChild(tituloContainer);

        }
    }

});

    function CertificateBox(text, imgUrl) {
        var certificateDiv = document.createElement('div');
        certificateDiv.className = 'sertificate';
        certificateDiv.setAttribute("data-aos","zoom-in");

        var certificateWrapper = document.createElement('div');
        certificateWrapper.className = 'sertificate-wrapper';

        var textDiv = document.createElement('div');
        textDiv.className = 'sertificate-text';
        textDiv.textContent = text;

        var imgDiv = document.createElement('div');
        imgDiv.className = 'sertificate-img';

        var img = document.createElement('img');
        img.src = imgUrl;
        img.alt = 'sertificate';

        imgDiv.appendChild(img);

        certificateWrapper.appendChild(textDiv);
        certificateWrapper.appendChild(imgDiv);

        certificateDiv.appendChild(certificateWrapper)

        return certificateDiv;
    }

    function renderCertificates(container) {
        // Список сертификатов
        var certificatesData = [
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
            { text: 'student in ielts-core', imgUrl: 'https://image.isu.pub/230521212342-4d40cfcebf9136536e047a62101ab4e1/jpg/page_1.jpg' },
        ];

        certificatesData.forEach(function (data) {
            var certificate = new CertificateBox(data.text, data.imgUrl);
            container.appendChild(certificate);
        });
    }

    var container = document.getElementById('second-section-sertificates');
    renderCertificates(container);

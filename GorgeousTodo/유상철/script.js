const $cards = document.querySelectorAll('.card');

$cards.forEach(($card) => {
    $card.addEventListener('click', function() {
        const $background = document.createElement('div');
        $background.style.backdropFilter = 'blur(20px)';
        $background.style.width = '100%';
        $background.style.height = '100%';
        $background.style.top = 0;
        $background.style.left = 0;
        $background.style.position = 'fixed';
        document.body.appendChild($background);
    
        const $bigcard = document.createElement('div');
        $bigcard.style.position = 'fixed';
        $bigcard.style.top = '50%';
        $bigcard.style.left = '50%';
        $bigcard.style.transform = 'translate(-50%, -50%)';
        $bigcard.style.width = '350px';
        $bigcard.style.height = '450px';
        $bigcard.style.backgroundColor = 'whitesmoke';
        $bigcard.style.borderRadius = '30px / 30px';
        $bigcard.style.overflow = 'hidden';
        document.body.appendChild($bigcard);

        const $cardtitle = document.createElement('p');
        $cardtitle.style.backgroundColor = 'teal';
        $cardtitle.style.color = 'white';
        $cardtitle.style.height = '10m0px';
        $cardtitle.style.fontSize = '40px';
        $cardtitle.style.fontWeight = '700';
        $cardtitle.style.marginTop = '0px';
        $cardtitle.style.marginBottom = '0px';
        $cardtitle.style.lineHeight = '100px'
        $cardtitle.style.textAlign = 'center';
        $bigcard.appendChild($cardtitle);
        
        const $cardtitletext = document.createTextNode('Personal');
        $cardtitle.appendChild($cardtitletext);

        const $cardcontexts = document.createElement('ul');
        $cardcontexts.style.listStyleType = 'none';
        $cardcontexts.style.paddingLeft = '15px';
        $cardcontexts.style.marginTop = '0px';
        $bigcard.appendChild($cardcontexts);

        const contextlist = ['Go Exercise', 'Read Books', 'Take a Machine', 'Clean My Room'];

        contextlist.forEach((context) => {
            const $cardcontext = document.createElement('li');
            const $cardcontexttext = document.createTextNode(context);
            $cardcontext.appendChild($cardcontexttext);
            $cardcontexts.appendChild($cardcontext);
        })

    });
})
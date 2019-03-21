var lastPosition = 0;
var lastTime = new Date().getTime();
var displayingPosition = 0;
var turnOffTime = 0;

function scrollListener(e){
    var scrollPosition = document.scrollingElement.scrollTop;
    var height = window.innerHeight;
    var currentTime = new Date().getTime();

    var speed = (scrollPosition - lastPosition) / (currentTime - lastTime);
    var floatingTime = height / speed;
    floatingTime = Math.abs(floatingTime);

    //TODO
    if(floatingTime > 500 && currentTime > turnOffTime){
        var card = document.getElementById('card');
        card.style.display = 'none';

        displayingPosition = scrollPosition;
    }
    else{
        var h1s = document.getElementsByTagName('h1');
        var h2s = document.getElementsByTagName('h2');
        var h3s = document.getElementsByTagName('h3');
        for(var i=0; i<h1s.length; i++){
            if(h1s[i].offsetTop > scrollPosition && h1s[i].offsetTop < scrollPosition + height){
                var card = document.getElementById('card');
                card.style.display = 'block';

                var text = card.getElementsByTagName('h1')[0];
                text.innerText = h1s[i].innerText;

                card.getElementsByTagName('h2')[0].innerText = '';
                card.getElementsByTagName('h3')[0].innerText = '';

                displayingPosition = h1s[i].offsetTop;
                turnOffTime = currentTime + 500;
            }
        }
        for(var i=0; i<h2s.length; i++){
            if(h2s[i].offsetTop > scrollPosition && h2s[i].offsetTop < scrollPosition + height){
                var card = document.getElementById('card');
                card.style.display = 'block';

                var text = card.getElementsByTagName('h2')[0];
                text.innerText = h2s[i].innerText;

                card.getElementsByTagName('h3')[0].innerText = '';

                displayingPosition = h2s[i].offsetTop;
                turnOffTime = currentTime + 500;
            }
        }
        for(var i=0; i<h3s.length; i++){
            if(h3s[i].offsetTop > scrollPosition && h3s[i].offsetTop < scrollPosition + height){
                var card = document.getElementById('card');
                card.style.display = 'block';

                var text = card.getElementsByTagName('h3')[0];
                text.innerText = h3s[i].innerText;

                displayingPosition = h3s[i].offsetTop;
                turnOffTime = currentTime + 500;
            }
        }
    }

    lastPosition = scrollPosition;
    lastTime = currentTime;
}

document.addEventListener("scroll", scrollListener);

function onCardClicked(){
    window.scrollTo({
        left: 0,
        top: displayingPosition,
        behavior: 'smooth'
    });
}
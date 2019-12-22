var slideImg = $(".slide");
    var slides = $(".slide").find(">li");
    var currentImg = 0;                
    var slideCount = slides.length;    

    function showNext(){
        var nextIndex = (currentImg + 1) % slideCount;
        slides.eq(currentImg).fadeOut(800);
        slides.eq(nextIndex).fadeIn(800);

        console.log(currentImg);
        console.log(nextIndex)
        currentImg = nextIndex;
    }
    setInterval(showNext,3000);


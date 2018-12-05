function Slider(width,height) {
    var that = this;
    this.width = width;
    this.height = height;
    var index = 0;
    this.roundedButtonList = [];

    //main container div is slider and images is the div containing all the images 
    var slider = document.getElementById('slider');
    var images = document.getElementById('images');
    // all the images inside the images div is kept in an array called imagesList
    var imagesList = slider.getElementsByTagName('img');
    
    //function to create buttons
    this.createButton = function(text,isNext) {

        var btn = document.createElement('button');

        btn.style.position = 'absolute';
        btn.style.width = '40px';
        btn.style.height = '100px';
        btn.style.background = 'none';
        btn.style.border = 'none';
        btn.style.top = '40%';
        btn.style.color='gray'
        btn.style.fontSize = '50px';
        btn.innerText= text;

        if(isNext) {
            btn.style.right = '1%';
        }else {
            btn.style.left = '1%';
        }

        slider.appendChild(btn);
        return btn;
    }
    
    this.createRoundedButtons = function() {

        for(var i =0;i<imagesList.length;i++) {

            var leftIndex = 40 + (5*i);
            var roundBtn = document.createElement('div');
            roundBtn.style.width = '10px';
            roundBtn.style.height = '10px';
            roundBtn.style.background = 'gray';
            roundBtn.style.position = 'absolute';
            roundBtn.style.top = '90%';
            roundBtn.style.left = leftIndex+ '%';
            roundBtn.style.borderRadius = '50%';
        
            slider.appendChild(roundBtn);
            that.roundedButtonList.push(roundBtn);
        }
        
    }
 

    // function to slide to next image
    this.slideNext = function() {
        that.stopTransition(initSlide);
        index++;
        that.disableButtons();
        if(index > imagesList.length-1) {
            index = 0;
        }
        var mover = -that.width* (index-1);

        var moveImage = setInterval(function(){
            images.style.left = mover+'px';
            mover--;
            if(mover == -that.width*index){
                that.stopTransition(moveImage);
                that.init();
            }
        },1);
    }

    //function to slide to previous slide
    this.slidePrev = function() {
        that.stopTransition(initSlide);
        index--;
        that.disableButtons();

        if(index < 0) {
            index = imagesList.length -1;
        }

        var mover = -that.width * (index+1);
        console.log(index);
        console.log('Init:'+mover);
        console.log(-that.width * index);

        var moveImage = setInterval(function(){
            images.style.left = mover+'px';
            mover++;

            if(mover == -that.width * index){
                that.stopTransition(moveImage);
                that.init();
            }
        },1);
    }

    //function to auto slide to next slide
    this.autoSlide = function() {
        index++;
        that.disableButtons();
        if(index > imagesList.length-1) {
            index = 0;
        }
        console.log(index);
        var mover = -that.width* (index-1);

        var slide = setInterval(function(){
            images.style.left = mover+'px';
            mover--;
            if(mover == -that.width*index){
                that.stopTransition(slide);
            }
        },1);
    }

    this.stopTransition = function(intervalFunction) {
        clearInterval(intervalFunction);
        that.enableButtons();
    }

    // function to disable buttons
    this.disableButtons = function() {
            nextBtn.setAttribute('disabled','true');
            prevBtn.setAttribute('disabled','true');
    }

    this.enableButtons = function() {
       nextBtn.removeAttribute('disabled');
       prevBtn.removeAttribute('disabled');
    }

    this.init = function() {
         initSlide = setInterval(this.autoSlide,8000);
    }

    // function to slide image according to the rounded buttons
    this.roundedBtnSlide = function() {

    }



    

    // styling for slider
    slider.style.width = this.width+'px';
    slider.style.height = this.height+'px';
    slider.style.position = 'relative';
    slider.style.overflow = 'hidden';

    

    for (var i = 0; i < imagesList.length; i++) {
        
            imagesList[i].style.width = this.width+'px';
            imagesList[i].style.height = this.height+'px';
            imagesList[i].style.display = 'inline-block';
        }


        images.style.width = this.width * imagesList.length + 'px';
        images.style.display = 'flex';
        images.style.position = 'absolute';

        var nextBtn = this.createButton('>',true);
        var prevBtn = this.createButton('<',false);
        this.createRoundedButtons();

        //event handling for button clicked for next and previous slides
        nextBtn.addEventListener('click',this.slideNext);
        prevBtn.addEventListener('click',this.slidePrev);

        //initializing auto slide at the beginning
        var initSlide = setInterval(this.autoSlide,8000);
        



}
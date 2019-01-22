var logginToggle = true;
var hamLoginToggle = false;

        var slider = document.getElementById('slider');
        var height = slider.style.height;
        var slide = new Slider(window.innerWidth, height);

        var myAccount = document.getElementById('myAccount');
        var headerLogin = document.getElementById('headerLogin');

        var hamburger = document.getElementById('hamburger');
        var backBtn = document.getElementById('backBtn');

        var hamMyAccount = document.getElementById('hamMyAccount');
        var hamLogin = document.getElementById('hamLogin');


        //ham function to open hamburger menu
        hamburger.addEventListener('click',function() {
            var container = document.getElementById('container');
            var hamNav =  document.getElementById('hamburgerNav');

            container.style.display = 'none';
            hamNav.style.display = 'block';
        });
        

        //ham back button function to return to container div
        backBtn.addEventListener('click',function() {
            var container = document.getElementById('container');
            var hamNav =  document.getElementById('hamburgerNav');

            hamNav.style.display = 'none';
            container.style.display = 'block';
        });


        //menu login div toggle function

        myAccount.addEventListener('click',function(){
            toggleLoginDiv();
            if(logginToggle) {
                headerLogin.style.display = 'block';
                myAccount.classList.add('clicked');
            }else {
                headerLogin.style.display = 'none';
                myAccount.classList.remove('clicked');
            }
            
        })

        function toggleLoginDiv() {
            if(logginToggle){
                logginToggle = false;
            }else {
                logginToggle =  true;
            }
        }




        // hamburger menu login menu toggle

        hamMyAccount.addEventListener('click',function(){
            toggleLoginDiv();
            if(logginToggle) {
                hamLogin.style.display = 'block';
                hamMyAccount.classList.add('clicked');
            }else {
                hamLogin.style.display = 'none';
                hamMyAccount.classList.remove('clicked');
                
            }
            
        })

        function toggleHamLoginDiv() {
            if(hamLoginToggle){
                hamLoginToggle = false;
            }else {
                hamLoginToggle =  true;
            }
        }


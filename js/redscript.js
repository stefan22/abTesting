document.addEventListener('DOMContentLoaded', function() {
    //globals
    var eltar = [];
    var links = document.querySelectorAll('#whatsOnLink');
    var latest = document.querySelectorAll('.latest-type');
    var x = null;
    var y = null;
    var  pos = document.querySelectorAll('.grid_3.alpha.omega.selected div');
    var nEl;
    var nTx;
    var remFeb;
    var remFebPar;
    //all four columns handle
    eltar = document.querySelectorAll('.grid_3.alpha.omega');
    //bestvalue handle  											
    var best = document.querySelectorAll('.grid_3.alpha.omega.cheapest');
    //sold-out handle
    var sold = document.querySelectorAll('.grid_3.alpha.omega.sold-out');
    //selected handle
    var selected = document.querySelectorAll('.grid_3.alpha.omega.selected');
    //all filters
    var filters = document.getElementById('guest-planner-filters');
    //bognor heading
    var head1 = document.querySelector('.grid_3.alpha.omega.selected_first');
    //regis heading
    //minehead heading
    //skegness heading
    //resort-bognor
    var reBognor = document.
    getElementById('cpMain_ctlPriceMatrixTcm46175856_radBognor');
    // resort-minehead
    var reMine = document.
    getElementById('cpMain_ctlPriceMatrixTcm46175856_radMinehead');
    // resort skegness
    var reSkeg = document.
    getElementById('cpMain_ctlPriceMatrixTcm46175856_radSkegness');

    


    /*
--------------->
Filters:resort
--------------->
*/

    
    function whichResort(e) {
        
        console.log(e.target);
        
        //go through 36 slots n assign classes every four starting at pos 0
        if (eltar.length >= 0) {
          for (var i = 0; i < eltar.length; i=i+4) {
                //bognor regist first column
                if ( i % 4 == 0 &&  i != 0 && i != 4) {
                    //also skip these ones:sold out and music event
                    if( i !=24 && i!=28 && i!=32 && reBognor.checked ) {
                        eltar[i].classList.add('bognor');
                        head1.style.backgroundColor = "#ffd565";
                        console.log('bognor checked');

                    }//also skip

                    else if ( i !=24 && i!=28 && i!=32 && reBognor.checked == false ) {
                        eltar[i].classList.remove('bognor');
                        head1.style.backgroundColor = "#c4dfea";
                        console.log('bognor unchecked');

                    }//unchecked

                }//if bognor

                //regis
                else if (i == 5 || i % 4 == 1) {
                    eltar[i].classList.add('regis');
                    console.log('regis checked');
                }//regis


                //minehead
                else if (i == 5 || i % 4 == 2) {
                    eltar[i].classList.add('minehead');
                    console.log('minehead checked');
                }//minehead

                //skegness
                else if (i == 6 || i % 4 == 3) {
                    eltar[i].classList.add('skegness');
                    console.log('skegness checked');
                }//skegness


               
                
            }
            //forloop
            console.log(eltar);
            return eltar;

        }//if greater than zero
        
        
    }//which resort funct


filters.addEventListener('click', whichResort,false);





    /*
--------------->
Add Variation button
--------------->
*/
    var buttonAdd = document.getElementById('buttonAdd');
    buttonAdd.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(e);
        //go through 36 slots n assign everybody a class
        if (eltar.length > 0) {
            for (var i = 0; i < eltar.length; i++) {
                //first four header => sheader
                if (i <= 3) {
                    eltar[i].classList.add('sheader');
                }//if less than/equal3
                //best value slots => svalue
                else if (i == 4 || i == 6 || i == 7 || i == 21) {
                    eltar[i].classList.add('svalue');
                }//best value
                //sold out => sout
                else if (i == 24 || i == 25 || i == 28 || i == 29) {
                    eltar[i].classList.add('sout');
                }//soldout
                else {
                        if (eltar[i].classList.length > 3 && eltar[i].hasAttribute('class')) {
                        //if u press original button first
                        eltar[i].classList.remove('orig');
                        //press variation
                        eltar[i].classList.add('variation');
                        
                        //add variation innerHTML
                        varAddContent();       //starts
                       
                    } else if (eltar[i].classList.length > 4 ) {
                        eltar[i].classList.remove('variation');
                        eltar[i].classList.add('orig');
                        varRemContent();
                      
                    }
                    // else orig
                }
                //everybody else
                
            }
            //forloop
            console.log(eltar);
            return eltar;
        }
        
        
    }, false);
    //adds classes
    /*
--------------->
Original button (or remove variation)
--------------->
*/
    var buttonRem = document.getElementById('buttonRem');
    buttonRem.addEventListener('click', function(e) {
        e.preventDefault();
        //console.log(e);
       
        //go through 36 slots n assign everybody a class
        if (eltar.length > 0) {
            for (var i = 0; i < eltar.length; i++) {
                //first four header => sheader
                if (i <= 3) {
                    if (eltar[i].classList.length > 4) {
                        x = eltar[i];
                        x.classList.remove('sheader');
                    }
                    //if
                }//if less than/equal3

                //best value slots => svalue
                else if (i == 4 || i == 6 || i == 7 || i == 21) {
                    if (eltar[i].classList.length > 5) {
                        eltar[i].classList.remove('svalue');
                    }
                }//best value

                //sold out => sout
                else if (i == 24 || i == 25 || i == 28 || i == 29) {
                    if (eltar[i].classList.length > 5) {
                        eltar[i].classList.remove('sout');
                    }
                }//soldout

                else {
                    //everybody else ==> variation
                    if (eltar[i].classList.length > 3 && eltar[i].hasAttribute('class')) {
                        eltar[i].classList.remove('variation');
                        eltar[i].classList.add('orig');
                        //add variation innerHTML
                        varRemContent();
                    } else if (eltar[i].classList.length > 4 ) {
                        eltar[i].classList.remove('orig');
                        eltar[i].classList.add('variation');
                        //add variation innerHTML
                    }
                }
                //evrbody else orig
            }
            //forloop
        }
        //if >zero
        console.log(eltar);
        return eltar;
    }, false);
    //back to original



/*
--------------->
varAddContent function
--------------->
*/
    function varAddContent() {
        //add line: Shoreline Hotel =>id:whatsOnLink
        //links handle
        for (var i = 0; i < links.length; i++) {
            //if parent elem has no class
            x = links[i].parentElement;
            if ((x.classList.length == 0 ) ) {
               links[i].innerHTML = "Shoreline Hotel";
            
            }//if i
           
            //#whatsOnLink
        }
        //forloop links
        for (var k = 0; k < latest.length; k++) {
            //if parent elem has no class
            y = latest[k].parentElement;
            if (y.classList.length == 0) {
                latest[k].innerHTML = "from <span class='latest-offer-price'>£544</span>";
                latest[k].innerHTML += "<br/>";
                latest[k].innerHTML += "2 Adults and 2 Children";
               
            }//if k
            //#whatsOnLink
        }
        //forloop latest


        var addNode = function() {

            for(var i=0; i < pos.length; i++) {

                    //has no class
                if (pos[i].classList.length == 0 && pos[i].childElementCount < 5  ) {


                    //exclude Live Music Weekend and Sold
                    if((pos[i].children[0].firstChild.data != "Live Music Weekend") && (pos[i].lastElementChild.innerHTML != "Sold Out")) {

                                nEl = document.createElement('a');
                                nTx = document.createTextNode('February Half Term');
                                nEl.appendChild(nTx);
                                nEl.id = "botlink";
                                nEl.className = "botlink";
                                console.log(nEl);

                                //target these ones
                                
                                pos[i].appendChild(nEl);


                    }//if

        
                }//if


            }//forloop   

           




        };//addNode funct expr

        addNode();


        return true;
    }//varAddContent function



/*
--------------->
varRemContent function
--------------->
*/
    function varRemContent() {
        //add line: Shoreline Hotel =>id:whatsOnLink
        //links handle
        for (var i = 0; i < links.length; i++) {
            //if parent elem has no class
            x = links[i].parentElement;
            if ((x.classList.length == 0) ) {
                links[i].innerHTML = "February Half Term";
            }//the following html already exists 
            
            //#whatsOnLink
        }
        //forloop links
        for (var k = 0; k < latest.length; k++) {
            //if parent elem has no class
            y = latest[k].parentElement;
            if (y.classList.length == 0) {
                latest[k].innerHTML = "Shoreline Hotel";
                latest[k].innerHTML += "<br/>";
                latest[k].innerHTML += "from £136 pp";
               
            }//the following html already exists
            else if (latest[k].textContent == "Shoreline Hotel") {
                console.log('evaluate to true');
                links[k].innerHTML = "Shoreline Hotel";
                links[k].innerHTML += "<br/>";
                links[k].innerHTML += "from £136 pp";
              
            }
            //#whatsOnLink
        }
        //forloop latest


        var remNode = function() {
            
            for(var i=0; i < pos.length; i++) {

                    //has no class
                if (pos[i].lastElementChild.className == "botlink") {

                    //remFeb  =>to be removed
                    //remFebPar => parent container
                    //remFebPar.removeChild(remFeb);

                    remFeb = pos[i].lastElementChild;
                    remFebPar = remFeb.parentNode;
                    remFebPar.removeChild(remFeb);

                }//if    
            }//for        

        };//remNode funct

        remNode();







        return true;
    }
    //varRemContent function









}, false);
//DOMContentLoaded-page-bf-css/imgs

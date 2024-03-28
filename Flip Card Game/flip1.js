var card = angular .module("game",['toaster','ngAnimate'])
                   .controller("flip",function($scope,$timeout,$window,toaster){
                    var cards=[{id:0,
                         image:"India.jpg",  
                         value:"INDIA"
                        },{id:1,
                          image:"green_curry.jpg",
                          value:"THAILAND"
                        },{id:2,
                          image:"tofu.jpg",
                          value:"CHINA"
                        },{id:3,
                          image:"S.Korea.jpg",
                          value:"S.KOREA"  
                        },{id:4,
                          image:"Singapore.jpg",
                          value:"SINGAPORE"  
                        },{id:5,
                          image:"Budaejjigae.jpg",
                          value:"S.KOREA" 
                        },{id:6,
                          image:"Japan.jpg",
                          value:"JAPAN"  
                        },{id:7,
                          image:"Litti_Chokha.jpg",
                          value:"INDIA"  
                        },{id:8,
                          image:"Udon.jpg",
                          value:"SINGAPORE"
                        },{id:9,
                          image:"Thailand.png",
                          value:"THAILAND"
                        },{id:10,
                          image:"Hainanese_Chicken_Rice.jpg",
                          value:"JAPAN"
                        },{id:11,
                          image:"China.png",
                          value:"CHINA"
                        }];
                    $scope.cards=cards;
                    $scope.over=false;
                    $scope.$watch('$viewContentLoaded',function(){
                      shuffleArray($scope.cards); 
                      var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
                      if (mobile) {
                        toaster.pop('warning',"Rotate your screen to play on mobile!!"); 
                            $('#Rules').modal({
                              backdrop: 'static',
                              keyboard: false
                          });                         
                      } else {
                        $('#Rules').modal({
                          backdrop: 'static',
                          keyboard: false
                      });        
                      }
                    }); 
                    // window.onload=function(){
                    //   var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
                    //   console.log(mobile);
                    //   if (mobile) {
                    //     toaster.pop('warning',"Rotate your screen to play on mobile!!"); 
                    //   //   $('#Rules').modal({
                    //   //     backdrop: 'static',
                    //   //     keyboard: false
                    //   // });             
                    //   } else {
                    //     $('#Rules').modal({
                    //       backdrop: 'static',
                    //       keyboard: false
                    //   });
                    //   }
                    // }           
                    // window.onload=function(){
                      // var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
                      // if (mobile) {
                      //     alert("Visit this on a Computer for Better View");              
                      // } else {
                        //  console.log("inside");
                      // }
                    // }                      
                   
                    $scope.goHome=function(){
                      $window.open("../new.html?redirect=true&id=1","_self");
                    }
                    
                var selectedCard=null, WAIT = false,tries=0;
                $scope.turn = function(card) {
                    console.log(card);
                    tries++;
                    card.isFlipped = true;
                    if (selectedCard && tries<=6) {
                      if (selectedCard.value === card.value && selectedCard.id!== card.id) {
                        tries=6;
                        correct(card);
                      } else {
                        incorrect(card);
                      }
                    } else if(!selectedCard && tries<=6){
                      selectedCard = card;
                      console.log(selectedCard);                      
                    }
                    else if(tries>6){
                      // $scope.Discount=false;
                      // $scope.over=true;
                      $('#GameOver').modal();
                      $('#GameOver').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                      card.isFlipped =false;
                      $('#GameOver').on('hide.bs.modal', function () {
                        window.location.href = "../new.html?redirect=true&id=2";
                      });
                    }
                  }
                   
                  function flip(card, i, callback) {
                    $timeout(function() {
                      card.isFlipped = false;
                      WAIT = false;
                      if (callback)
                       callback();
                    }, 10 * (i || 30) );
                  }
              
                  function incorrect(card) {
                    WAIT = true;
                    flip(card);
                    flip(selectedCard, 30, function() {
                      selectedCard = null;
                    });
                  }
              
                  function correct(card) {
                    $('#myModal').modal();
                    $('#myModal').modal({
                      backdrop: 'static',
                      keyboard: false
                  });
                    card.isFlipped = true;
                    card.isFound = true;
                    selectedCard.isFound = true;
                    selectedCard = null;
                  }
                  var shuffleArray = function(cards) {
                    var m = cards.length, t, i;
                    while (m) {
                      i = Math.floor(Math.random() * m--);
                      t = cards[m];
                      cards[m] = cards[i];
                      cards[i] = t;
                    }
                    return cards;
                  }
                   }); 
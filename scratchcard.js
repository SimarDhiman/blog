var app = angular .module("Food",['ngAnimate','toaster','ngCookies'])
                   .controller("main",function($scope,$window,toaster,$cookies){
                    // $('#myModal').modal('show');
                    $scope.arr=[];  
                          $scope.disable=false;
                          $scope.check=function(){
                            params=new URLSearchParams(window.location.search);
                            id=parseInt(params.get("id"));
                            // alert(id);
                            if(id===1){
                              $scope.disable=true;
                              toaster.error("you have already availed your coupon!");
                              href="javaScript:void(0);";
                            }
                            else if(id===2){
                             $scope.disable=true;
                             toaster.error("Sorry you can only try once!");
                             href="javaScript:void(0);";
                            }
                            else{
                              $scope.disable=false;
                              $scope.href="Flip Card Game/flip1.html";
                            }
                          }
                                          
                            var url = window.location.search.substring(1);
                            console.log(url);
                            if(url){
                              $('#myModal').modal('hide');
                            }
                    else{
                      $scope.number=Math.floor(Math.random()*1000);
                      $scope.arr.push($scope.number);
                          console.log($scope.number);
                        //  var data=$scope.number;
                        //  if ($cookies.get(data)) {
                        //   token = JSON.parse($cookies.get(data));
                        //   console.log(token);
                        //  }
                      //     sessionStorage.setItem("code",JSON.stringify($scope.arr));
                      // recieve=JSON.parse(sessionStorage.getItem("code"));
                      //     localStorage.setItem("code",JSON.stringify($scope.arr));
                      // recieve=JSON.parse(localStorage.getItem("code"));
                          $cookies.put("code",$scope.number);
                     var recieve=$cookies.get("code");    
                          console.log(recieve);
                    $('#myModal').modal({
                      backdrop: 'static',
                      keyboard: false
                  });

                };
                  $scope.mobile=function(){
                    view= $window.open("../recipes.html","_self"); 
                  }
                  $scope.Recipe=function(){
                    $window.open("../recipes.html","_self");                    
                  };
                    (function() {
  
                      'use strict';
                      var isDrawing, lastPoint;
                      var container    = document.getElementById('modal-content'),
                          canvas       = document.getElementById('js-canvas'),
                          canvasWidth  = canvas.width,
                          canvasHeight = canvas.height,
                          ctx          = canvas.getContext('2d'),
                          image        = new Image(),
                          brush        = new Image();
                          
                      // base64 Workaround because Same-Origin-Policy
                      image.src = `data:image/png;base64,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`;
                      // image.style.border="2px solid white";
                      image.onload = function() {
                        ctx.drawImage(image, 0, 0);
                        // Show the form when Image is loaded.
                        document.querySelectorAll('.coupon')[0].style.visibility = 'visible';
                      };
                      brush.src =`data:image/png;base64,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`;
                      canvas.addEventListener('mousedown', handleMouseDown, false);
                      canvas.addEventListener('touchstart', handleMouseDown, false);
                      canvas.addEventListener('mousemove', handleMouseMove, false);
                      canvas.addEventListener('touchmove', handleMouseMove, false);
                      canvas.addEventListener('mouseup', handleMouseUp, false);
                      canvas.addEventListener('touchend', handleMouseUp, false);
                      
                      function distanceBetween(point1, point2) {
                        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
                      }
                      
                      function angleBetween(point1, point2) {
                        return Math.atan2( point2.x - point1.x, point2.y - point1.y );
                      }
                      
                      // Only test every `stride` pixel. `stride`x faster,
                      // but might lead to inaccuracy
                      function getFilledInPixels(stride) {
                        if (!stride || stride < 1) { stride = 1; }
                        
                        var pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
                            pdata    = pixels.data,
                            l        = pdata.length,
                            total    = (l / stride),
                            count    = 0;
                        
                        // Iterate over all pixels
                        for(var i = count = 0; i < l; i += stride) {
                          if (parseInt(pdata[i]) === 0) {
                            count++;
                          }
                        }
                        
                        return Math.round((count / total) * 100);
                      }
                      
                      function getMouse(e, canvas) {
                        var offsetX = 0, offsetY = 0, mx, my;
                    
                        if (canvas.offsetParent !== undefined) {
                          do {
                            offsetX += canvas.offsetLeft;
                            offsetY += canvas.offsetTop;
                          } while ((canvas = canvas.offsetParent));
                        }
                    
                        mx = (e.pageX || e.touches[0].clientX) - offsetX;
                        my = (e.pageY || e.touches[0].clientY) - offsetY;
                    
                        return {x: mx, y: my};
                      }
                      
                      function handlePercentage(filledInPixels) {
                        filledInPixels = filledInPixels || 0;
                        console.log(filledInPixels + '%');
                        if (filledInPixels > 60) {
                          canvas.parentNode.removeChild(canvas);
                        }
                      }
                      
                      function handleMouseDown(e) {
                        isDrawing = true;
                        lastPoint = getMouse(e, canvas);
                      }
                    
                      function handleMouseMove(e) {
                        if (!isDrawing) { return; }
                        
                        e.preventDefault();
                    
                        var currentPoint = getMouse(e, canvas),
                            dist = distanceBetween(lastPoint, currentPoint),
                            angle = angleBetween(lastPoint, currentPoint),
                            x, y;
                        
                        for (var i = 0; i < dist; i++) {
                          x = lastPoint.x + (Math.sin(angle) * i) - 25;
                          y = lastPoint.y + (Math.cos(angle) * i) - 25;
                          ctx.globalCompositeOperation = 'destination-out';
                          ctx.drawImage(brush, x, y);
                        }
                        
                        lastPoint = currentPoint;
                        handlePercentage(getFilledInPixels(32));
                      }
                    
                      function handleMouseUp(e) {
                        isDrawing = false;
                      }
                      
                    })();
                   
                  });              
                                  
           
 
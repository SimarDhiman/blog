
var form=angular.module("Feedback",['ui.bootstrap', 'ngResource','ngAnimate', 'toaster','chart.js'])
                .controller("control",function($scope, toaster,$timeout,$window){
                  $scope.arr={id:"",
                    firstname:"",
                    lastname:"",
                    email:"",
                    ratings:"",
                    gender:"",
                    feedback:"" 
                     };  
                     console.log($scope.arr.ratings);
                     $scope.buttonText="Submit";
                     $scope.isenable=false;
                     $scope.data=[
                    //  {id:0,firstname:"Vijay",lastname:"Kumar",email:"vijay@abc.com",ratings:"5",gender:"Male",feedback:"abc"},
                    //  {id:1,firstname:"Kiran",lastname:"Dhiman",email:"Kiran@def.com",ratings:"4",gender:"Female",feedback:"def"},
                    //  {id:2,firstname:"Diksha",lastname:"Bansal",email:"Diksha@ghi.com",ratings:"3",gender:"Female",feedback:"ghi"},
                    //  {id:3,firstname:"Shabnam",lastname:"Dhiman",email:"Shabnam@jkl.com",ratings:"2",gender:"Female",feedback:"jkl"},
                    //  {id:4,firstname:"Simar",lastname:"Bansal",email:"Simar@mno.com",ratings:"1",gender:"Female",feedback:"mno"}
                    ];
                     $scope.labels=['1star','2star','3star','4star','5star'];
                     $scope.rate=[];
                    //  var chartData={
                    //    labels:['1star','2star','3star','4star','5star'],
                    //    datasets:[{
                    //      backgroundColor:['rgba(255, 99, 132,1)','rgba(54, 162, 235,1)','rgba(255, 206, 86,1)',
                    //      'rgba(75, 192, 192,1)','rgba(153, 102, 255,1)'],
                    //      borderColor:['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)',
                    //      'rgba(153, 102, 255, 1)'],
                    //      data:[]
                    //    }]
                    //  }

                    //  $scope.ctx = document.getElementById('pie').getContext('2d');
                    //  $scope.myChart = new Chart($scope.ctx, 
                    //   {
                    //   // {type: 'pie',
                    //   data:chartData,
                    //   options: {scales: {y: {beginAtZero: true}}}
                    // });

                     $scope.colors=['#dfe6ed',
                        '#b2daf0',
                        '#5db3e0',
                        '#167baf',
                        '#004476'];
                        $scope.preLegend = { 
                          elements: {
                            arc: {
                              borderWidth: 0 // border line
                            }
                          }
                        }
                //       $scope.hover=['pink',
                //       'blue',
                //       'white',
                //       'black',
                // //       'purple'];
                //      $scope.options={
                //        legend:{
                //          display:true,
                //          position:'right',
                //          labels: {
                //           fontColor: 'white',
                //          }
                //        },
                //      };
                    //  $scope.piedata=[{ 
                    //   // labels: $scope.labels,
                    //   // data: $scope.rate,
                    //   options:{
                    //     legend:{
                    //       display:false,
                    //     },
                    //   }                    
                    //  }];
                    //  $scope.datasetOverride={
                    //    backgroundColor:['#ff0000',
                    //    '#ff7a00',
                    //    '#f7f605',
                    //    '#a7f705',
                    //    '#275828'],
                    //    hoverBackgroundColor:['pink',
                    //    'blue',
                    //    'white',
                    //    'black',
                    //    'purple']
                    //  };
                      $scope.load=function(){
                        $scope.visible=true;
                        $timeout(function(){
                        $scope.visible=false;
                        toaster.clear();
                        $scope.showTable();
                        },2000);                      
                      }
                    $scope.showTable=function(){  
                    $scope.b=0;
                    $scope.c=0;
                    $scope.d=0;
                    $scope.e=0;
                    $scope.f=0;                                       
                      if($scope.isenable){
                      $scope.data[$scope.index]=$scope.arr;
                      $scope.isenable=false;
                      $scope.visible=false;
                      toaster.pop('success', "Successfully edited!!!");}
                      else{
                      var a=$scope.data.length;
                      $scope.arr.id=a;
                      $scope.data.push($scope.arr);
                      toaster.pop('success', "Successfully saved!!!");
                      $scope.visible=false;
                      localStorage.setItem("code",JSON.stringify($scope.data));
                      recieve=JSON.parse(localStorage.getItem("code"));
                      // if($scope.data.ratings===1){
                      //  document.getElementById('word').style.color="#dfe6ed";
                      // }
                      // else if($scope.data.ratings===2){
                      //  document.getElementById('word').style.color= "#b2daf0";
                      // }
                      // else if($scope.data.ratings===3){
                      //  document.getElementById('word').style.color= "#5db3e0";
                      // }
                      // else if($scope.data.ratings===4){
                      //  document.getElementById('word').style.color="#167baf";
                      // }
                      // else if($scope.data.ratings===5){
                      //  document.getElementById('word').style.color="#004476";
                      // }
                      }
                      // $scope.rate.push();
                      // if($scope.rate[0])
                      // var n=$scope.rate.length;
                      for(var i=0;i<($scope.data.length);i++){
                        console.log($scope.data[i].ratings);
                      if(parseInt($scope.data[i].ratings)===5){
                         $scope.b++;
                        //  $scope.rate.push(b);
                      }
                      else if(parseInt($scope.data[i].ratings)===4){
                        $scope.c++;
                        // $scope.rate.push(c);
                      }
                      else if(parseInt($scope.data[i].ratings)===3){
                        $scope.d++;
                        // $scope.rate.push(d);
                      }
                      else if(parseInt($scope.data[i].ratings)===2){
                        $scope.e++;
                        // $scope.rate.push(e);
                      }
                      else if(parseInt($scope.data[i].ratings)===1){
                        $scope.f++;
                        // $scope.rate.push(f);
                      }
                      console.log($scope.rate);
                      }
                      console.log($scope.b,$scope.c,$scope.d,$scope.e,$scope.f);
                      $scope.rate=[$scope.f,$scope.e,$scope.d,$scope.c,$scope.b];
                      // chartData.datasets[0].data.push($scope.rate);
                      console.log($scope.rate);
                      $scope.buttonText="Submit";
                      $scope.arr=[{id:"",
                      firstname:"",
                      lastname:"",
                      email:"",
                      ratings:"",
                      gender:"",
                      feedback:"" 
                      }];               
                  $scope.rowLimit=2;
                  $scope.totalItems = $scope.data.length;
                  $scope.currentPage = 1;
                  console.log($scope.data);
                }
                $scope.paginate=function(value){                
                  var begin,end,index;
                  begin=($scope.currentPage-1)*$scope.rowLimit;
                  end=begin+$scope.rowLimit;
                  index=$scope.data.indexOf(value);
                  return(begin <= index && index < end);
                };
                $scope.search=function(item){
                  if($scope.searchText==undefined){
                      return true;
                  }
                  else{
                      if(item.firstname.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1||
                      item.lastname.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1||
                      item.email.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1){
                          return true;
                      }
                  }
                  return false; 
              };
              $scope.sendId=function(id){
                $scope.id=id;
              }
              $scope.removeRow=function(){
                var index=$scope.id;
                console.log(index);
                if(index!=-1){
                      console.log($scope.data);
                      if(parseInt($scope.data[index].ratings)===5){
                        $scope.b--;
                      }
                      else if(parseInt($scope.data[index].ratings)===4){
                        $scope.c--;
                      }
                      else if(parseInt($scope.data[index].ratings)===3){
                        $scope.d--;
                      }
                      else if(parseInt($scope.data[index].ratings)===2){
                        $scope.e--;
                      }
                      else if(parseInt($scope.data[index].ratings)===1){
                        $scope.f--;
                      }
                      $scope.data.splice(index, 1);
                      $scope.rate=[$scope.f,$scope.e,$scope.d,$scope.c,$scope.b];
                      console.log($scope.rate);
                      console.log($scope.data);
                
                  //  else{
                  //    console.log("inside else");
                  //    console.log($scope.data);
                  //   if(parseInt($scope.data[index].ratings)===5){
                  //     $scope.b--;
                  //   }
                  //   else if(parseInt($scope.data[index].ratings)===4){
                  //     $scope.c--;
                  //   }
                  //   else if(parseInt($scope.data[index].ratings)===3){
                  //     $scope.d--;
                  //   }
                  //   else if(parseInt($scope.data[index].ratings)===2){
                  //     $scope.e--;
                  //   }
                  //   else if(parseInt($scope.data[index].ratings)===1){
                  //     $scope.f--;
                  //   }
                // $scope.data.splice(index,1);
                // console.log($scope.data);
                // $scope.rate=[$scope.f,$scope.e,$scope.d,$scope.c,$scope.b];
                // console.log(index);
                //   var z=parseInt(index);
                    for(var k=0; k<$scope.data.length;k++){
                         $scope.data[k].id=k;                
                        }                        
                    
                      }
                                          
              };
              
              $scope.editRow=function(index){
                $window.scrollTo(0, angular.element(document.getElementById('feed')).offsetTop);
                console.log(index);
                $scope.buttonText="Save";
                if(index!=-1){
                  $scope.arr=$scope.data[index];
                  console.log($scope.arr);
                  $scope.isenable=true;
                  $scope.index=index;}               
              };  
              $scope.details={
                firstname:"",
                    lastname:"",
                    email:"",
                    ratings:"",
                    gender:"",
                    feedback:"" 
              };
              $scope.modal=function(id){
                $scope.details=$scope.data[id];
              }  
              
              // $scope.info={
              //   labels:$scope.labels,
              //   datasets:[{
              //     data:$scope.rate,
              //     backgroundColor:[
              //       '#ff0000',
              //       '#ff7a00',
              //       '#f7f605',
              //       '#a7f705',
              //       '#275828'
              //     ],
              //     hoverOffset: 4
              //   }]
              // }
               });
                   
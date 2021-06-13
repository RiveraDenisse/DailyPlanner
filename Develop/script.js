var saveBtn = document.querySelector(".saveBtn");
    
    //add timer to the application to id="currentDay"
      var presentTime = moment().format('LLL');
      console.log(presentTime);
      document.getElementById('currentDay').innerHTML=presentTime;
      //variable holding presentHour which will be compared to timeslot hour
      var presentHour = moment().format('HH');
      console.log(presentHour);
      

    //verify with timer if timeslot if past/future/present task
    function timeComparison (hours){
      //convert hour (8,9,10) to HH format
      var hourFormat = "HH";
      var timeslot = moment(hours,hourFormat);
      timeslot =timeslot.format('HH');
      //compare timeslot to presentTime; if timeslot is greater than present then .future
      if (timeslot>presentHour){
        $(`#${hours}hrtextarea`).addClass("future");
      }
      //if timeslot is less than presentTime ==> .past 
      else if (timeslot<presentHour){
        $(`#${hours}hrtextarea`).addClass("past");
      }
      else{
        $(`#${hours}hrtextarea`).addClass("present");
      }    
    }
      //save and retreive task information when savebtn/page refreshed 
        //when button is clicked then the text will be saved
        $(".saveBtn").click(function(){
          var text = $(this).siblings(".description").val();
          var time = $(this).parent().attr("id");
          localStorage.setItem (time,text);      
        })
       
      
        //retreive information when refresh button is pressed
        for (var h=8;h<18; h++){        
        var aValue = localStorage.getItem(h+'hr');
        var element = document.getElementById(`${h}hrtextarea`);
        console.log(`${h}hr`);
        timeComparison (h);
        element.value =aValue;
        }

       //timer to refresh page
       window.setInterval('refresh()',60000);
       //this function will reload the page
       function refresh(){
         window.location.reload();
       }
        
       
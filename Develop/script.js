var saveBtn = document.querySelector(".saveBtn");
var hour = 8;
var i =8;
    
    //TODO: add timer to the application to id="currentday"
      var presentTime = moment().format('LLL');
      console.log(presentTime);
      document.getElementById('currentDay').innerHTML=presentTime;
      //variable holding presentHour which will be compared to timeslot hour
      var presentHour = moment().format('HH:mm');
      console.log(presentHour);
      //convert hour (8,9,10) to HH:mm format
      var hourFormat = "HH:mm";
      var timeslot = moment(hour,hourFormat);
      timeslot =timeslot.format('HH:mm');
      console.log(timeslot);


    //verify with timer if timeslot if past/future/present task
    function timeComparison (){
      //compare timeslot to presentTime if timeslot is less than present then .future
      if (timeslot>presentHour){
        $("textarea").addClass("future");
      }
      else if (timeslot<presentHour){
        $("textarea").addClass("past");
      }
      
          //if formatted is greater than present then .past
          //else .present
    }
      //save and retreive task information when savebtn/page refreshed 
        //when button is clicked then the text will be saved
        $(".saveBtn").click(function(){
          var text = $(this).siblings(".description").val();
          var time = $(this).parent().attr("id");
          localStorage.setItem (time,text);      
        })
       
      
        //retreive information when refresh button is pressed        
        var aValue = localStorage.getItem ('8AM')
        document.getElementById('todo').value =aValue;

        timeComparison ();
var saveBtn = document.querySelector(".saveBtn");
    
    //TODO: add timer to the application to id="currentday"
      var presentTime = moment().format('LLL');
      console.log(presentTime);
      document.getElementById('currentDay').innerHTML=presentTime;

    //verify with timer if timeslot if past/future/present task

    
      //save and retreive task information when savebtn/page refreshed 
        //when button is clicked then the text will be saved
        $(".saveBtn").click(function(){
          var text = $(this).siblings(".description").val();
          var time = $(this).parent().attr("id");
          localStorage.setItem (time,text);      
        })
       
      
        //retreive information when refresh button is pressed
        //var retreiveList = localStorage.getItem("time");
        //document.getElementById("todo").innerHTML = text;
        
        var aValue = localStorage.getItem ('8AM')
        document.getElementById('todo').value =aValue;
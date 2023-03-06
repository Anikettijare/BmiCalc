function myfunc() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let weight_status=false , height_status=false;

    height = height * 12;
    height = height * 0.025;

    newbmivalue = weight / (height * height);
    newbmivalue = Math.round(newbmivalue);
    document.getElementById('bmivalue').value = newbmivalue;


    if(newbmivalue>=18 && newbmivalue<=25){
      document.getElementById('range').innerHTML="Your Healthy";
    }else if(newbmivalue<18){
      document.getElementById('range').innerHTML="Your underweight";
    }else if(newbmivalue>25){
      document.getElementById('range').innerHTML="Your Overweight";
    }
  }
 function menu()
 {
    document.getElementById('registration').style.display = "flex";
 }

function menudel()
{
    document.getElementById('registration').style.display = "none";
    let ride = document.getElementById('ok-l');
    let ride1 = document.getElementById('ok-s');
    let ride2 = document.getElementById('ok-p');
    ride.value = "";
    ride1.value = "";
    ride2.value = "";
};


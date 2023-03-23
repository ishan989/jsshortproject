const endDate = "25 March 2023 12:00 pm"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const difference = (end - now)/1000;
    inputs[0].value=(Math.floor(difference/3600/24))
    inputs[1].value=(Math.floor(difference/3600) % 24)
    inputs[2].value=(Math.floor(difference/60)%60)
    inputs[3].value=Math.floor(difference)%60
}
clock()

setInterval(clock,1000)
{

        clock(),
    
    1000

}
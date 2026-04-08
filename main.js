function classify() {

    let kWhUsg = Number(prompt("Enter your electricity usage (kWh):"));

    if (kWhUsg >= 0 && kWhUsg <= 100) {
    window.alert("Lifeline Consumer: Discounted Electricity rates");
    } 
    else if (kWhUsg >= 101 && kWhUsg <= 200) {
    window.alert("Low Consumption: Normal residential rate");
    } 
    else if (kWhUsg >= 201 && kWhUsg <= 300) {
    window.alert("Average Consumption: Typical electricity usage");
    } 
    else if (kWhUsg >= 301 && kWhUsg <= 500) {
    window.alert("High Consumption: Higher electricity usage");
    } 
    else if (kWhUsg >= 500 && kWhUsg <= Infinity) {
    window.alert("Very High Consumption: Heavy Electricity Users");
    }
    
    }

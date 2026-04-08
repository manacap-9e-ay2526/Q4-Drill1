
    let kWhUsg = Number(prompt("Enter your electricity usage (kWh):"));

    if (kWhUsg >= 0 && kWhUsg <= 100) {
    window.alert("Lifeline Consumer: Discounted Electricity rates");
    } 
    else if (kWhUsg >= 101 && kWhUsg <= 200) {
    window.alert("Low Consumption: 101-200 kWh - Normal residential rate");
    } 
    else if (kWhUsg >= 201 && kWhUsg <= 300) {
    window.alert("Average Consumption: 201-300 kWh - Typical electricity rates");
    } 
    else if (kWhUsg >= 301 && kWhUsg <= 400) {
    
    window.alert("High Consumption: 301-400 kWh - Higher electricity rates");
    } 
    else if (kWhUsg >= 500 && kWhUsg <= 10000) {
    window.alert("Very High Consumption: Above 500 kWh - Heavy Electricity Users");
    }
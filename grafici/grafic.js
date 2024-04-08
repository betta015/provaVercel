const fetchPromise = fetch("https://www.dati.lombardia.it/api/views/2w3d-wa6k/rows.json");
let f=0;
let m=0;
let valore= new Array(0)

fetchPromise.then((response) => response.json())
  .then((data) => {
    caratteristiche = data.data;
    for(i=0;i<caratteristiche.length;i++){
        if(caratteristiche[i][9]=="F"){
            f =f+1;
        } else{
            m=m+1;
        } 
    }
    valore.push((f*100)/caratteristiche.length)
    valore.push((m*100)/caratteristiche.length)
    console.log(valore[0])
    console.log(valore[1])
});

let graph = new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: ["femmine", "maschi"],
        datasets: [{
            backgroundColor: ["#b91d47","#FFAC2F"],
            data: valore
        }]
    },
    options: {
        title: {
            display: true,
            text: "percentuale maschi e femmine brescia"
        }
    }
});
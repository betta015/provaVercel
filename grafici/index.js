const fetchPromise = fetch(
    " https://www.dati.lombardia.it/api/views/2w3d-wa6k/rows.json?accessType=DOWNLOAD",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      caratteristiche = data.data;
  
      for( i=0; i < caratteristiche.length ; i++ ) {
          console.log(caratteristiche[i][9]);
      }
  
    });
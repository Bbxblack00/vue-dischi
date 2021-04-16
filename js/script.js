// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.

// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.


function diskGenerator() {

  new Vue({

    el: '#app',
    data:{
      arrArtists: []
    },
    mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(
        preInfo =>
        {console.log(preInfo);

          artists = preInfo.data.response;
          arrArtists.push(artists);
          console.log(arrArtists);
      })
      .catch(() => console.log(' error'))
    }

  });

}

function init() {

  diskGenerator();

}

document.addEventListener('DOMContentLoaded', init);

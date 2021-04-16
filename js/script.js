// attraverso vue&axios scaricare 10 numeri interi e produrre le box
// corrispondenti, colorandone il bg verde nel caso di numeri pari
// e rossi nel caso di numeri dispari




// chiedere il numero di box da generare all'utente attraverso un prompt
// e generare anche una box rappresentante la somma dei valori ricevuti





// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.

// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.


function boxNumberGenerator() {
  // AXIOS
  new Vue({
        el: '#app',
        data: {

        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music',
                })
                .then(data => {
                    const values = data.data.response;
                    for (let i=0;i<values.length;i++) {
                        const value = values[i];
                        const isPair = value % 2 == 0;
                        this.values.push({
                            value,
                            class: isPair ? 'bg-green' : 'bg-red'
                        });
                    }
                })
                .catch(() => console.log('error'));
        }
    });
}
  }

  function stampBoxes(num) {

    const target = $('#list');

    if (num % 2 == 0) {

      target.append('<li class="box bg-green">' + num + '</li>');

    } else {

      target.append('<li class="box bg-red">' + num + '</li>')

    }

  }

function init() {

  }

}
document.addEventListener('DOMContentLoaded', init);

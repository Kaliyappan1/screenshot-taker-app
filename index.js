const ctx = document.getElementById('myChart');

function getRandomInt (max) {
    return Math.floor(Math.random() * max)
}

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [getRandomInt(100), getRandomInt(100), getRandomInt(100), getRandomInt(100), getRandomInt(100), getRandomInt(100) ],
        borderWidth: 1
      }]
    },
    options: {
        animation: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
      scales: {
        y: {
          min: 0,
          max: 100
        }
      }
    }
  });



const btn = document.querySelector('.src-btn');

btn.addEventListener("click", () => {

     html2canvas(document.body,
    {
        allowTaint: true,
        useCORS: true,
        type: 'view'
    }
    )
    .then(canvas => {
        
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a')
        a.setAttribute('download', 'imageName.png')
        a.setAttribute('href', url);
        a.click();
    })
})



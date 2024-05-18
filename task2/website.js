fetch("https://coding-week-2024-api.onrender.com/api/data")
    .then(response => response.json())
    .then(data => {console.log(data);
        document.getElementById('h1').textContent=data[0].headline;
        document.getElementById('h2').textContent=data[1].headline;
        document.getElementById('h3').textContent=data[2].headline;
        document.getElementById('h4').textContent=data[3].headline;
        document.getElementById('h5').textContent=data[4].headline;
        document.getElementById('h6').textContent=data[5].headline;
        document.getElementById('h7').textContent=data[6].headline;
        document.getElementById('h8').textContent=data[7].headline;

        document.getElementById('d1').textContent=data[0].date;
        document.getElementById('d2').textContent=data[1].date;
        document.getElementById('d3').textContent=data[2].date;
        document.getElementById('d4').textContent=data[3].date;
        document.getElementById('d5').textContent=data[4].date;
        document.getElementById('d6').textContent=data[5].date;
        document.getElementById('d7').textContent=data[6].date;
        document.getElementById('d8').textContent=data[7].date;

        document.getElementById('t1').textContent=data[0].type;
        document.getElementById('t2').textContent=data[1].type;
        document.getElementById('t3').textContent=data[2].type;
        document.getElementById('t4').textContent=data[3].type;

        document.getElementById('a1').textContent=data[0].author;
        document.getElementById('a2').textContent=data[1].author;
        document.getElementById('a3').textContent=data[2].author;
        document.getElementById('a4').textContent=data[3].author;

        document.getElementById('i1').src=data[0].image;
        document.getElementById('i2').src=data[1].image;
        document.getElementById('i3').src=data[2].image;
        document.getElementById('i4').src=data[3].image;
        document.getElementById('i5').src=data[4].image;
        document.getElementById('i6').src=data[5].image;
        document.getElementById('i7').src=data[6].image;
        document.getElementById('i8').src=data[7].image;
        document.getElementById('i9').src=data[8].image;
        document.getElementById('i10').src=data[9].image;
        
    })
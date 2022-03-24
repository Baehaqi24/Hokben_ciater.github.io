const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
     event.preventDefault();
     const newPesanan = document.querySelector('input[name=newPesanan]').value;
     addPesanan(newPesanan);
})

function addPesanan(newPesanan) {
     // membuat element 
     const li = document.createElement('li');
     li.textContent = newPesanan;
     console.log(li);

     // membuat halaman hapus
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'X';
     deleteButton.addEventListener('click', function() {
          deletePesanan(this);
     })

     li.appendChild(deleteButton);
     // append ke ul 
     const ol = document.querySelector('ol');
     ol.appendChild(li);

     console.log(ol);
}

function deletePesanan (todo) {
     const li = todo.parentNode
     li.remove();
}
const scriptURL = ('https://script.google.com/macros/s/AKfycbyMCO0zp7_zQjdKki6kMJ2LH1dfB_wbhZIjjGBs-9BZ7r5IJ2icmOEPdnsxe6_SO1W0/exec');
      const form = document.forms['submit-to-google-sheet']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })
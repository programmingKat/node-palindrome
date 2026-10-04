document.querySelector('button').addEventListener('click', makeReq)

function makeReq(){

  const input = document.querySelector("input").value;
  
  fetch(`/api?palindrome=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });

}
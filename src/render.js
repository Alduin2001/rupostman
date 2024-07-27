
document.querySelector('#form-submit').onsubmit = async (ev)=>{
  ev.preventDefault();
  const url = document.querySelector('#url').value;
  const method = document.querySelector('#method').value;
  const data = JSON.stringify(JSON.parse(document.querySelector('#json-data').value)) || null;
  const response = await getResponse(url,method,data);
  console.log(response);
  document.querySelector('#response').innerText = JSON.stringify(response);
}

async function getResponse(url, method, data) {
  let response;
  switch (method) {
    case "GET":
      response = await fetch(url).then(res=>res.json()).catch(err=>err.json());
      console.log(response.statusText);
      break;
      case "POST":
        
      break;
      case "PUT":
        
      break;
      case "DELETE":
        
      break;
  }
  return response;
}

// xhr 코드 작성
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        let json = JSON.parse(xhr.responseText);
        let root = document.getElementById('root');

        for(let i = 0; i < json.length; i++) {

          let li = document.createElement('li');
          let p = document.createElement('p');
          li.textContent = json[i].name;
          p.textContent = json[i].age;
       

          root.appendChild(li);
          root.appendChild(p);
        }
      }
    };

    xhr.open("GET", "name.json", true);
    xhr.send();
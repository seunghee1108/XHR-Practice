
    // XMLHttpRequest 객체를 생성
    const xhr = new XMLHttpRequest();

    // 상태 변화에 따라 특정 동작을 수행할 수 있도록 함
    xhr.onreadystatechange = function() {

      // State Check 
      // 4 : "DONE"을 의미하며, 모든 데이터가 성공적으로 전송되었고, 응답이 완료되었음
      // 200 : "OK"를 의미하며, 서버가 요청을 성공적으로 처리했음
      // if(xhr.readyState == 4 && xhr.status == 200) {
      if(xhr.readyState == 4 && xhr.status == 200) {

        // JSON 형태로 파싱해서 json 변수에 저장
        let json = JSON.parse(xhr.responseText);

        let ul = document.getElementById('ul');

        // json 배열 순회
        for(let i = 0; i < json.length; i++) {

          let li = document.createElement('li');
          let p = document.createElement('p');
          // let div = document.createElement('div');
          
          // 'name' 속성 값을 <li> 요소의 텍스트 내용으로 설정
          li.textContent = json[i].name;
          // : 'age' 속성 값을 <p> 요소의 텍스트 내용으로 설정
          p.textContent = json[i].age;
          //  'Id' 속성 값을 <div> 요소의 텍스트 내용으로 설정
          // div.textContent = json[i].Id;

          // <ul> 요소의 자식으로 추가
          ul.appendChild(li);
          ul.appendChild(p);
          // ul.appendChild(div);
        }
      }
    };

    // opne(method, url, true : 비동기 false : 동기)
    // api, json. url 다 가능
    xhr.open("GET", "name.json", true);
    // 서버에 전송하는 역할
    xhr.send();
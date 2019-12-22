var req = new XMLHttpRequest();

req.open("GET","./json/image_list.json");

req.onreadystatechange = function(){
    if(this.readyState == 4){
        var data = JSON.parse(this.response);
        for(var i = 0 ; i < data.length ; i++ ){
            var div = document.createElement("div");
            div.setAttribute("class","image");
            div.onclick = function(){
                //원래정석대로 class추가하는법
                /*if(this.getAttribute("class").indexOf("img-selected") == -1){
                    this.setAttribute("class","image img-selected");
                }
                else{
                    this.setAttribute("class","image");
                }*/
                this.classList.toggle("img-selected"); //img-selected클레스 추가하는 토글
            }
            div.onmouseover = function(){
                var element = this;
                this.timerId = setTimeout(
                    function(){
                        element.classList.add("image-magnified");
                    }
                ,500)
            }
            
            div.onmouseout = function(){
                this.classList.remove("image-magnified");
                clearTimeout(this.timerId);
            }
            
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}

req.send();

function selectAll(btn){
    var images = document.getElementsByClassName("image");
    for(var i = 0; i <images.length; i ++ ){
        if(btn.value == "Unselect All"){
            images[i].classList.remove("img-selected");
        }else{
            images[i].classList.add("img-selected");
        }
    }
    if(btn.value == "Unselect All"){
        btn.value = "select All";
    }else{
        btn.value = "Unselect All";
    }
}

function slideShow(btn){
    var images = document.getElementsByClassName("image");
    var index = 0;
    images[index].classList.add("image-magnified");
    var intervalId = setInterval(
        function(){
            images[index].classList.remove("image-magnified");
            index++;
            if(index < images.length){
                images[index].classList.add("image-magnified");
            }else{
                clearInterval(intervalId);
            }
        }
    ,1000)
}

function background(btn){
    if(btn.value == "black"){
        btn.value = "white";
        document.body.style.backgroundColor = "black";
    }else{
        btn.value = "black";
        document.body.style.backgroundColor = "white";
    }
}
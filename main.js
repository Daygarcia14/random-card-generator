window.onload = () => {
    let body = document.body;
    body.classList.add("body");

    let card = document.querySelector("#card");
    card.style.width = "350px";
    card.style.border = "1px solid black";
    card.style.height = "500px";
    card.style.margin = "0px auto";
    card.style.backgroundColor = "white";
    card.style.marginTop = "10px"
    card.style.borderRadius = "15px";

    let aleatoryEmoji = () => {
        let emoji = ["♥", "♦", "♣", "♠"];
        let emojialeatory = (Math.floor(Math.random() * emoji.length));
        return emoji[emojialeatory];
    }

    let emojialeatory = aleatoryEmoji();

    let coloraleatory = () => {
        if (emojialeatory == "♦" || emojialeatory == "♥") {
            return "red"
        } else {
            return "black"
        }
    }

    let emojiup = document.createElement("div");
    emojiup.style.color = "black";
    emojiup.style.fontSize = "140px";
    emojiup.style.paddingLeft = "10px";
    emojiup.style.textAlign = "top"
    emojiup.style.color = coloraleatory();
    emojiup.innerHTML = emojialeatory;
    card.appendChild(emojiup);

    let aleatoryNumber = () => {
        let number = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
        let index = (Math.floor(Math.random() * number.length))
        return number[index];
    }

    let numberStyle = document.createElement("div");
    numberStyle.style.color = "black";
    numberStyle.style.fontSize = "150px";
    numberStyle.style.textAlign = "center";
    numberStyle.style.color = coloraleatory();
    numberStyle.innerHTML = aleatoryNumber();
    card.appendChild(numberStyle);

    let emojidown = document.createElement("div");
    emojidown.style.color = "black";
    emojidown.style.fontSize = "140px";
    emojidown.style.textAlign = "left";
    emojidown.style.paddingLeft = "10px"
    emojidown.style.color = coloraleatory();
    emojidown.style.transform = "rotate(180deg)"
    emojidown.innerHTML = emojialeatory;
    card.appendChild(emojidown);
}


function refreshPage(){
    window.location.reload();
} 

setTimeout(refreshPage, 10000);


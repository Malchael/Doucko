const BismarckImg = "https://azurlane.netojuu.com/images/thumb/a/a3/Bismarck_Zwei.png/800px-Bismarck_Zwei.png";
const UnzenImg = "https://azurlane.netojuu.com/images/thumb/b/b6/Unzen.png/922px-Unzen.png";
const ShinanoImg = "https://azurlane.netojuu.com/images/thumb/a/a9/Shinano.png/800px-Shinano.png";

function Bismarck()
{
    let img = document.getElementById("img");

    if(img.src == BismarckImg)
    {
        alert("Bismarck uz tam je!");
    }
    else
    {
        img.src = BismarckImg; 
    }
}

function Unzen()
{
    let img = document.getElementById("img");

    if(img.src == UnzenImg)
    {
        alert("Unzen uz tam je!");
    }
    else
    {
        img.src = UnzenImg; 
    }
}

function Shinano()
{
    let img = document.getElementById("img");

    if(img.src == ShinanoImg)
    {
        alert("Shinano uz tam je!");
    }
    else
    {
        img.src = ShinanoImg; 
    }
}

function Zmenit() //aby volani funcke Bismarck(); Unzen() a Shinano(), tak tahle funkce musi byt pod nima. 
{
    let input = document.getElementById("input"); 

    if(input.value == "Bismarck")
    {
        Bismarck(); //tato funkce musi byt sepsana nad tim!
    }
    else if(input.value == "Unzen")
    {
        Unzen();
    }
    else if(input.value == "Shinano")
    {
        Shinano();
    }
    else 
    {   
        alert("Nenapsali jste nic ze seznamu! Piste jen Bismarck, Unzen, Shinano!")
    }
}

function nahoda()
{
    let img = document.getElementById("img");

    if(img.src == BismarckImg)
    {
       img.src = UnzenImg;
    }
    else if(img.src == UnzenImg)
    {
        img.src = ShinanoImg;
    }
    else
    {
        img.src = BismarckImg;
    }
}
const BismarckImg = "https://azurlane.netojuu.com/images/thumb/a/a3/Bismarck_Zwei.png/800px-Bismarck_Zwei.png";
const UnzenImg = "https://azurlane.netojuu.com/images/thumb/b/b6/Unzen.png/922px-Unzen.png";
const ShinanoImg = "https://azurlane.netojuu.com/images/thumb/a/a9/Shinano.png/800px-Shinano.png";

function Bismarck()
{
    let img = document.getElementById("img");
    let seznam = document.getElementById("vypis"); 

    if(img.src == BismarckImg)
    {
        alert("Bismarck uz tam je!");
    }
    else
    {
        img.src = BismarckImg;
        seznam.innerHTML += "Bismarck" + "<br>";

    }
    document.getElementById("vypis")=seznam;
}

function Unzen()
{
    let img = document.getElementById("img");
    let seznam = document.getElementById("vypis"); 

    if(img.src == UnzenImg)
    {
        alert("Unzen uz tam je!");
    }
    else
    {
        img.src = UnzenImg; 
        seznam.innerHTML += "Unzen" + "<br>";
    }
    document.getElementById("vypis")=seznam;
}

function Shinano()
{
    let img = document.getElementById("img");
    let seznam = document.getElementById("vypis"); 

    if(img.src == ShinanoImg)
    {
        alert("Shinano uz tam je!");
    }
    else
    {
        img.src = ShinanoImg; 
        seznam.innerHTML += "Shinano" + "<br>";
    }
    document.getElementById("vypis")=seznam;
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

function Random_img()
{
    let img = document.getElementById("img");
    let x = true;
    let pole = [BismarckImg, UnzenImg, ShinanoImg]; //0 1 2 

    while (x==true)
    {
        let nah_cislo = Math.floor((Math.random()*3));

        if (pole[nah_cislo] == img.src)
        {
            
        }
        else 
        {
            img.src = pole[nah_cislo]
            x = false;
        }
    }
}


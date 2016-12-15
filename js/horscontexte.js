// Horscontexte was here !
// ==============================LINK 1 =================================/
// On retire la classe .box-active pour permettre à l'animation de re-trigger

document.getElementById('link1').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

// On ajoute la classe .box-active pour trigger l'animation CSS3
document.getElementById('link1').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');


};
//================================LINK 2 ================================/

document.getElementById('link2').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');

};

document.getElementById('link2').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};
//================================LINK 3 ==============================/
document.getElementById('link3').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link3').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

//================================LINK 4 ==============================/
document.getElementById('link4').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link4').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

//================================LINK 5 ==============================/
document.getElementById('link5').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link5').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

//================================LINK 6 ==============================/
document.getElementById('link6').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link6').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

/// Effets sonore Note faire une fonction condition pour ajouter le mute?
    //Effet Audio Skatepark
    $('#link1').easyAudioEffects({
      ogg: "sonacceuil.ogg",
      mp3: "sonacceuil.mp3",
      eventType: "click",
      playType: "oneShotMonophonic"
    });
    //Effet Audio Accrobranche
    $('#link2').easyAudioEffects({
      ogg: "branchage.ogg",
      mp3: "branchage.mp3",
      eventType: "click",
      playType: "oneShotMonophonic"
    });
    //Effet Audio Skatepark
    $('#link3').easyAudioEffects({
      ogg: "sonskate.ogg",
      mp3: "sonskate.mp3",
      eventType: "click",
      playType: "oneShotMonophonic"
    });
    //Effet Audio Bistrot
    $('#link4').easyAudioEffects({
      ogg: "ambiancecafe.ogg",
      mp3: "ambiancecafe.mp3",
      eventType: "click",
      playType: "oneShotMonophonic"
    });
    //Effet Audio Evenement
    $('#link5').easyAudioEffects({
      ogg: "ambevent.ogg",
      mp3: "ambevent.mp3",
      eventType: "click",
      playType: "oneShotMonophonic"
    });
    //Effet Audio Anniversaire
    $('#link6').easyAudioEffects({
      ogg: "sonannif.ogg",
      mp3: "sonannif.mp3",
      eventType: "click",
      playType: "oneShotMonophonic"
    });

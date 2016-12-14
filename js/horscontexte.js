// Horscontexte was here !

document.getElementById('link1').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');


};
document.getElementById('link1').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');


};

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
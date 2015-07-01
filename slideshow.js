var num=1
img1 = new Image ()
img1.src = "images/Site_13_Ab-.png"
img2 = new Image ()
img2.src = "images/Site_13_Amp.png"
img3 = new Image ()
img3.src = "images/Site_14_Ab-.png"
img4 = new Image ()
img4.src = "images/Site_14_Amp.png" 
img5 = new Image ()
img5.src = "images/Site_16_Ab-.png"
img6 = new Image ()
img6.src = "images/Site_16_Amp.png"
img7 = new Image ()
img7.src = "images/Site_17_Ab-.png"
img8 = new Image ()
img8.src = "images/Site_17_Amp.png" 
img9 = new Image ()
img9.src = "images/Site_18_Ab-.png"
img10 = new Image ()
img10.src = "images/Site_18_Amp.png"
img11 = new Image ()
img11.src = "images/Site_20_Ab-.png" 
img12 = new Image ()
img12.src = "images/Site_20_Amp.png"
img13 = new Image ()
img13.src = "images/Site_31_Ab-.png"
img14 = new Image ()
img14.src = "images/Site_31_Amp.png"
img15 = new Image ()
img15.src = "images/Site_32_Ab-.png"
img16 = new Image ()
img16.src = "images/Site_32_Amp.png"
img17 = new Image ()
img17.src = "images/Site_33_Ab-.png"
img18 = new Image ()
img18.src = "images/Site_33_Amp.png"



text1 = "Site 13, no ab"
text2 = "Site 13, ab"
text3 = "Site 14, no ab"
text4 = "Site 14, ab"
text5 = "Site 16, no ab"
text6 = "Site 16, ab"
text7 = "Site 17, no ab"
text8 = "Site 17, ab"
text9 = "Site 18, no ab"
text10 = "Site 18, ab"
text11 = "Site 20, no ab"
text12 = "Site 20, ab"
text13 = "Site 31, no ab"
text14 = "Site 31, ab"
text15 = "Site 32, no ab"
text16 = "Site 32, ab"
text17 = "Site 33, no ab"
text18 = "Site 33, ab"

function slideshowUp()
{
num=num+1
if (num==19)
{num=1}
document.mypic.src=eval("img"+num+".src")
document.slideshow.show.value=eval("text"+num)
}

function slideshowBack()
{
num=num-1
if (num==0)
{num=18}
document.mypic.src=eval("img"+num+".src")
document.slideshow.show.value=eval("text"+num)
}


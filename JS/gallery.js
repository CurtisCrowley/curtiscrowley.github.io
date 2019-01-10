window.onload = function(){
    slider();
    //next button
}
function slider(){
    console.log("Slider fired");
  
    mybutton = document.getElementById("heroimg");
        mybutton.addEventListener('click', nextClicked(), false);
}
//arrays of text and images
function nextClicked() {
    var heroimg = new Array();
    heroimg[0] = "Assets/hero1.png";
    heroimg[1] = "Assets/hero2.png";
    heroimg[2] = "Assets/hero3.png";
    heroimg[3] = "Assets/hero4.png";
	heroimg[4] = "Assets/hero5.png";
	heroimg[5] = "Assets/hero6.png";
	heroimg[6] = "Assets/hero7.png";
	heroimg[7] = "Assets/hero8.png";
	heroimg[8] = "Assets/hero9.png"; 
	heroimg[9] = "Assets/hero10.png";
	heroimg[10] = "Assets/hero11.png";
	heroimg[11] = "Assets/hero12.png";
	heroimg[12] = "Assets/hero13.png";
	heroimg[13] = "Assets/hero14.png";
	heroimg[14] = "Assets/hero15.png";
	heroimg[15] = "Assets/hero16.png";
	heroimg[16] = "Assets/hero17.png";
	heroimg[17] = "Assets/hero18.png";
	heroimg[18] = "Assets/hero19.png";
	heroimg[19] = "Assets/hero20.png";
	var protxt = new Array();
    protxt[0] = "Yuga Aoyama - Can't stop twinkling - His Quirk is Navel Laser which is a laser beam that he can shoot out of his belly button"
    protxt[1] = "Mina Ashido - Pinky - Her Quirk Acid which allows her to excrete an acidic fluid from her body, as well as controlling its corrosive strength and stickiness  ";
    protxt[2] = "Tsuyu Asui - Froppy - Her Quirk is Frog, she's basically a frog";
    protxt[3] = "Tenya Iida - Ingenium - His Quirk is Engine, which gives him super-speed via jet engines in his legs";
	protxt[4] = "Ochaco Uraraka - Uravity - Her Quirk is Zero Gravity, which allows her to make any object she touches with her fingertips float";
	protxt[5] = "Mashirao Ojiro - Tailman - His Quirk is Tail,  a strong yet sturdy part of his body which he can combine with martial arts in battle.";
	protxt[6] = "Denki Kaminari - Chargebolt - His Quirk is Electrification, which allows him to absorb and emit electricity ";
	protxt[7] = "Eijiro Kirishima - Red Riot - His Quirk is Hardening, which allows him to harden his body to become nearly invulnerable";
	protxt[8] = "Koji Koda - Anima - His quirk is Anivoice, which allows him to communicate with animals";
	protxt[9] = "Rikido Sato - Sugarman - His quirk is Sugar Rush, which gives him five times his normal strength by consuming 10g of sugar, but at the same time his brain functions gradually degrade";
	protxt[10] = "Mezo Shoji - Tentacole - His Quirk Dupli-Arms allows him to grow individual body organs at the tips of these tentacles. He has so far shown to grow eyes, ears, hands, and mouths ";
	protxt[11] = "Kyoka Jiro - Earphone Jack - Her Quirk  Earphone Jack, which allows her to plug her retractable jack-shaped earlobes into objects to listen to sounds or to transmit the sound of her own heartbeat capable of reaching explosive levels";
	protxt[12] = "Hanta Sero - Cellophane - His Quirk, Tape, allows him to shoot incredibly strong cellophane tape from his tape dispenser-like elbows";
	protxt[13] = "Fumikage Tokoyami - Tsukuyomi - His Quirk, Dark Shadow gives him control of a sentient shadow that has a variety of uses, from attacking to defense to support. Within a dark environment, his shadow becomes more powerful but harder to control; in a brightly lit environment, better control comes at a loss of power.";
	protxt[14] = "Shoto Todoroki - Shoto - His Quirk is Half-Cold Half-Hot, which allows him to generate fire from the left side of his body and ice from the right, though over use of one side would cause him to overheat or become frostbitten respectively";
	protxt[15] = "Toru Hagakure - Invisible Girl - Her Quirk, Invisibilty which makes her entire body invisible. She also has light refraction abilities that are not fully explained";
	protxt[16] = "Katsuki Bakugo - Kacchan - His Quirk, Explosion, his sweat having the properties of nitroglycerin which he can detonate at will  ";
	protxt[17] = "Izuku Midoriya - Deku - He is the 9th barer of the Quirk One For All, which stockpiles the user's physical strength and unleashes it as a powerful smash, which can also be passed from one person to another with its existence kept from the public to prevent chaos";
	protxt[18] = "Minoru Mineta - Grape Juice - His quirk Pop Off, grows many small, highly adhesive balls he can pluck from his head. Mineta himself is immune to their adhesive effects and able to trampoline on them as they are also extremely elastic";
	protxt[19] = "Momo Yaoyorozu - Creati - Her Quirk is Creation, possessing the ability to create any non-biological object she can conceive as long as she knows its molecular composition. She creates the objects from the lipids stored in her body but has a limit of she can make and must refuel via eating a large amount of food to make more objects";
	console.log("Next Clicked!");
 
        var counter = 0;
        return function (event) {
            counter++;
            heroimg1 = document.getElementById("heroimg");
            heroimg1.src = heroimg[counter % heroimg.length];
			console.log(heroimg1);
            p1 = document.getElementById("herotext");
            p1.innerHTML = protxt[counter % protxt.length];
        }
}

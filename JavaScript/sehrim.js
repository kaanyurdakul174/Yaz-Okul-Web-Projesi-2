const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rigthArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
  "Antik dönemden günümüze kadar, her bir dönem içerisinde fazlasıyla önemli bir merkez olarak kullanılmış olan Kaş, Türkiye’nin neredeyse tatil başkenti olarak görülen ili Antalya için, en önemli tatil beldelerinden bir tanesidir.Kaş İlçesi'nin toplam nüfusu (2020) 60.839'dur. Kaş bütün tarihi dönemleri boyunca daima önemli bir merkez olarak görülmüştür ve birbirinden muazzam doğal güzellikleri, sizi adeta zamanda bir yolculuğa çıkaran tarihi mekanları ve gezi noktaları ile yalnızca Türkiye’de değil dünyanın her yerinde ön plana çıkmayı başarmaktadır. Yaz tatili açısından Türkiye’de en fazla tercih edilmekte olan şehrimiz olan Antalya, oldukça küçük ve bununla birlikte tarih dolu, yerli halkı fazlasıyla misafirperver olan, tatilin her gününde gezilse bile bitmek bilmeyen birbirinden güzel yerlere sahip olan, berrak bir deniz ve yemyeşil bir doğayı içerisinde barındıran, fazlasıyla dikkat çekici bu ilçeye ev sahipliği yapmaktadır. Ünlü tatil beldemiz Kaş ismini, tam karşısında bulunmakta olan Yunan adası Meis’in etkisi ile almıştır.Meis adası bir göz gibi tam olarak Kaşın karşısında yer almaktadır ve bu durum da Kaşın adayı çevreleyerek bu ismi almasında etkili olmuştur.",

  "Bodrum çarşıdan daha nezih, Alaçatı’dan bir tık daha salaş bir çarşı olarak düşünebileceğiniz, Kaş merkezin takıcılar, el yapımı ürünler satan tasarım ve hediyelik eşya dükkanları, butikler ve küçük cafelere dolu, Arnavut kaldırımlı ve tarihi cumbalı ahşap evlerle dolu görülmeye değer sokakları.Uzunçarşı’da yürüyorsunuz; renk cümbüslü dükkanlar, el işçiliği takılar, türlü türlü hediyelik eşyalar, restoranlar, kafeler derken karşınıza heybetli Kral Mezarı olarak bilinen Lahit cikiyor. Gerçekten de bir krala layık olabilecek bu yer Kaş’ın başlangıç noktası desek yalan olmaz. M.Ö 4. yüzyıla ait bu eser tek bir bloktan oluşmakta. Bloğun altında 8 satırlık bir kitabe, bir erkek, asa ve hüzünlü görünen bir kadın motifi, batı kısmında bir başka kadın figürü ve üst kısmında iki adet aslan figürü bulunuyor.",
  "Türkiye'nin uluslararası turistik destinasyonlarından olan Antalya Kaputaş Plajı, serin ve turkuaz rengindeki suyuyla dikkat çeker. Kaputaş Plajı'nın kendisine özgü suyu, yerin altından akan suyun deniz kıyısında kumlar arasından süzülmesiyle oluşur. Deniz rengini, plajı bütünüyle kaplayan renkli çakıl taşlarına ve serinliğini, dağlardan akan kaynak suyuna borçludur. Bu plaj, fotoğraf kareleri ve tanıtım videoları için o kadar güzel görüntüler sunar ki Türkiye ile ilgili tanıtımlarda mutlaka Kaputaş Plajı'ndan bir görüntü kullanılır.Antalya'nın mavi bayraklı, en gözde plajlarından bir tanesi olan Kaputaş, yaz tatilinde yerli ve yabancı turistlerin favori tatil beldelerinden olan Kaş'a en yakın kum plajdır. Sabah erken vakitlerde hem deniz hem de plaj ortamı sakin olur. Deniz hemen derinleşir ve genelde hafif dalgalıdır. Kristal bir berraklığa sahip olan suyun metrelerce derinliğindeki cisimler bile gözle görülebilir. Rengi ve temizliğiyle herkesi büyüleyen su, kıyıdaki çakıllara vurarak büyüleyici bir ses çıkartır ve Kaputaş Plajı'nın güzelliğine güzellik katar.",
  "Buraya gelip de Kalkan’a gitmemek olur mu? Kalkan, Kaş’ a yaklaşık 25 kilometre mesafede, Yunanlı denizciler tarafından 200 yıl önce kurulmuş ve Likya Uygarlığı’nın izlerini taşıyan bir belde. Kaputaş Plajı ve Patara Plajı, Kalkan sınırları içerisinde bulunan, dünyaca ünlü plajlardan iki tanesi. Buranın diğer bir özelliği de nüfus coğunluğunun İngilizlerden oluşması.Kalkan’da villa sahibi olan İngilizler nüfusun neredeyse %80’ini oluşturmakta. Burası Kaş’a göre daha sakin. Ve biraz daha İngilizler’e göre şekillenmiş. Gece hayatı daha bir Kuşadası barlar sokağı tadında. Kaş’taki salaş butik pansiyon kültürü yok burada mesela. Lüks küçük oteller ve villa turizmi yaygın.",
];

function slideLeft() {
  if (index == 0) index = texts.length - 1;
  else index--;
  gsap.to(".images", 0.3, { x: `${-index * 100}%` });
  textDiv.textContent = texts[index];
  gsap.from(textDiv, 0.5, { y: -20, opacity: 0, ease: "power3.out" });
}

function slideRight() {
  if (index == texts.length - 1) index = 0;
  else index++;
  gsap.to(".images", 0.3, { x: `${-index * 100}%` });
  textDiv.textContent = texts[index];
  gsap.from(textDiv, 0.5, { y: -20, opacity: 0, ease: "power3.out" });
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);

// SWIPE FUNCTIONALITY FOR MOBILE ⬇
let start = null;
sliderCon.addEventListener("touchstart", function (event) {
  if (event.touches.length === 1) start = event.touches.item(0).clientX;
  else start = null;
});

sliderCon.addEventListener("touchend", function (event) {
  let offset = 30; // at least 30px
  if (start) {
    let end = event.changedTouches.item(0).clientX;
    if (end > start + offset) slideLeft();
    if (end < start - offset) slideRight();
  }
});
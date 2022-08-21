const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rigthArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
  "Patara Antik Kenti Fethiye-Kalkan arasında Xanthos Vadisi'nin güneybatı ucunda bugünkü Gelemiş Köyü'nde yer almaktadır ve Likya'nın en önemli ve en eski şehirlerinden biridir.1988 yılından beri kazıları sürdürülen Patara Antik Kenti, arkeolojik ve tarihsel değerlerinin yanında Akdeniz kaplumbağaları Caretta-Carettaların milyonlarca yıldır yumurtalarını bırakıp yavruladıkları ender sahillerden biri olması ile de ayrı bir öneme sahiptir.MÖ 13'üncü yüzyıla ait Hitit metinlerinde şehrin adı Patar olarak geçmektedir. Tepecik Akropolü'nde ele geçen seramik parçaları, Orta Tunç Çağı özelikleri içerirken, yine Tepecik'in doğu yamacı eteklerinde ortaya çıkarılan, Demir Çağı öncesine ait taş balta Patara'nın tarihinin ne kadar eskilere gittiğini göstermektedir. Xanthos Vadisi'nde denize açılabilecek tek yer olması nedeniyle tarih boyunca önemli kent olma özelliğini her çağda devam ettirmiş olan Patara'nın yazıt ve sikkelerde Likya dilindeki adı Patara olarak geçer.Şehre günümüz kalıntılarına giriş, görkemli ve çok iyi korunmuş Roma Zafer Takı'ndan yapılmaktadır.",
  
  
  
  
  "Dünyanın gözde turizm merkezlerinden, Türkiye'nin turizm başkenti Antalya'daki Kekova, sahip olduğu kültürel, tarihi ve doğal zenginlikleriyle girdiği UNESCO Dünya Mirası Geçici Listesinden kalıcıya geçmeyi bekliyor.Bizans imparatoru Konstantinos zamanında Myra Piskoposu Pataralı Aziz Nikolaos'un (Noel Baba) yaşadığı, görev yaptığı ve Kilisesi'nin yer aldığı Myra Antik Kenti ile Tiyatrosu, Üçağız (Teimiusa), Kale (Simena) ve Çayağzı (Andreake) gibi tarihi ve kültürel mekanlarla iç içe geçen Kekova, Antalya'nın cazibe merkezlerinden biri.Uzun yıllar Likya Uygarlığı'nın daha sonra da Roma, Selçuklu ve Osmanlı İmparatorluğu'nun etkisinde kalan yörede, bugün de küçük yerleşim alanları bulunuyor.Doğal güzelliklerin yanı sıra antik ve tarihi eserlerin zenginliği, bölgeyi arkeoloji turizmi açısından çekici kılıyor.Bölge, Likya yazısı ile yazılmış kitabeli mezarlar, kıyıda su içinde Likya tipi lahitler, mendirek ve yapı kalıntıları, ortaçağ kalesinin içinde kayaya oyulmuş tiyatro, kaya mezarları, su sarnıçları, kuzeyde lahitlerden ve az sayıda kaya mezarlarından oluşan nekropol sahası, antik mezarlar ile su içinde kalmış rıhtım, antik kent içinde yüzlerce yıllık Osmanlı camilerinden oluşan zengin bir tarihi mirasa sahip.İster denizden kıvrılarak mavi dalgaların üstünden, ister dağları aşarak patikaların içinden inilen Üçağız, kıyıya dizilen Kale, Çayağzı ile bugünün, dünün ve önceki günlerin egzotik birlikteliğiyle sarmalanmış Akdeniz mavisine bürünmüş, yarısı su üstünde, yarısı su içinde kalmış kent, ziyaretçilerine hayran bırakıyor.",
  

  "Lykia dilinde Habesos veya Habesa adıyla anılan Antiphellos, Lykia Bölgesi'nin eski yerleşim yerlerinden biridir. Antiphellos adını daha sonra alan kent, “kayalıklı yerin karşısındaki yer”, “Phellos’un karşısındaki” anlamına gelmektedir. Lykia Birliği’ne üye kentlerden biri olup, kuzeyindeki Phellos Kenti'nin limanı olduğu ve İ.Ö 6'ncı yüzyıldan beri yaşamını sürdürdüğü bilinmektedir. Hellenistik Dönem'de ise ticari girişimler önem kazanır ve Antiphellos, ana şehir olan Phellos’un gerilemesine karşılık daha çabuk gelişir, Roma İmparatorluğu döneminde önemli bir liman kenti olur.Antiphellos M.Ö 2'nci yüzyıl ortasından itibaren, Lykia Birliği’nde tek oy ile kısıtlanmış olsa bile ticari bir kent olarak hem kendi bastırdığı hem de birlik adına çıkardığı sikkeleriyle tanınmaktadır. Kaş iİçesi'nin içerisindeki antik kente ait kalıntılar, ilçenin çevresinde ve doğu- batı doğrultusunda uzayan yarımada boyunca devam eder. Dikdörtgen taş işçiliği gösteren Hellenistik sur kalıntıları yarımadanın başladığı kesimde ve Meis Adası'na bakan yüzde görülür. Surların limana baktığı yerde bugün camiye dönüştürülmüş kilisenin güneydoğusunda hangi tanrıya ait olduğu bilinmeyen temenosu ile belli bir tapınak kalıntısı bulunmaktadır.",

  
  
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
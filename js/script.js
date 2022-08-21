let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
     english: {
         title:"About Us",
         description:"Private security company Zehinli Doganlar was founded on June 22, 2016 and re-registered on May 29, 2020 as a business entity in order to acquire additional codes for the GKVED. The enterprise operates on the basis of the Unified State Register No. 24594443 dated May 29, 2020 and the Charter of the enterprise issued by the Ministry of Economy and Development of Turkmenistan."
   },
     turkmen: {
         title:"Biz Barada",
         description:"Zehinli doganlar hususy gorag kärhanasy 2016-njy ýylyň 22-nji iýunynda döredildi we YIGDK (ykdysady işleriň görnüşleriniň döwlet klassifikatory) görä goşmaça kodlar almak üçin 2020-nji ýylyň 29-njy maýynda hojalyk jemgyýeti hökmünde gaýtadan hasaba alyndy. Kärhana, 2020-nji ýylyň 29-njy maýynda çykan 24594443 belgili Döwlet sanawy we Türkmenistanyň Ykdysadyýet we ösüş ministrligi tarapyndan berilen kärhananyň tertipnamasy esasynda hereket edýär."
   },
     russian: {
         title:"О нас",
         description:"Частное охранное предприятие «Зехинли доганлар» основано в 22-го июня 2016 года и перерегистрировано 29-го  мая 2020 года как хозяйственное общество, чтобы приобрести дополнительные коды по ГКВЭД. Предприятие действует на основании Единого государственного реестра № 24594443 от 29-го мая 2020 года и Устава предприятия, выданного Министерством Экономики и Развития Туркменистана."
   }
 }
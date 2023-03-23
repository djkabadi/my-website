<template>
    <div  class="outer-root-div">
        <div class="or-content">
            <div class="mix-title-div">
            <div class="mtd-c">
                <h1>browse my mixes</h1>
            </div>
        </div>

        <div id="mts" class="mix-top-section">
                <div class="mts-content">
                    <div class="mts">
                        
                    </div>

                    <div class="search-mix">
                        <!-- <input  v-model="searchMix" placeholder="search mix" type="text" id="search-mix-btn"> -->
                        <input 
                        :value="searchMix"
                        @input="event => searchMix = event.target.value"
                        placeholder="search mix"
                        type="text"
                        id="search-mix-btn">
                    </div>
                </div>
        </div>
            
        <div class="browse-categories">
                <div class="bc-container">
                    <div @click="mixCategorySelected" class="bc-content">
                        <p class="all mix-category active">all</p>
                        <p class="reggae mix-category">popular</p>
                        <p class="afro mix-category">latest</p>
                    
                    </div>
                </div>
        </div>

        <div v-if="searchMix==''">

            <MyMixes v-if="time==='all'" :mixName=items />
            <MyMixes v-else-if="time==='latest'" :mixName=latest />
            <MyMixes v-else-if="time==='popular'" :mixName=popular />
            <MyMixes v-else-if="searchMix!=''" :mixName=filteredMixes />
        </div>

        <div v-else class="mx-parent">
            <NuxtLink class="mix-wrapper"  v-for="item in filteredMixes" :key="item.title" :to="'/mixes/'+item.id">
                <div  class="mix-container">
                    <div class="image-container">
                        <img :src="item.image_url" :alt=item.id>
                    </div>

                    <div class="details-container">
                        <h1>{{item.title}}</h1>
                        <p>{{item.date}}</p>
                    </div>

                </div>
            </NuxtLink>
        </div>


         
        </div>

    </div>
</template>

<script setup>



import {computed} from 'vue';



defineProps({
    mixName:Object,
    
})



let searchMix = ref('')

let time = ref('all')
setTimeout(()=>{
    document.getElementById("mts").style.opacity = .5;
},1220000)

function mixCategorySelected(e){
    let mixCategoriesPContainer = document.querySelector('.bc-content')

    let selectedCategory = e.target
    mixCategoriesPContainer.querySelector('.active').classList.remove('active')
    selectedCategory.classList.add('active')

    time.value = selectedCategory.textContent
}



//fetch all the latest mixes
const {data:latest} = await useFetch(`/api/filter/latest`)

//fetch all the popular mixes
const {data:popular} = await useFetch(`/api/filter/popular`)

//fetch all mixes
const {data:items} = await useFetch(`/api/mixes`)

const mixes = [
    {
        "id":"the-bill-experience-mix" ,
        "title": "the billion exp mix",
        "date": 2022,
        "mix_likes":123,
        "youtube_url":"",
        "download_url":"",
        "period":"latest",
        "description": [
            " 1.Woosh by Mr Right {Buruklyn Boyz}",
            " 2.Charged Up by Mando x Natty",
            " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
            " 4.Blanda by Ghetto Champs ft Rudra Kartel",
            " 5.Avoid Those People by Wakadinali ft All Stars",
             "6.Love Song by Wakadinali",
            " 7.Wild by Buruklyn Boyz, Ajay",
            " 8.Step by Smurph k27 ft Chana 4 Prez",
            " 9.Nairobi by Buruklyn Boyz",
             "10.Mtoto ni Mrembo by Wakadinali",
            " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
             "12.Mrenga by Wakadinali",
            "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
             "14.Billie Jean by Buruklyn Boyz",
            " 15.Location 58 by Buruklyn Boyz",
            " 16.Piga Lean by Buruklyn Boyz",
            " 17.Extra Pressure by Wakadinali",
            " 18.Nairobbery by PRXNCE",
            " 19.Iraq by Natty",
            " 20.2 Faced by Yammy Gang ft YS 28th",
            " 21.NyaraNyara by Wakadinali",
            " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
             "23.Mbona by Boutross",
             "24.Fine Settings by Trio Mio",
             "25.Umoroto by Wakadinali",
         ],
         "category": "",
         "image_url":"https://github.com/djkabadi/images/blob/main/GREATEST%20MIX1.jpg?raw=true"
      },
    {
        "id":"afrobeat-mix-vol-3" ,
        "title": "afrobeat mix vol 3",
        "date": 2022,
        "mix_likes":322,
        "youtube_url":"",
        "period":"latest",
        "download_url":"",
        "description": [
            " 1.Woosh by Mr Right {Buruklyn Boyz}",
            " 2.Charged Up by Mando x Natty",
            " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
            " 4.Blanda by Ghetto Champs ft Rudra Kartel",
            " 5.Avoid Those People by Wakadinali ft All Stars",
             "6.Love Song by Wakadinali",
            " 7.Wild by Buruklyn Boyz, Ajay",
            " 8.Step by Smurph k27 ft Chana 4 Prez",
            " 9.Nairobi by Buruklyn Boyz",
             "10.Mtoto ni Mrembo by Wakadinali",
            " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
             "12.Mrenga by Wakadinali",
            "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
             "14.Billie Jean by Buruklyn Boyz",
            " 15.Location 58 by Buruklyn Boyz",
            " 16.Piga Lean by Buruklyn Boyz",
            " 17.Extra Pressure by Wakadinali",
            " 18.Nairobbery by PRXNCE",
            " 19.Iraq by Natty",
            " 20.2 Faced by Yammy Gang ft YS 28th",
            " 21.NyaraNyara by Wakadinali",
            " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
             "23.Mbona by Boutross",
             "24.Fine Settings by Trio Mio",
             "25.Umoroto by Wakadinali",
         ],
         "category": "",
         "image_url":"https://github.com/stancillous/e-images/blob/main/AFROBT3.jpg?raw=true"
      },
    {
        "id":"kenyan-drill-mix" ,
        "title": "kenyan drill mixtape",
        "date": 2022,
        "mix_likes":78,
        "youtube_url":"",
        "period":"latest",
        "description": [
           " 1.Woosh by Mr Right {Buruklyn Boyz}",
           " 2.Charged Up by Mando x Natty",
           " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
           " 4.Blanda by Ghetto Champs ft Rudra Kartel",
           " 5.Avoid Those People by Wakadinali ft All Stars",
            "6.Love Song by Wakadinali",
           " 7.Wild by Buruklyn Boyz, Ajay",
           " 8.Step by Smurph k27 ft Chana 4 Prez",
           " 9.Nairobi by Buruklyn Boyz",
            "10.Mtoto ni Mrembo by Wakadinali",
           " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
            "12.Mrenga by Wakadinali",
           "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
            "14.Billie Jean by Buruklyn Boyz",
           " 15.Location 58 by Buruklyn Boyz",
           " 16.Piga Lean by Buruklyn Boyz",
           " 17.Extra Pressure by Wakadinali",
           " 18.Nairobbery by PRXNCE",
           " 19.Iraq by Natty",
           " 20.2 Faced by Yammy Gang ft YS 28th",
           " 21.NyaraNyara by Wakadinali",
           " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
            "23.Mbona by Boutross",
            "24.Fine Settings by Trio Mio",
            "25.Umoroto by Wakadinali",
        ],
        "category": "",
        "image_url":"https://github.com/djkabadi/images/blob/main/drill.jpg?raw=true"
      },
    {
        "id":"afrobeats-vol-4" ,
        "title": "afrobeats vol 4",
        "date": 2022,
        "mix_likes":56,
        "youtube_url":"",
        "download_url":"",
        "period":"latest",
        "description": [
            " 1.Woosh by Mr Right {Buruklyn Boyz}",
            " 2.Charged Up by Mando x Natty",
            " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
            " 4.Blanda by Ghetto Champs ft Rudra Kartel",
            " 5.Avoid Those People by Wakadinali ft All Stars",
             "6.Love Song by Wakadinali",
            " 7.Wild by Buruklyn Boyz, Ajay",
            " 8.Step by Smurph k27 ft Chana 4 Prez",
            " 9.Nairobi by Buruklyn Boyz",
             "10.Mtoto ni Mrembo by Wakadinali",
            " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
             "12.Mrenga by Wakadinali",
            "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
             "14.Billie Jean by Buruklyn Boyz",
            " 15.Location 58 by Buruklyn Boyz",
            " 16.Piga Lean by Buruklyn Boyz",
            " 17.Extra Pressure by Wakadinali",
            " 18.Nairobbery by PRXNCE",
            " 19.Iraq by Natty",
            " 20.2 Faced by Yammy Gang ft YS 28th",
            " 21.NyaraNyara by Wakadinali",
            " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
             "23.Mbona by Boutross",
             "24.Fine Settings by Trio Mio",
             "25.Umoroto by Wakadinali",
         ],        "category": "",
         "image_url":"https://github.com/stancillous/e-images/blob/main/AFROBEAT%204.jpg?raw=true"
      },
    {
        "id": "the-addiction-mix",
        "title": "the addiction mix",
        "date": 2022,
        "period":"popular",
        "description": [
            '1. Summer YoMuthi by Blaq Diamond',
            '2. Woza by Mr JazziQ, Kabza De Small & Lady Du',
            '3. Banyana by DJ Maphorisa & Tyler ICU',
            '4. Sengizwile by Mas Musiq ft Aymos & Young Stunna',
            '5. Sungba Rmx by Asake ft Burna Boy',
            '6. Catalia by Junior Da Rocka & Lady Du',
            '7. Le Plane ELandile by Major League DJz & Abidoza ft Cassper Nyovest, Kammu Dee & Ma Lemon',
            '8. 66 & Dipatje Tsa felo by Felo Le Tee & Myztro ft Daliwonga',
            '9. Adiwele by Young Stunna ft Kabza De small & DJ Maphorisa',
            '10. Paris by Q-Mark & TpZee ft African Papi',
            '11. MangDakiwe by Dj Obza ft Leon Lee',
            '12. John Vuli Gate by MApara A Jazz ftt Ntosh Gazi & Colano',
            '13. Shayi Mpempe by Mavuthela x Swizz Panache x Ribby',
            '14. Jola by De Mthuda ft Sino Msolo, Da Muziqal Chef',
            '15. Champion Sound by Davido, Focalistic',
            '16. Amanikiniki by MFR Souls ft Major League DJz, Kamo Mphela & Bontle Smith',
            '17. Gqoz Gqoz by Busta 929 ft Mafidzodzo',
        ],
        "category": "",
        "mix_likes":324,
        "image_url":"https://github.com/djkabadi/images/blob/main/ADDICTION%201%20AMAPIANO.jpg?raw=true"
      },
      {
        "id":"pop-sparkle-vol-2-mix",
        "title":"pop sparkle vol 2-mix",
        "date":2020,
        "mix_likes":99,
        "youtube_url":"",
        "download_url":"",
        "period":"popular",
        "description": [
            " 1.Woosh by Mr Right {Buruklyn Boyz}",
            " 2.Charged Up by Mando x Natty",
            " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
            " 4.Blanda by Ghetto Champs ft Rudra Kartel",
            " 5.Avoid Those People by Wakadinali ft All Stars",
             "6.Love Song by Wakadinali",
            " 7.Wild by Buruklyn Boyz, Ajay",
            " 8.Step by Smurph k27 ft Chana 4 Prez",
            " 9.Nairobi by Buruklyn Boyz",
             "10.Mtoto ni Mrembo by Wakadinali",
            " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
             "12.Mrenga by Wakadinali",
            "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
             "14.Billie Jean by Buruklyn Boyz",
            " 15.Location 58 by Buruklyn Boyz",
            " 16.Piga Lean by Buruklyn Boyz",
            " 17.Extra Pressure by Wakadinali",
            " 18.Nairobbery by PRXNCE",
            " 19.Iraq by Natty",
            " 20.2 Faced by Yammy Gang ft YS 28th",
            " 21.NyaraNyara by Wakadinali",
            " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
             "23.Mbona by Boutross",
             "24.Fine Settings by Trio Mio",
             "25.Umoroto by Wakadinali",
         ],        "category":"",
         "image_url":"https://github.com/djkabadi/images/blob/main/POP%20SPARKLE2.jpg?raw=true"
      },
      {
        "id":"hiphop-epidemix-vol-3-mix",
        "title":"hiphop epidemix vol 3",
        "date":2023,
        "mix_likes":121,
        "youtube_url":"",
        "download_url":"",
        "period":"popular",
        "description": [
            " 1.Woosh by Mr Right {Buruklyn Boyz}",
            " 2.Charged Up by Mando x Natty",
            " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
            " 4.Blanda by Ghetto Champs ft Rudra Kartel",
            " 5.Avoid Those People by Wakadinali ft All Stars",
             "6.Love Song by Wakadinali",
            " 7.Wild by Buruklyn Boyz, Ajay",
            " 8.Step by Smurph k27 ft Chana 4 Prez",
            " 9.Nairobi by Buruklyn Boyz",
             "10.Mtoto ni Mrembo by Wakadinali",
            " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
             "12.Mrenga by Wakadinali",
            "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
             "14.Billie Jean by Buruklyn Boyz",
            " 15.Location 58 by Buruklyn Boyz",
            " 16.Piga Lean by Buruklyn Boyz",
            " 17.Extra Pressure by Wakadinali",
            " 18.Nairobbery by PRXNCE",
            " 19.Iraq by Natty",
            " 20.2 Faced by Yammy Gang ft YS 28th",
            " 21.NyaraNyara by Wakadinali",
            " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
             "23.Mbona by Boutross",
             "24.Fine Settings by Trio Mio",
             "25.Umoroto by Wakadinali",
         ],        "category":"",
         "image_url":"https://github.com/djkabadi/images/blob/main/epidemix3.jpg?raw=true"
      },
      {
        "id":"country-music-mix",
        "title":"country music mix",
        "date":2019,
        "mix_likes":78,
        "youtube_url":"",
        "download_url":"",
        "period":"popular",
        "description": [
            " 1.Woosh by Mr Right {Buruklyn Boyz}",
            " 2.Charged Up by Mando x Natty",
            " 3.Dream ya Kutoka Kwa Block by Buruklyn Boyz",
            " 4.Blanda by Ghetto Champs ft Rudra Kartel",
            " 5.Avoid Those People by Wakadinali ft All Stars",
             "6.Love Song by Wakadinali",
            " 7.Wild by Buruklyn Boyz, Ajay",
            " 8.Step by Smurph k27 ft Chana 4 Prez",
            " 9.Nairobi by Buruklyn Boyz",
             "10.Mtoto ni Mrembo by Wakadinali",
            " 11.Corns Freestyle by Buruklyn Boyz, Ajay",
             "12.Mrenga by Wakadinali",
            "13.Ki Dejavu by Mr Right, Ajay, Davaji, Ksplash",
             "14.Billie Jean by Buruklyn Boyz",
            " 15.Location 58 by Buruklyn Boyz",
            " 16.Piga Lean by Buruklyn Boyz",
            " 17.Extra Pressure by Wakadinali",
            " 18.Nairobbery by PRXNCE",
            " 19.Iraq by Natty",
            " 20.2 Faced by Yammy Gang ft YS 28th",
            " 21.NyaraNyara by Wakadinali",
            " 22.Morio Anzenza by Wakadinali ft Dyana Cods",
             "23.Mbona by Boutross",
             "24.Fine Settings by Trio Mio",
             "25.Umoroto by Wakadinali",
         ],        "category":"",
         "image_url":"https://github.com/djkabadi/images/blob/main/cm1.jpg?raw=true"
      },
      
      {
        "id":"best-of-69",
        "title":"69 mixtape",
        "date":2023,
        "mix-likes":129,
        "download_url":"",
        "period":"latest",
        "description":"",
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/69.jpg?raw=true"
      },
      {
        "id":"trap-agenda-4",
        "title":"trap agenda vol 4",
        "date":2023,
        "mix-likes":217,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/AGENDA%204%20A.jpg?raw=true"
      },
      {
        "id":"hiphop-epidemix-vol-4",
        "title":"",
        "date":2023,
        "mix-likes":183,
        "download_url":"",
        "period":"popular",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/EPIDEMIX%204.jpg?raw=true"
      },
      {
        "id":"gengetone-vol-5-mix",
        "title":"gengetone vol 5 mix",
        "date":2023,
        "mix-likes":321,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/GTONE%205.jpg?raw=true"
      },
      {
        "id":"gengetone-vol-6-mix",
        "title":"gengetone vol 6 mix",
        "date":2023,
        "mix-likes":311,
        "download_url":"",
        "period":"popular",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/GTONE%206.jpg?raw=true"
      },
      {
        "id":"mbogi-genje-mixtape",
        "title":"mbogi genje mixtape",
        "date":212,
        "mix-likes":421,
        "download_url":"",
        "period":"popular",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/MBOGI%20GENJE%20MIX.jpg?raw=true"
      },
      {
        "id":"reggae-relics-vol-1-mix",
        "title":"reggae rlics vol 1 mix",
        "date":2023,
        "mix-likes":129,
        "download_url":"",
        "period":"popular",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/REGGAE%20RELICS.jpg?raw=true"
      },
      {
        "id":"reggae-riddim-mix-vol-1",
        "title":"reggae riddim mixtape vol 1 (ft Dj Sonch)",
        "date":2023,
        "mix-likes":99,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/RR_2.jpg?raw=true"
      },
      {
        "id":"urban-gospel-vol-2-mix",
        "title":"urban gospel vol 2 mix",
        "date":2023,
        "mix-likes":99,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/URBAN%20G2.jpg?raw=true"
      },
      {
        "id":"valentine-affair-mixtape",
        "title":"valentine affair mixtape",
        "date":2023,
        "mix-likes":76,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/VALENTINE%20AFFAIR%20MIX.jpg?raw=true"
      },
      {
        "id":"the-wasafi-experience-mix",
        "title":"the wasafi experience mix (ft Dj Ocheezy)",
        "date":2023,
        "mix-likes":132,
        "download_url":"",
        "period":"",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/WASAFI%20MIXTAPE.jpg?raw=true"
      },
      {
        "id":"blueface-mixtape",
        "title":"blueface mixtape ",
        "date":2023,
        "mix-likes":323,
        "download_url":"",
        "period":"",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/blueface.jpg?raw=true"
      },
      {
        "id":"crunk-it-up-mix",
        "title":"crunk it up mix vol 1",
        "date":2023,
        "mix-likes":832,
        "download_url":"",
        "period":"popular",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/crunk1.jpg?raw=true"
      },
      {
        "id":"crunk-it-up-mix-vol-2",
        "title":"crunk it up mix vol 2",
        "date":2022,
        "mix-likes":352,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/crunk2.jpg?raw=true"
      },
      {
        "id":"dancehall-heist-vol-3",
        "title":"dancehall heist vol 3",
        "date":2023,
        "mix-likes":111,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/dh3.jpg?raw=true"
      },
      {
        "id":"hiphop-epidemix-vol-3-mix",
        "title":"hiphop epidemix vol 3",
        "date":2023,
        "mix-likes":232,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/epidemix5.jpg?raw=true"
      },
      {
        "id":"ragga-charm-vol-2-mix",
        "title":"ragga charm mix vol 2",
        "date":2023,
        "mix-likes":45,
        "download_url":"",
        "period":"latest",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/ragga%20charm2.jpg?raw=true"
      },
      {
        "id":"street-mixtape-vol-4",
        "title":"street mixtape vol 4",
        "date":2022,
        "mix-likes":94,
        "download_url":"",
        "period":"",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/sm4.jpg?raw=true"
      },
      {
        "id":"the-soul'd-out-mixtape",
        "title":"the soul'd out mixtape",
        "date":2022,
        "mix-likes":224,
        "download_url":"",
        "period":"popular",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/sould%20out%201.jpg?raw=true"
      },
      {
        "id":"westlife-edition-mix-vol-2",
        "title":"rnb mixtape (westlife edition)",
        "date":2022,
        "mix-likes":179,
        "download_url":"",
        "period":"",
        // "description":,
        "category":"",
        "image_url":"https://github.com/djkabadi/images/blob/main/westlife.jpg?raw=true"
      },


]

const filteredMixes = computed(()=>{
    return mixes.filter((item)=>item.title.toLowerCase().includes(searchMix.value.toLowerCase()))
})


</script>

<style lang="scss" scoped>
.mix-title-div{
    position: absolute;
    top: 0;
    z-index: 4;
    left: 0;
    height: 60vh;
    width: 100vw;
    .mtd-c{
        display: grid;
        place-items: center;
        // border: 2px solid ;
        height: 100%;
        h1{
            text-transform: uppercase;
            font-size: 3rem;
            color: white;
        }
    }
}
.mix-top-section{
    
    .mts-content{
        .mts{
            height: 50vh;
            width: 100vw;
            position: relative;
            background-image: url(../../assets/images/mixes.jpeg);
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &::after{
                height: 100%;
                background-color: rgba(0, 0, 0, 0.67);
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 139, 0.837);
                opacity: .7;
                width: 100%;
                content: '';
            }

        }

        .search-mix{
            margin: 1rem auto;
            margin-top: 5rem;
            max-width: 500px;
            display: flex;
            justify-content: space-between;
            border-radius: .8rem;
            border: 1px solid gainsboro;
            background-color: whitesmoke;
            input{
                border-radius: 5rem;
                padding: 1.5rem 1rem;
                padding-left: 2rem;
                width: 100%;
                font-weight: 400;
                background-color: inherit;
                border: none;
                color: black;
                &:focus{
                    outline: none;
                }

            }

            #search-btn{
                cursor: pointer;
                width: 2rem;
                margin-right: 1rem;
            }

        }
    }
}


.mx-parent{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem,1fr));
    max-width: 1100px;
    grid-auto-rows: 1fr;
    margin: 1rem auto;
    margin-bottom: 5rem;
    padding: 0 1rem;
    .mix-wrapper{
        color: black;
        text-decoration: none;
        margin: 2rem .9rem;
        .mix-container{
        //  border: 1px solid gainsboro;
        
        // box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.25);
        // border-radius: .9rem;
            .image-container{
                display: grid;
                place-items: center;
                img{
                    width: 100%;
                    height: 100%;
                }
        
            }
            .details-container{
                padding: 1rem;
        
                h1{
                    text-transform: uppercase;
                    font-size: 1.3rem;
                    margin-top: 0.3rem;
                    opacity: .8;
                   
                }
                p{
                    font-weight: 500;
                }
            }
        }
    
    }
}

.browse-categories{
    max-width: 1100px;
    padding-left: 1rem;
    margin: 2rem auto;
    margin-top: 5rem;
    margin-bottom: 1rem;
    .bc-container{
      
        .bc-content{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 18.4rem;
            .mix-category{
                font-size: 1.3rem;
                font-weight: 600;
                text-transform: capitalize;
                padding: 1rem;
                cursor: pointer;
            }
            
            .active{
                text-decoration-color: var(--webColor2);
                color: var(--webColor2);
                position: relative;

                &::after{
                    content: '●';
                    position: absolute;
                    top: 4%;


                }

            }
        }
    }
}



@media screen and (max-width:730px) {
    .mx-parent{
        padding: unset;
    }
}

@media screen and (max-width:600px) {

    .mx-parent{
        display: grid;
        grid-template-columns: 1fr 1fr;

        .mix-wrapper{
        margin: 1rem;
        margin-top: 2rem;
    }
    .mix-container{

        // all: unset;
        border-radius: unset;
        box-shadow: unset;
        border: 1px solid gainsboro;
        .image-container{
            img{
                width: 100%;
                height: 100%;

            }
        }
        .details-container{
            h1{
                font-size: 1.1rem;
            }
        }
    }
    }
    

    .mix-top-section .mts-content .search-mix{
        width: auto;
        margin: 4rem 3rem 0 3rem;
    }
}






</style>



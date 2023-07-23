<template>
    <div class="outer-root-div">

        <div class="banner-wrapper">
            <div class="image-container">
                <div class="image">
                    <img class="banner-img" :src=item[0].image_url alt="">
                    
                        
                </div>
                <div class="dets-container">
                    <div class="dets-content">
                        <h1 class="mix-title">{{item[0].title}} </h1>

                        <div class="tiny-img">
                            <img :src=item[0].image_url alt="">
                        </div>
                        <div class="ctas">
                            <a class="ctas-a" :href=item[0].download_url download>download mix</a>
                            <!-- <a :href=item[0].youtube_url download>Play on youtube</a> -->
                        </div>

                        <div class="fav-container">
                            <div class="fav-content">
                                <NuxtLink class="favicon-parent" to="">
                                    <svg @click="increaseMixLikes" id="fav-icon" aria-label="Like" class="_ab6-" color="#ffffff" fill="#fffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                    <!-- <svg @click="increaseMixLikes" id="fav-icon" aria-label="Like" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg> -->
                                    
                                </NuxtLink>
                                <!-- <svg @click="increaseMixLikes" id="fav-icon" stroke="#fff" stroke-width="1" width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fr-ec-icon fr-ec-icon--default fr-ec-icon-toggle fr-ec-button-toggle--icon" role="img" data-v-f01c3eef=""><g data-v-f01c3eef=""><g data-v-f01c3eef=""><title>I like this</title><path fill-rule="evenodd" clip-rule="evenodd" d="M8.23254 4.93861C9.23984 4.89569 10.2176 5.25233 10.9828 5.92576L11.9951 6.81992L13.0085 5.92576C13.7727 5.25131 14.7616 4.89467 15.7577 4.93861C16.7661 4.9754 17.7154 5.39744 18.4306 6.12605C19.1449 6.85364 19.559 7.82137 19.5987 8.85144C19.6374 9.88049 19.2975 10.8789 18.6412 11.6616L18.5446 11.7761L11.9951 18.4736L5.34904 11.6616C4.69277 10.8779 4.35294 9.88049 4.39262 8.85144C4.43128 7.82137 4.84641 6.85466 5.55965 6.12605C6.27494 5.39744 7.22423 4.9754 8.23254 4.93861ZM4.27866 12.612L11.9951 20.5L19.7096 12.5905C20.5897 11.54 21.0486 10.1901 20.9957 8.79626C20.9438 7.4024 20.3821 6.09233 19.4166 5.10825C18.451 4.12416 17.169 3.55395 15.8076 3.50387C14.4381 3.45176 13.1276 3.92694 12.0959 4.83642L11.9951 4.92533L11.8944 4.83642C10.9126 3.9719 9.67226 3.50183 8.38109 3.50183C8.31394 3.50183 8.24679 3.50285 8.17964 3.50592C6.81623 3.55701 5.53524 4.12927 4.57067 5.11438C2.59475 7.13568 2.46655 10.4292 4.27866 12.612Z" data-v-f01c3eef=""></path></g></g></svg> -->
                                <p class="ml-ttl">{{item[0].mix_likes}}</p>
                            </div>
                        </div>

                    </div>
                        </div>
            </div>
        </div>

        <div class="tl-container">
            <div class="tl-content">
                <h4 class="tlc-h">{{item[0].title}}</h4>
                <ul class="tl-items-div">
                    <li class="tl-items" v-for="list in item[0].description">{{list}}</li>
                </ul>
            </div>
        </div>

        <div class="prev-tab-container">
            <div class="ptc">
                <div class="arrow-div"></div>
                <NuxtLink to="/mixes">back</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

const parameter = useRoute();

let mixID = parameter.params.mix;

const {data:item} = await useFetch(`/api/${mixID}`)

function increaseMixLikes(){
    let mixLikes = item.value[0].mix_likes
    localStorage.setItem('likes',mixLikes)
    mixLikes++
    localStorage.setItem('likes',mixLikes)

    document.querySelector('.favicon-parent').style.fill='red'
    document.querySelector('.ml-ttl').textContent = localStorage.getItem('likes')


}

useHead({
    title:item.value[0].title,
    meta:[
        {
            // name:'description', content:item.value[0].title,
            name:'description', content:`Download and listen to ${item.value[0].title} by DJ Kabadi`,
        },
        {
            name:'twitter:title', content:`DJ Kabadi | ${item.value[0].title}`,
        },

        {
            name:'image', content:item.value[0].image_url,
        },
        {
            name:'twitter:card', content:'summary',
        },
        {
            // name:'twitter:description', content:item.value[0].title,
            name:'twitter:description', content:`Download and listen to ${item.value[0].title} by DJ Kabadi`,
        },
        {
            property:'og:title', content:`DJ Kabadi | ${item.value[0].title}`,
        },
        {
            property:'og:image:url', content:item.value[0].image_url
        },
        {
            property:'og:image', content:item.value[0].image_url
        },
        {
            property:'og:url', content:`https://djkabadi.com/mixes/${item.value[0].id}`,
        },
        {
            property:'og:site:name', content:`DJ Kabadi | ${item.value[0].title}`
        },
        {
            property:'og:type', content:'website'
        },
        {
            property:'og:description', content:`Download and listen to ${item.value[0].title} by DJ Kabadi`
        },
    ]
})



</script>

<style lang="scss" scoped>
.outer-root-div{
    margin: 7rem 0;
}
.banner-wrapper{

    .image-container{
        width:100vw;
        height: 90vh;
        .image{
            z-index: -1;
            width: 100%;
            height: 100%;

            .banner-img{
                position: absolute;
                height: 90%;
                // z-index: -1;
                width: 100%;
                object-fit: cover;
                left: 0;
                top: 7rem;
                filter: blur(8px);
            
            }
            &::after{
                content: '';
                height: 90%;
                width: 100%;
                position: absolute;
                top: 7rem;
                left: 0;
                background-color: rgba(0, 0, 0, 0.49);
            }
            
            
        }
        .dets-container{
            padding: 0 1.4rem;
            height: 70%;
            position: absolute;
            top: 9rem;
            left: 0%;
            
            display: grid;
            place-items: center;
            width: 100%;
            color: white;

            .dets-content{
                display: grid;
                place-items: center;
            }
            .mix-title{
                font-size: 3rem;
                    margin: 1rem 0;
                    text-transform: uppercase;
                    
                }

                .tiny-img{
                    margin: 2rem 0;
                    margin-bottom: 3rem;
                    display: grid;
                    place-items: center;
                    text-align: center;
                    height: 25rem;
                    width: 25rem;
                    img{
                        object-fit: cover;
                        width: 100%;
                        height: 100%;

                    }
                }
                .ctas-a{
                    text-decoration: none;

                    color: white;
                    font-weight: 400;
                    text-transform: capitalize;
                    padding: 1rem 1.8rem;
                    font-size: 1.1rem;
                    margin: 0 .2rem;
                    border: 1px solid rgba(245, 245, 245, 0.529);
                    background-color: black;
                    // margin-right: 1rem;
                    transition: all .3s ease;

                    &:hover{
                        background-color: white;
                        color: black;
                    }
                }

                .fav-container{
                    margin-top: 3rem;
                    margin-bottom: 4rem;
                    .fav-content{
                        // border: 1px solid white;
                        display: flex;
                        align-items: center;
                        
                        a{
                            fill:rgb(255, 255, 255);
                            #fav-icon{
                                cursor: pointer;
                                // background-color: red;
                                width: 2.2rem;
                                margin-right: .3rem;
                            }

                        }
                        
                    }
                }
            }
    }
}

.tl-container{
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem 5rem;
    .tl-content{
        h4{
            text-transform: capitalize;
            font-size: 1.4rem;
            opacity: .9;
            padding: 1rem 0;
        }
        .tl-items-div{
                .tl-items{
                list-style: none;
                padding: .1rem;
                font-size: 1.2rem;
                font-weight: 500;
                color: black;
                transition: all .3s ease;
            }

        }
      
    }
}

.prev-tab-container{
    margin: 0 auto;
    max-width: 1000px;

    .ptc{
        display: flex;
        margin-top: 4rem;
        margin:2rem;
        align-items: center;
        justify-content: flex-start;

        a{
            color: white;
            background-color: black;
            padding: .6rem 2rem;
            font-weight: 500;
            font-size: 1.1rem;
            margin-left: -.6rem;
            text-decoration: none;
        }
    }
}

@media screen and (max-width:730px) {

    .banner-wrapper .image-container .dets-container .mix-title{
        font-size: 2rem;
    } 
    .tl-container{
        padding: 2rem;
    }
}


</style>

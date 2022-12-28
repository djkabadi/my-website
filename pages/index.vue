<template>
    <div class="outer-root-div">

            <section  class="top-section">
                <div class="ts-content">
                   
                    <div class="ts-div">
                        <h1 class="ts-title">dj kabadi</h1>
                        <p class="info">DJ Kabadi is a music enthusiast, hence has a diverse taste in many music genres, from Hip hop, EDM to Reggae music.</p>
                  
                        <NuxtLink to="/mixes" class="ts-cta">DISCOVER</NuxtLink>
                    </div>
                    <div class="bg-img">
                        <!-- <img src="../assets/images/bg.svg" alt=""> -->
                    </div>
    
                    <div class="m-img">
                        <div class="mi-c">
                        </div>
                    </div>
                </div>
            </section>
    
            <section class="mix-section">
                <div class="ms-container">
                    <h2>browse new mixes</h2>
                    <div class="ms-content">
    
                        <div v-for="item in newMixes" :key="item.id" class="mix-item">
                            <NuxtLink :to="'/mixes/'+item.id">
                                <div class="img-c">
                                    <img :src=item.image_url :alt=item.title>
                                </div>
                                <h4 class="mix-title">{{ item .title}}</h4>

                            </NuxtLink>
                        </div>
    
    
                    </div>
                </div>
            </section>
    
    
            <section class="tss-section">
                <div class="tss-container">
    
                    <div class="ts-dets">
                        <div class="tsp">
                            <h4>Have an event in mind?</h4>
                            <p>Book DJ Kabadi for a once in a lifetime experience</p>
                            <NuxtLink to="/contact">
    
                                <div class="btn-div">
                                    <button>Let's talk  </button>
                                    <!-- <div class="arrow">
                                        <img src="../assets/images/arrow.svg" alt="">
                                    </div> -->
                                </div>
                            </NuxtLink>
    
                        </div>
                    </div>
    
                    <div class="tss-content">
                        <!-- <img src="../assets/images/man.jpg" alt=""> -->
                    </div>
    
                    
    
                    <div class="tss-stats">
                        <div class="tss-div">
                            <div class="tss-grid">
                                <div class="ts">
                                    <p>1.8M+</p>
                                    <span>youtube views</span>
                                </div>
                                <div class="ts">
                                    <p>18K+</p>
                                    <span>subscribers</span>
                                </div>
                                <div class="ts">
                                    <p>134+</p>
                                    <span>playlists uploaded</span>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        
    </div>
</template>

<script setup>
// import {gsap} from 'gsap';

// import { onMounted } from 'vue';

// onMounted(pageFuncs)

// function pageFuncs(){
//     console.log('load')
//     let tl = gsap.timeline({
//         ease:'back.out',
//         duration:1
//     })
//     tl.fromTo('.outer-root-div',{opacity:0},{opacity:1})
//     // .fromTo('.header',{opacity:0},{opacity:1},'<')
//     .from('.logo',{opacity:0,y:-20})
//     .from('.box',{y:-20,opacity:0},'<')
//     .from('.nav-links-li',{y:-33,opacity:0,stagger:.05,duration:.6},'<') //the menu links
//     .from('.header-cta-btn',{opacity:0},'<')
//     .fromTo('.header-cta-btn', {opacity:0},{opacity:1},'<')
//     .from('.ts-title, .info, .ts-cta',{opacity:0,stagger:.07, y:32})
// }
const {data:newMixes} = await useFetch('/api/new')

</script>

<style lang="scss" scoped>



.outer-root-div{
    margin: 7rem 0;
    margin-bottom: .1rem;
}

.top-section{
    text-align: center;
    display: grid;
    place-items: center;
    height: 80vh;
    color: rgb(255, 255, 255);
    background-image: url(https://github.com/djkabadi/images/blob/f913e02ef61abfe5c834e791651b8f8da0021d10/KABADI%20HOMEPAGE.png?raw=true);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    background-color: rgb(154, 154, 159);
    // background-color: rgb(214, 202, 202);
    position: relative;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.401);
    }

    .ts-content{
        display: grid;
        max-width: 1344px;
        position: relative;
        margin: 0 auto;
        z-index: 8;
        
        .ts-div{
            // margin-top: 7rem;
            
            padding: 1rem .4rem;
            .ts-title{
                text-transform: uppercase;
                font-weight: bolder;
                font-size: 4.4rem;
                font-size: 10rem;
            }
            .info{
                font-weight: 500;
                font-size: 1.4rem;
                margin-bottom: 3rem;
            }

            a{
                color: rgb(255, 255, 255);
                text-decoration: none;
                padding: 1rem 3rem;
                font-size: 1.1rem;
                background-color: transparent;
                border: 1px solid rgb(255, 255, 255);
                border-radius: .2rem;
                font-weight: 500;
            }
        }

        .bg-img{
            
            img{
                width: 38rem;
                height:100%;
                
            }
        }

        .m-img{
            margin-top: 4rem;
            display: none;
            width: 30rem;
            height: 30rem;
            // border: 1px solid rgba(0, 0, 0, 0.374);
            
            .mi-c{
                width: 30rem;
                height: 30rem;
                // border: 1px solid rgba(0, 0, 255, 0.387);
                margin-left: -2rem;
                margin-top: -2rem;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

    }
}

.mix-section{
    margin: 4rem 1rem;
    margin-top: 6rem;
    padding: 0 5rem;
    .ms-container{
        max-width: 1000px;
        margin: 0 auto;

        h2{
            text-align: center;
            margin: 2rem 0;
            text-transform: uppercase;
            opacity: .8;
            font-size: 1.5rem;
        }
        .ms-content{
            
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
            place-items: center;
            .mix-item{
                box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
                margin: 1.5rem;
                
                a{
                    color: black;
                    text-decoration: none;
                }
                .img-c{
                    position: relative;
                    margin-bottom: .8rem;
                    // border-radius: .9rem;
                    display: grid;
                    place-items: center;

                    img{
                        // border-radius: .6rem;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        // border-radius: .9rem;
                        
                    }
                    &::after{
                        content: '';
                        // border-radius: .9rem;
                            background-color: rgba(0, 0, 0, 0.324);
                            height: 100%;
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                      
                }
                .mix-title{
                    text-transform: capitalize;
                    opacity: .8;
                    text-transform: uppercase;
                    font-size: 1.4rem;
                    text-align: center;
                    padding: 2rem .2rem;
                    
                }

                
                
            }
        }
    }
}


.tss-section{
    // height: 80vh;
    width: 100vw;
    margin-bottom: 5rem;
    position: relative;
    .tss-container{
        height: 100%;
        width: 100%;

        .ts-dets{
            display: grid;
            place-items: center;
            padding: 3rem 1rem;
            z-index: 892;
            .tsp{
                // background-color: white;
                color: white;
                margin-bottom: -32rem;
                // border: 1px solid gainsboro;
                padding: 1rem 2rem ;
                text-align: center;
                h4{
                    font-size: 3.4rem;
                    font-weight: 600;
                }
                p{
                    font-weight: 500;
                    font-size: 1.4rem;
                    opacity: .9;
                    padding: 1rem 0;
                }

                a{
                    text-decoration: none;
                    .btn-div{
                        margin: 1rem 0;
                        height: 3.8rem;
                        justify-content: center;
                        display: flex;
                        align-items: center;
                       
                        button{
                            all: unset;
                            font-weight: bold;
                            font-size: 1.1rem;
                            color: black;
                            background-color: white;
                            text-transform: uppercase;
                            height: 100%;
                            padding: 0 2.5rem;
                            transition: all .2s ease;
                            a{
                                color: black;
                                text-decoration: none;
                            }
    
                        }
                        .arrow{
                            height: 100%;
                            display: grid;
                            place-items: center;
                            background-color: white;
                            display: grid;
                            place-items: center;
                            padding-right: 2rem;                            
                            img{
                                width: 2.5rem;
                            }
    
                        }

                        
                    }
                }


            }
        }
        .tss-content{
            position: relative;
            height: 90%;
            width: 100%;
            z-index: -1;
            height: 70vh;
            background-image: url('../assets/images/man.jpg');
            background-size: cover;
            background-repeat: no-repeat;

            &::after{
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #966BF2;
                background-color: rgba(0, 0, 139, 0.837);
                opacity: .7;
            }

        }

        
        .tss-stats{
            // border: 1px solid gainsboro;
            border-radius: .4rem; 
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.591);

            max-width: 700px;
            padding: 4rem 1rem;
            margin: 0 auto;
            margin-top: -4rem;
            z-index: 8;
            background-color: white;
            .tss-div{
                .tss-grid{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .ts{

                        p{
                            font-size: 5rem;
                            // opacity: .8;
                            font-weight: 900;
                        color: red;


                        }
                        span{
                            font-weight: 500;
                            text-transform: uppercase;

                        }
                    }
                }
            }
        }
    }
}

.btm-section{
    // background-color: #e7ded9;
    // height: 60vh;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 5rem;
    .btm-container{
        .btm-content{
            h2{
                font-weight: bold;
                font-size: 1.5rem;
                text-align: center;
                text-transform: uppercase;
                opacity: .8;
                margin-bottom: 1rem;
            }
            .btm-grid{
                
                display: grid;
                grid-template-columns: 1fr 1fr;
                .btm-txt{
                    display: grid;
                    place-items: center;
                    // height: 80vh;
                    height: 60vh;
                    background-image: url(../assets/images/music2.jpg);
                    width: 100%;
                    background-repeat: no-repeat;
                    
                }
                .btm-img{
                    background-image: url(../assets/images/music.jpg);
                   width: 100%;
                   height: 50vh;
                   background-attachment: fixed;
                   background-repeat: no-repeat;
                }
            }
        }
    }
}

@media screen and (max-width:1000px) {

    .top-section .ts-content .ts-div{
        .ts-title{
            font-size: 7rem;
        }
        .info{
            font-size: 1.4rem;
        }
    }
    .btm-section .btm-container .btm-content .btm-grid {
        display: flex;
        flex-direction: column-reverse;
        border: none;
        .btm-img{
            width: 100vw;
            background-size: contain;
        }
        .btm-txt{
            padding: 2rem 0;
            width: 100vw;
            h2{
                font-style: italic;
                font-size: 1.3rem;
            }
            // display: none;
        }
    }
}

@media screen and (max-width:730px) {
 
    .top-section{
        height: 60vh;

    }
    .top-section .ts-content{
        grid-template-columns: 1fr;
        place-items: center;
        padding: 1.5rem;
        // max-width: unset;
        .ts-div{
            margin-top: 3rem;

            .ts-title{
                font-size: 3rem;
            }
            .info{
                font-size: 1.2rem;
            }
            a{
                font-size: 1rem;
                
            }

        }

        
    
        
    } 

    .mix-section{

        padding: unset;
        margin: 4rem 0;

        .ms-container .ms-content{
        grid-template-columns: 1fr 1fr;
        .mix-item{
            margin: 1rem;
            .mix-title{
                font-size: 1.2rem;
            }
        }
    }
    } 

    .btm-section{
        padding: unset;
    }

    .tss-section .tss-container {
        .ts-dets{
         .tsp{
            h4{
                font-size: 2rem;
            }
            p{
                font-size: 1.1rem;
            }
            
         }   
        }
        .tss-content{
            height: 50vh;
        }

        .tss-stats{
            max-width: 500px;

            .tss-div .tss-grid .ts{
                p{
                    font-size: 3rem;
                }
                
            }
        }
    }
}


@media screen and (max-width:500px) {
 
    .top-section{
        .ts-content{
            display: flex;

        } 
    } 
    .tss-section .tss-container .tss-stats{
        max-width: 400px;

        .tss-div .tss-grid .ts{
            p{
                font-size: 2rem;
            }
            span{
                font-size: .9rem;
            }
            
        }
    }

    .mix-section .ms-container .ms-content .mix-item .mix-title{
        font-size: 1.1rem;
    }



}

@media screen and (max-width:380px) {
    .btm-section .btm-container .btm-content .btm-grid .btm-txt{
        background-size: contain;
        height:60vh;
    }
    
}
</style>
 
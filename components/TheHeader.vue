<template>
    <div>

        <header class="header">
            <div class="header-content">
                <div class="logo-container">
                    <!-- <NuxtLink to="/" class="logo">Dj Kabadi</NuxtLink> -->
                    <NuxtLink to="/"><img class="logo" src="../assets/images/site-logo.png" alt="website logo"></NuxtLink>
                    
                </div>
                <div class="menu-links">
                    <ol>
                        <li class="nav-links-li"><NuxtLink class="nav-links" to="/">home</NuxtLink> </li>
                        <li class="nav-links-li"><NuxtLink class="nav-links" to="/mixes">mixes</NuxtLink> </li>
                        <li class="nav-links-li"><NuxtLink class="nav-links" to="/downloadmixes">download mixes</NuxtLink> </li>
                        <li class="nav-links-li"><NuxtLink class="nav-links" to="/contact">contact</NuxtLink> </li>
                       
                        <li class="git">
                            <div class="git-div">
                                <p>Get in touch </p>
                                <a href="mailto:kelvokabadi254@gmail.com">kelvokabadi254@gmail.com</a>
                            </div>
                            <div class="socials">
                                <a href="https://twitter.com/kelvokabirdy" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/djkabadi254/" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://www.facebook.com/itsdjkabadi/" target="_blank"><img style="width:2.1rem" src="../assets/images/facebook.svg" alt="facebook icon"></a>
                                <a href="https://www.youtube.com/@djkabadi" target="_blank"><img style="width: 2.2rem;" src="../assets/images/youtube.svg" alt="youtube icon"></a>
                            </div>

                        </li>
                    </ol>
                </div>

                <div class="header-cta">
                    <NuxtLink class="header-cta-btn" to="/contact" href="">book now</NuxtLink>
                </div>
            </div>
        </header>


        <div class="box">
            <div class="btn not-active">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { gsap } from "gsap";

import {onMounted} from 'vue'

onMounted(headerFunctions)


function headerFunctions(){
  showMenuLinks()
}

function showMenuLinks(){
    let menuBtn = document.querySelector('.btn')
    let menuLinks = document.querySelector('.menu-links')
    menuBtn.addEventListener('click',()=>{

        if(menuBtn.classList.contains('active')){
            menuBtn.classList.remove('active')
            menuBtn.classList.add('not-active')
        }
        else{
            menuBtn.classList.remove('not-active')
            menuBtn.classList.add('active')
        }

        menuLinks.classList.toggle('showMenuLinks')
        
        //animation for the menu links on small screens
        let navTl = gsap.timeline()
        if(menuLinks.classList.contains('showMenuLinks')){
          navTl.from('.nav-links-li',{x:-100,opacity:0,stagger:.1,ease:'Back.out',duration:.3}) 
                .from('.git',{opacity:0,ease:'Power0.easeNone', duration:.2})
        }
        else{
          navTl.reverse()
        }
    })

    let navRouterLinks = document.querySelectorAll('.nav-links')
        navRouterLinks.forEach((link)=>{
            
            link.addEventListener('click',()=>{
                menuBtn.classList.remove('active')
                document.querySelector('.menu-links').classList.remove('showMenuLinks')
        })
    })
}

</script>

<style lang="scss" scoped>

    .header{
        z-index: 32;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.163);
        background-color: var(--webColor);
        background-color: white;
        color: black;
        
        .header-content{
            margin: 0 auto;
            max-width: 1100px;
            height: 7rem;
            padding: 0 1.4rem;
            align-items: center;
            display: flex;
            justify-content: space-between;
            .logo-container{
                .logo{
                    width: 11rem;
                }
            }

            .menu-links{
                ol{
                    position: relative;
                    .blob-container{
                        display: none;
                        position: absolute;
                        top: 0%;
                        right: -50%;

                        svg{
                            width: 100rem;
                            opacity: .05;
                        }
                    }
                    li{
                      list-style: none;
                    display: inline-block;

                    .router-link-exact-active{
                        color: var(--webColor2);
                    }

                    a{
                        text-transform: capitalize;
                        padding: 0 1rem;  
                        color: black;
                        text-decoration: none;
                        font-size: 1.2rem;        
                        font-weight: 600;
                        opacity: .9;           
                    }


                    }
                    .git{
                        display: none;

                        .socials{
                            display: flex;
                            // justify-content: center;
                            // align-items: center;
                            margin-top: 3rem;

                            a{
                                svg{
                                    width: 2rem;
                                }
                                img{
                                    width: 2.5rem;
                                }
                            }
                        }
 
                    }
                } 
            }

            .header-cta{
                a{
                    color: black;
                    font-weight: 600;
                    padding: 1rem 2rem;
                    text-decoration: none;
                    border-radius: .2rem;
                    font-size: 1.1rem;
                    background-color: transparent;
                    border: 1px solid rgba(0, 0, 0, 0.864);
                    transition: all .2s ease;
                    &:hover{
                        background-color:red;
                        color: white;
                    }
                }
            }
        }
    }


    .box {
      position: absolute;
      z-index: 4343;
        position: fixed;
        // top: 5.5%;
        // right: 5%;
        top: 3.1rem;
        right: 5%;
        display: none;
      transform: translate(-50%, -50%);
    }

    .btn {
        cursor: pointer;
    }

span {
  display: block;
  width: 3rem;
  border-radius: 3px;
  height: .3rem;
  margin: .2rem 0;
  background: rgba(0, 0, 0, 0.812);
  transition: all .3s;
  position: relative;
}

.active span:nth-child(1) {
  height: .4rem;
  width: 2.6rem;
  background-color: rgb(0, 0, 0);
  border-radius: unset;
  animation: ease .7s top forwards;
}

.not-active span:nth-child(1) {
  animation: ease .7s top-2 forwards;
}

.active span:nth-child(2) {
  animation: ease .7s scaled forwards;
}

.not-active span:nth-child(2) {
  animation: ease .7s scaled-2 forwards;
}

.active span:nth-child(3) {
  border-radius: unset;
  width: 2.6rem;
  background-color: rgb(0, 0, 0);
  height: .4rem;
  animation: ease .7s bottom forwards;
}

.not-active span:nth-child(3) {
  animation: ease .7s bottom-2 forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform:rotate(0);
    opacity: 0;
}
50% {
    top: 22px;
    opacity: .2;
    transform: rotate(0);
}
100% {
    top: 22px;
    opacity: 1;
    transform: translateY(-1rem) rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    // top: 22px;
    top: 12px;
    transform: rotate(4deg);
  }
  50% {
    top: 12px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    opacity: 0;
    transform: translateY(2.2rem) rotate(0);

  }
  50% {
    opacity: .2;
    bottom: 12px;
    transform: rotate(0);
  }
  100% {
    opacity: 1;
    bottom: 22px;
    transform: translateY(2.2rem) rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 22px;
    transform: rotate(135deg);
    transform: translateY(2.2rem) rotate(0);

  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

    @media screen and (max-width:600px) {
        .box{
            display:block;
        }
        .header .header-content .menu-links{
            border: 1px solid;
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:whitesmoke;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 1, 1);

            ol{
                height: 60%;
                width: 70%;
                // border: 3px solid red;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                
                li{
                  position: relative;
                  // border: 1px solid red;
                 

                  &::after{
                    content: '';
                    background-color: rgba(0, 0, 0, 0.653);
                    height: .1rem;
                    width: 100%;
                    position: absolute;
                    bottom: -1rem;
                    left: 0;
                    right: 0;

                  }
                  
                    a{
                      font-weight: 900;
                      font-size: 1.7rem;
                      opacity: unset;
                      color: rgb(0, 0, 0);
                      text-transform: uppercase;
                  }

                  &:nth-child(5){
                    border-bottom: unset;
                    &::after{
                      content: unset;
                    }
                  }
                } 
                .git{
                    display: block;
                    padding: 1rem 0;
                    .git-div{
                        p{
                            padding-left: 1rem;
                            font-size: 1.2rem;
                            // opacity: .9;
                            font-weight: 500;
                            color: rgb(0, 0, 0);
                        }
                        a{
                            color: red;
                            text-decoration: underline;
                            font-size: 1.2rem;
                            font-weight: 500;
                            text-transform: lowercase;
                        }
                    }
                   
                }
            }
        }

        .header .header-content .header-cta a{
            display: none;
        }
    }

 //toggle class to show menu

 .header .header-content .menu-links.showMenuLinks{
        opacity: 1;
        visibility: visible;
    }


</style>

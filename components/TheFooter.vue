<template>
    <div>
        <footer class="footer">
            <div class="f-container">
                <h1>let's connect</h1>
                <div class="links-container">
                
                    <a target="_blank" href="https://twitter.com/kelvokabirdy">twitter</a>
                    <a target="_blank" href="https://www.youtube.com/@djkabadi">youtube</a>
                    <a target="_blank" href="https://www.instagram.com/djkabadi254/">instagram</a>
                    <a target="_blank" href="https://www.mixcloud.com/djkabadi/">mixcloud</a>
                    <a target="_blank" href="">soundcloud</a>
                    <a target="_blank" href="https://www.facebook.com/itsdjkabadi/">facebook</a>
               
                </div>

                
                <div class="copyright-container">
                    <div class="cc">
                        <p class="cc-p"></p>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(copyrightDetails)

function copyrightDetails(){
    let currYear = new Date().getFullYear()
    document.querySelector('.cc-p').textContent = `DJ KABADI | Copyright@${currYear}. All rights reserved.`
}
</script>

<style lang="scss" scoped>

.footer{
    background-color: black;
    color: white;
    position: relative;
    height: 40rem;
    .f-container{
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem;
        
        h1{
            text-transform: capitalize;
            font-size: 1.8rem;
            text-align: center;
            opacity: .8;
            padding: 3rem 0;
        }
        .links-container{
            
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            
            a{
                color: white;
                text-decoration: none;
                text-transform: capitalize;
                font-size: 1.2rem;
                font-weight: 600;
                padding: 1rem;
            }
        }

        .copyright-container{
            position: absolute;
            bottom: 5%;
            right: 50%;
            left: 50%;
            width: 15rem;
            transform: translate(-50%,-50%);
            text-align: center;
            .cc{
                p{
                    opacity: .8;
                }
            }
        }
    }
}

</style>
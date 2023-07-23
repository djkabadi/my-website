<template>
    <div class="outer-root-div">

        <div class="c-top-section">
            <div class="img-container"></div>
        </div>
        <div class="c-ts-header">
            <div class="cts">
                <h1>download mixes</h1>
            </div>
        </div>

        <div class="dl-container">
            
            <div class="dl-grid">
                <div class="dl-content">
                <h3>Click on a mix to download.</h3>
                    <div class="dl-mix-item">
                        <p v-for="item in mixes"><a target="_blank" rel="noopener noreferrer" download="" :href=item.download_url>{{item.mix_name}}</a></p>
    
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const {data : mixes}  = await useFetch('/api/othermixes')

</script>

<style lang="scss" scoped>

.outer-root-div{
    .dl-container{
        max-width: 1200px;
        margin: 5rem auto;
        padding: 0 5rem;

        h3{
            font-size: 1.3rem;
            opacity: .8;
            color: var(--webColor2);
            margin: 1rem 0;
            text-decoration: underline;
            text-decoration-color: gainsboro;
            // margin-left: 3rem;
        }
        .dl-grid{
            margin-left: 3rem;
            
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(23rem,1fr));
            .dl-content{
                margin: 1rem 0;
                .dl-mix-item{
                    display: grid;
                    grid-template-columns: 1fr 1fr;

                    p{
                        padding: .2rem 0;

                        a{
                            color: var(--webColor2);
                            color: black;
                            opacity: .9;
                            font-size: 1.2rem;
                            text-transform: capitalize;
                            text-decoration: none;
                            font-weight: 500;
                        }
                    }

                }
            }

        }
    }
}
.c-top-section{
    height: 50vh;
    widows: 100vh;
    margin-bottom: 2rem;
    .img-container{
        height: 100%;
        width: 100%;
        position: relative;
        background-image: url(https://images.pexels.com/photos/377711/pexels-photo-377711.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load);
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &::after{
                height: 100%;
                position: absolute;
                top: 0;
                background-color: rgba(0, 0, 139, 0.837);
                opacity: .6;
                left: 0;
                width: 100%;
                content: '';
            }
    }
}

.c-ts-header{
    position: absolute;
    top: 2rem;
    z-index: 4;
    left: 0;
    height: 50vh;
    width: 100vw;
    .cts{
        display: grid;
        place-items: center;
        height: 100%;
        h1{
            text-transform: uppercase;
            font-size: 3rem;
            color: white;
        }
    }
}

@media screen and (max-width:730px) {
    .outer-root-div .dl-container{
        padding: 1rem;
    }
}

@media screen and (max-width:450px) {
    .outer-root-div .dl-container .dl-grid .dl-content .dl-mix-item{
        grid-template-columns: 1fr;
    }   
}


</style>

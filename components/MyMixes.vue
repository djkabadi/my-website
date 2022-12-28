<template>
    <div class="outer-root-div">
        <div class="mx-parent">
            <div class="grid-p">
                <div class="mix-wrapper" v-for="item in mixName" :key="item.title" >
                    <NuxtLink :to="'/mixes/'+item.id">
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
    </div>
</template>

<script setup>


defineProps({
    mixName:Object,
})

</script>

<style lang="scss" scoped>

.outer-root-div{
    margin: 1rem auto;
    max-width: 1100px;
}
.mx-parent{
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(23rem,1fr));
    margin-bottom: 5rem;
    padding: 0 5rem;
    margin: 1rem 0;

    .grid-p{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem,1fr));
        place-items: center;
        .mix-wrapper{
            color: black;
            text-decoration: none;
            margin: 2rem 1rem;
            
            a{
                color: black;
                text-decoration: none;
                .mix-container{
                 border: 1px solid gainsboro;
                
                    .image-container{
                        display: grid;
                        place-items: center;
                        height: 100%;
                        width: 100%;
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
                            width: 18rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        p{
                            font-weight: 500;
                        }
                    }
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
        // grid-template-columns: 1fr ;
        .grid-p{
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: 1fr;

            
            .mix-wrapper{
                margin-top: 2rem;

                a{
                    .mix-container{
                       
                        .details-container{
                            h1{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
    }
    
    
}

@media screen and (max-width:450px) {
    .mx-parent .grid-p .mix-wrapper a .mix-container .details-container h1{
        width: 15rem;
    }
}

@media screen and (max-width:370px) {
    .mx-parent .grid-p .mix-wrapper a .mix-container .details-container h1{
        width: 13rem;
    }
}

@media screen and (max-width:340px) {
    .mx-parent{
        grid-template-columns: 1fr;
    }
    .mix-wrapper{
        margin: 2rem;
    }
}
</style>
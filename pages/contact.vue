<template>
    <div class="outer-root-div">

        <div class="c-top-section">
            <div class="img-container">
                <!-- <img src="https://exceed-shop.netlify.app/_nuxt/image3.40ab12bc.jpg" alt=""> -->
            </div>
        </div>
        <div class="c-ts-header">
            <div class="cts">
                <h1>get in touch</h1>
            </div>
        </div>
        <div class="c-wrapper">
            <div class="c-container">
                <!-- <h1>Let's connect </h1> -->
                <h1>Got a question or proposal, or just want to say hello? <br> Go ahead.</h1>
                <div class="c-grid">
                    <div class="c-dets">
                        <div class="c-info">
                            <h3>Phone</h3>
                            <p>+254 759 111 303</p>
                            <h3>Email</h3>
                            <a href="mailto:kelvokabadi254@gmail.com">kelvokabadi254@gmail.com</a>
                        </div>

                    </div>
                    <div class="c-form">
                        <form action="" id="form">
                            <input type="text" placeholder="Your name" required> <br>
                            <input type="tel" placeholder="Phone Number" required> <br>
                            <input type="text" placeholder="Type of event eg birthday, wedding ...">  <br>
                            <textarea name="" placeholder="Any additional information..." id="" cols="30" rows="10"></textarea> <br>
                            <button type="submit">shoot</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.c-top-section{
    height: 40vh;
    widows: 100vh;
    margin-bottom: 2rem;
    .img-container{
        height: 100%;
        width: 100%;
        position: relative;
        background-attachment: fixed;
        background-size: cover;
        background-image: url(../assets/images/contact.jpg);
        background-repeat: no-repeat;
        background-position: center;

        &::after{
                height: 100%;
                background-color: rgba(0, 0, 0, 0.67);
                position: absolute;
                top: 0;
                background-color: rgba(0, 0, 139, 0.837);
                opacity: .6;
                left: 0;
                width: 100%;
                content: '';
            }

        h1{
            font-size: 5rem;
            color: white;
            text-transform: uppercase;
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
.outer-root-div{
    margin: 7rem 0;
    .c-wrapper{
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        .c-container{
            h1{
                font-size: 1.4rem;
                font-weight: 500;
                color: black;
                // opacity: .9;
            }
            .c-grid{
                display: grid;
                grid-template-columns: 1fr 1fr;
                .c-dets{
                    .c-info{
                        h3{
                            margin-top: 1.5rem;
                            opacity: .9;
                        }
                            p{
                                font-size: 1.2rem;
                                font-weight: 600;
                                padding: .2rem 0;
                                opacity: .8;
                            }
                            a{
                                font-size: 1.2rem;
                                font-weight: 500;
                                opacity: .8;
                                color: var(--webColor2);

                            }
                    }
                }

                .c-form{
                    #form{

                        input, textarea{
                            padding: 1rem;
                            margin: .5rem 0;
                            width: 100%;
                            font-size: 1.2rem;
                            font-weight: 500;
                            border: 1px solid rgba(36, 35, 35, 0.515);
                            font-family: 'Poppins', sans-serif;
                            background-color: white;
                            color: black;
                            &:focus{
                                outline: none;
                                border: 1px solid rgb(36, 35, 35);
                            }
                        }
                        textarea{
                            height: 8rem;
                        }
                        
                        button{
                            all: unset;
                            font-weight: 500;
                            background-color:black;
                            color: white;
                            padding: 1.4rem 0;
                            width: 100%;
                            margin: 2rem 0;
                            text-align: center;
                            cursor: pointer;
                            text-transform: uppercase;
                            font-size: 1.2rem;
                            transition: all .2s ease;
                            &:hover{
                                background-color: red;
                            }
                        }
                    }
                }
            }
        }
    }
}


@media screen and (max-width:930px) {
    .outer-root-div .c-wrapper{
        max-width: 500px;
        .c-container .c-grid{
            display: flex;
            flex-direction: column;

            .c-dets{
                margin-bottom: 6rem;
            }
        }
    } 
}

</style>

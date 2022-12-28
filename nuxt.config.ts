export default defineNuxtConfig({

    app:{
        head:{
            title:'DJ KABADI | The Baddest',
            
            meta:[
                {charset:"utf-8"},
                {"http-equiv":"x-ua-compatible", content:"IE:edge"},
                {name:"viewport", content:"width=device-width, initial-scale=1.0"},
                {name:"theme-color",content:"#cad8f8"},

            ],
            link:[
                {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
                {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
                {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
                {rel:"manifest", href:"/site.webmanifest"},
            ],
            noscript:[
                { children:"We're sorry but djkabadi.co.ke doesn't work properly without JavaScript enabled. Please enable it to continue."}
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }

    },

    css:[
        "@/assets/styles/main.css",
    ],


})




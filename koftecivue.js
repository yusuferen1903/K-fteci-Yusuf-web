var app = new Vue({
        el: '#app',
        data: {
            sliderIndex:0,
            sliderMargin:500,
            sliderData: [
                {title:"Slider 1.resim",image:"https://kofteciyusuf.com/uploads/pictures/avatars_slide-home_22.08.2019_01_25_32.jpg",url:""},
                {title:"Slider 2.resim",image:"https://kofteciyusuf.com/uploads/pictures/avatars_sitebanner_04.10.2019_06_47_03.jpg",url:""},
                
                ]
        },
        created(){
            this.startSlider();
        },
        methods:{
            startSlider(){
                const vue = this;
                setInterval(function(){
                    if(vue.sliderIndex === vue.sliderData.length-1)
                        vue.sliderIndex = 0;
                    else
                        vue.sliderIndex = vue.sliderIndex + 1;

                }, 4000);
            }
        }
    })
	var app2 = new Vue({
        el: '#app2',
        data: {
            sliderIndex:0,
            sliderMargin:500,
            sliderData: [
                {title:"Slider 1.resim",image:"https://kofteciyusuf.com/uploads/pictures/saglikliet_19.09.2018_05_47_05.jpeg",url:""},
                {title:"Slider 2.resim",image:"https://kofteciyusuf.com/uploads/pictures/kariyer_01.05.2018_06_29_32.jpg",url:""},
				{title:"Slider 3.resim",image:"https://kofteciyusuf.com/uploads/pictures/web-haber-gorseli_28.08.2015_10_36_24.jpg",url:""},
				{title:"Slider 4.resim",image:"https://kofteciyusuf.com/uploads/pictures/facebook1432556099449-800-x-395_25.05.2015_01_37_26.jpg",url:""},
				{title:"Slider 5.resim",image:"https://kofteciyusuf.com/uploads/pictures/dsc2223-800-x-500_22.05.2015_11_31_07.jpg",url:""},
                
                ]
        },
        created(){
            this.startSlider();
        },
        methods:{
            startSlider(){
                const vue = this;
                setInterval(function(){
                    if(vue.sliderIndex === vue.sliderData.length-1)
                        vue.sliderIndex = 0;
                    else
                        vue.sliderIndex = vue.sliderIndex + 1;

                }, 3000);
            }
        }
    })
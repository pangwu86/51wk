window.$vm = new Vue({
    el: "#ev-main",
    data: {
        dlist: evdata,
        imglist: [],
        showev: false
    },
    methods: {
        seeDir: function (index) {
            console.log("see dir: " + this.dlist[index].nm);
            this.imglist = this.dlist[index].children || [];
            this.showev = true;
            this.initEcho();
        },
        seeList: function () {
            this.imglist = [];
            this.showev = false;
        },
        toEv: function () {
            window.location.href = "evidence.html";
        },
        picurl: function (pic) {
            return imgperfix + pic.id;
        },
        initEcho: function () {
            setTimeout(function () {
                echo.init({
                    offset: 100,
                    throttle: 250,
                    unload: false,
                    callback: function (element, op) {
                        console.log(element, 'has been', op + 'ed')
                    }
                });
            }, 200);
        }
    },
    mounted: function () {
        if(this.dlist.length > 0) {
            var fdir = this.dlist[0];
            if(!fdir.children){
                this.imglist = this.dlist || [];
                this.showev = true;
                this.initEcho();
            }
        }
    }
});
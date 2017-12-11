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
        }
    }
});
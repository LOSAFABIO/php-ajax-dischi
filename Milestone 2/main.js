let myApp = new Vue ({
    el : '#app',
    data: {
        myArr : []
    },
    mounted : function(){
            axios.get(`http://localhost:8888/php-ajax-dischi/Milestone%202/api.php`)
            .then((risposta) => {
                this.myArr = (risposta.data)
                console.log(risposta);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})
let myApp = new Vue ({
    el : '#app',
    data: {
        myArr : [],
        myArr2 : []
    },
    mounted : function(){
            axios.get(`http://localhost:8888/php-ajax-dischi/Milestone%202/api.php`)
            .then((risposta) => {
                this.myArr = (risposta.data)
                console.log(this.myArr);
            })
            .catch(function (error) {
                console.log(error);
            }),
            axios.get(`http://localhost:8888/php-ajax-dischi/Milestone%202/apiGenre.php`)
            .then((risposta2) => {  
                console.log(risposta2)
                this.myArr2 = (risposta2.data[0].genre)
                this.myArr2.slice(myArr2, 1)

                console.log(this.myArr2.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
})
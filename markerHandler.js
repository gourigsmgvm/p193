AFRAME.registerComponent("markerHandler", {
    init: function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("marker found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            console.log("marker lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", ()=>{
            swal({
                icon: "rate dish",
                title: "please rate your dish",
                text: "Work in progress"
            })
        })
        orderButton.addEventListener("click", ()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for ordering",
                text: "Order will be served soon at your table"
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})

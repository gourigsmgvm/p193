AFRAME.registerComponent("create-buttons", {
    init: function(){
        var button = document.createElement("button")
        button.innerHTML = "RATE US"
        button.setAttribute("id", "rate-button")
        button.setAttribute("class", "btn btn-warning")

        var button2 = document.createElement("button")
        button2.innerHTML = "ORDER NOW"
        button2.setAttribute("id", "order-button")
        button2.setAttribute("class", "btn btn-warning")

        var buttonDiv = document.getElementById("button-div");
        buttonDiv.appendChild("button")
        buttonDiv.appendChild("button2")
        
    }
})
 var array = ["1","2","3","4","5"].map(function(item){return "images/item" + item + ".png"});
 
 ko.applyBindings({
        toggleMenu: function(){
            this.showMenu = !this.showMenu;
        },
        showMenu: ko.observable(true),
        items: ko.observableArray(array)
    });
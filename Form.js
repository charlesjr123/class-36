class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1");
        title.html("Welcome to car racing game");
        title.position(130,10);

        var input=createInput("name");
        input.position(130,160);

        var button=createButton("Play");
        button.position(250,200);

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playeCount+1;
            player.update(name)
            player.updateCount(count)
            var greeting=createElement("h3");
            greeting.html("Hello"+name);
            greeting.position(130,160);
            

        })
    }
}
class Form{
    constructor(){
this.input=createInput("name")
 this.button=createButton("play")
 this.greeting=createElement("h3")
    }
    display(){
        var title=createElement('h2')
        title.html("car racing game")
        title.position(450,90)
       // var input=createInput("name")
       // var button=createButton("play")
        this.input.position(450,160)
        this.button.position(500,200)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name=this.input.value()
             playerCount+=1
             player.updateCount(playerCount)
           // var greeting=createElement("h3")
            this.greeting.html("Hello "+player.name)
            this.greeting.position(500,160)
        })

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
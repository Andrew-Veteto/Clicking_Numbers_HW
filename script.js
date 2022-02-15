let list = ["red", "green", "blue"];
let elements = [];

function box(list) {
    let that = this;
    this.number = 0;

    this.ele = document.createElement("div");
    this.ele.style.backgroundColor = list;
    this.ele.style.width = "200px";
    this.ele.style.height = "100px";
    this.ele.style.borderRadius = "10px";
    this.ele.style.fontSize = "18px";
    this.ele.style.color = "white";
    this.ele.style.display = "flex";
    this.ele.style.justifyContent = "center";
    this.ele.style.alignItems = "center";

    this.ele.addEventListener("click", function() {
        that.addClick(1);
    })

    this.ele.innerHTML = this.number;
    document.body.append(this.ele);
}

box.prototype.addClick = function(num) {
    this.number += num;
    this.ele.innerHTML = this.number;
}

for(let i in list) {
    elements.push(new box(list[i]));
}
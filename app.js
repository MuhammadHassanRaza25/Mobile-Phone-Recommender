var q1 = prompt("What is your budget? (low/medium/high)")
var q2 = prompt("Which operating system do you prefer? (android/ios)")
var q3 = prompt ("What camera quality do you need? (basic/moderate/high)")
var q4 = prompt("How important is battery life to you? (short/average/long)")
var q5 = prompt("What screen size do you prefer? (small/medium/large)")
if(q1 == "high" && q2 == "ios" && q3 == "moderate"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 13 Pro Max</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $1099</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: Triple 12MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 28 hours talk time</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 6.7 inches</p> <br>`)
}
else if(q1 == "high" && q2 == "ios" && q3 == "high"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 15 Pro Max</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $1299</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: Triple 12MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 28 hours talk time</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 6.7 inches</p> <br>`)
}
else if(q1 == "high" && q2 == "ios" && q3 == "basic"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 12 Pro</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $999</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: Triple 12MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 28 hours talk time</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 6.7 inches</p> <br>`)
}
else if(q1 == "medium" && q2 == "ios" && q3 == "high"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone x</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $500</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 12MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 2716mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 5.8 inches</p> <br>`)
}
else if(q1 == "medium" && q2 == "ios" && q3 == "moderate"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 7 Plus</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $150</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 10MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 1960mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 5.8 inches</p> <br>`)
}
else if(q1 == "medium" && q2 == "ios" && q3 == "basic"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 7</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $150</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 8MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 1960mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 5.8 inches</p> <br>`)
}
else if(q1 == "medium" && q2 == "ios"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 6s</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $130</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 10MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 1960mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 5.3 inches</p> <br>`)
}
else if(q1 == "low" && q2 == "ios"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.iPhone 5s</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price $40</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: ios</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 5MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 2716mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 5.8 inches</p> <br>`)
}
else if(q1 == "low" && q2 == "android"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.Oppo A1k</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price 15,000PKR</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: Android</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 8M Dual Camera</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 4000mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 6.1 inches</p> <br>`)

}
else if(q1 == "medium" && q2 == "android" && q3 == "moderate"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.Tecno Spark 5 Air</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price 20,000PKR</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: Android</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 13M Dual Camera</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 5000mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 720x1640</p> <br>`)
}
else if(q1 == "medium" && q2 == "android" && q3 == "high"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.Tecno Spark 6 Go</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price 21,000PKR</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: Android</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 13M Dual Camera</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 5000mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 720x1600</p> <br>`)
}
else if(q1 == "medium" && q2 == "android"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.Tecno Spark 6 Go</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price 21,000PKR</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: Android</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 13M Dual Camera</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 5000mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 720x1600</p> <br>`)
}
else if(q1 == "high" && q2 == "android" && q3 == "high"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.Samsung Galaxy S23 Ultra</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price 359,999PKR</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: Android</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 200MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 5000mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 6.8 inches</p> <br>`)

}
else if(q1 == "high" && q2 == "android" && q3 == "moderate"){
    document.write(`<p id="a1" class="animate__animated animate__zoomIn">.Samsung Galaxy S22</p> <br>`)
    document.write(`<p id="a2" class="animate__animated animate__zoomIn">.Price 194999/PKR</p> <br>`)
    document.write(`<p id="a3" class="animate__animated animate__zoomIn">.Operating System: Android</p> <br>`)
    document.write(`<p id="a4" class="animate__animated animate__zoomIn">.Camera: 200MP</p> <br>`)
    document.write(`<p id="a5" class="animate__animated animate__zoomIn">.Battery Life: 5000mAh</p> <br>`)
    document.write(`<p id="a6" class="animate__animated animate__zoomIn">.Screen Size: 6.8 inches</p> <br>`)
}
else{
    alert('Try Again ❗')
}
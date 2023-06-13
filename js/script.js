"use strict"



let score = 0;

function wrongAnswer() {

    let odgovor2 = document.getElementById("odgovor2");
    let odgovor3 = document.getElementById("odgovor3");
    let odgovor4 = document.getElementById("odgovor4");
    odgovor2, odgovor3, odgovor4 = 1;

    if (odgovor2, odgovor3, odgovor4 = 1) {


        window.alert("Wrong answer. Please choose again.");
        score -= 1;
        document.getElementById("results").innerHTML = score;





    }

    else {

        console.log("it's alright!");


    }


}

function correctAnswer() {
    let odgovor1 = document.getElementById("odgovor1");
    odgovor1 = 0;
    if (odgovor1 == 0) {

        window.alert("Bravo! Correct Answer! To proceed press next.");
        score += 1;
        document.getElementById("results").innerHTML = score;




    }

    else {

        console.log("it's alright!")


    }



}


function enter() {


    const enter = document.getElementById("enter1");
    enter.classList.add("hide");

    const mainTitle = document.getElementById("mainTitle");
    mainTitle.classList.add("hide");

    quiz.classList.remove("hide");
    // SLIDES
    // slide 1 
    const slide1 = document.getElementById("slide1");
    slide1.classList.remove("hide");
    slide1.classList.add("slide");



    const pitanje1 = document.getElementById("pitanje1");
    pitanje1.classList.add("hide");

    //  slide 2
    const slide2 = document.getElementById("slide2");
    slide2.classList.remove("hide");
    slide2.classList.add("slide");

    const pitanje2 = document.getElementById("pitanje2");
    pitanje2.classList.add("hide");


    // slide 3
    const slide3 = document.getElementById("slide3");
    slide3.classList.remove("hide");
    slide3.classList.add("slide");

    const pitanje3 = document.getElementById("pitanje3");
    pitanje3.classList.add("hide");


    // slide 4
    const slide4 = document.getElementById("slide4");
    slide4.classList.remove("hide");
    slide4.classList.add("slide");


    const pitanje4 = document.getElementById("pitanje4");
    pitanje4.classList.add("hide");


    // ODGOVORI
    // SLIDE 1
    //  odgovor 1
    const odgovor1 = document.getElementById("odgovor1");
    odgovor1.classList.add("hide");

    //   odgovor 2
    const odgovor2 = document.getElementById("odgovor2");
    odgovor2.classList.add("hide");


    // //  odgovor 3
    const odgovor3 = document.getElementById("odgovor3");
    odgovor3.classList.add("hide");

    //  odgovor 4
    const odgovor4 = document.getElementById("odgovor4");
    odgovor4.classList.add("hide");

    // SHOW RESULTS BUTTON REMOVING 

    const results = document.getElementById("results");
    results.classList.add("hide");

    const resultsHeadline = document.getElementById("resultsNaslov");
    resultsHeadline.classList.add("hide");



}



// SLIDE FUNCTIONS

function slide1() {


    // REMOVING
    const odgovor5 = document.getElementById("odgovor5");
    odgovor5.classList.remove("correctAnswer");

    const odgovor6 = document.getElementById("odgovor6");
    odgovor6.classList.remove("wrongAnswer");

    const odgovor7 = document.getElementById("odgovor7");
    odgovor7.classList.remove("wrongAnswer");

    const odgovor8 = document.getElementById("odgovor8");
    odgovor8.classList.remove("wrongAnswer");


    const odgovor9 = document.getElementById("odgovor9");
    odgovor9.classList.remove("correctAnswer");

    const odgovor10 = document.getElementById("odgovor10");
    odgovor10.classList.remove("wrongAnswer");

    const odgovor11 = document.getElementById("odgovor11");
    odgovor11.classList.remove("wrongAnswer");

    const odgovor12 = document.getElementById("odgovor12");
    odgovor12.classList.remove("wrongAnswer");



    // SHOW RESULTS BUTTON REMOVING 

    const results = document.getElementById("results");
    results.classList.add("hide");

    const resultsHeadline = document.getElementById("resultsNaslov");
    resultsHeadline.classList.add("hide");

    // ------


    let slide1Pitanje = document.getElementById("slide1Pitanje");
    slide1Pitanje.classList.remove("hide");
    slide1Pitanje.classList.add("slide1");

    let pitanje1 = document.getElementById("pitanje1");
    pitanje1.classList.remove("hide");

    //   REMOVE SLIDE 2 

    const slide2Pitanje = document.getElementById("slide2Pitanje");
    slide2Pitanje.classList.add("hide");
    slide2Pitanje.classList.remove("slide2");

    const pitanje2 = document.getElementById("pitanje2");
    pitanje2.classList.add("hide");


    // REMOVE SLIDE 3


    const slide3Pitanje = document.getElementById("slide3Pitanje");
    slide3Pitanje.classList.add("hide");
    slide3Pitanje.classList.remove("slide3");

    const pitanje3 = document.getElementById("pitanje3");
    pitanje3.classList.add("hide");



    // REMOVE SLIDE 4


    const slide4Pitanje = document.getElementById("slide4Pitanje");
    slide4Pitanje.classList.add("hide");
    slide4Pitanje.classList.remove("slide4");

    const pitanje4 = document.getElementById("pitanje4");
    pitanje4.classList.add("hide");



    // ODGOVORI
    // SLIDE 1
    //  odgovor 1
    const odgovor1 = document.getElementById("odgovor1");
    odgovor1.classList.add("answer1");

    //  odgovor 2
    const odgovor2 = document.getElementById("odgovor2");
    odgovor2.classList.add("answer2");


    //  odgovor 3
    const odgovor3 = document.getElementById("odgovor3");
    odgovor3.classList.add("answer3");

    //  odgovor 4
    const odgovor4 = document.getElementById("odgovor4");
    odgovor4.classList.add("answer4");



    // NEXT AND PREVIOUS BUTTONS

    const next = document.getElementById("next");
    next.classList.remove("hide");

    next.addEventListener("click", function () {


        slide2();



    })


    const previous = document.getElementById("previous");
    previous.classList.add("hide");

    const showResults = document.getElementById("showResults");
    showResults.classList.add("hide");



}



function slide2() {

    // REMOVING
    const odgovor1 = document.getElementById("odgovor1");
    odgovor1.classList.remove("correctAnswer");

    const odgovor2 = document.getElementById("odgovor2");
    odgovor2.classList.remove("wrongAnswer");

    const odgovor3 = document.getElementById("odgovor3");
    odgovor3.classList.remove("wrongAnswer");

    const odgovor4 = document.getElementById("odgovor4");
    odgovor4.classList.remove("wrongAnswer");


    // SHOW RESULTS BUTTON REMOVING 

    const results = document.getElementById("results");
    results.classList.add("hide");

    const resultsHeadline = document.getElementById("resultsNaslov");
    resultsHeadline.classList.add("hide");

    // ------



    const slide2Pitanje = document.getElementById("slide2Pitanje");
    slide2Pitanje.classList.remove("hide");
    slide2Pitanje.classList.add("slide2");

    const pitanje2 = document.getElementById("pitanje2");
    pitanje2.classList.remove("hide");

    // REMOVE SLIDE 1
    const slide1Pitanje = document.getElementById("slide1Pitanje");
    slide1Pitanje.classList.add("hide");
    slide1Pitanje.classList.remove("slide1");

    const pitanje1 = document.getElementById("pitanje1");
    pitanje1.classList.add("hide");



    // REMOVE SLIDE 3


    const slide3Pitanje = document.getElementById("slide3Pitanje");
    slide3Pitanje.classList.add("hide");
    slide3Pitanje.classList.remove("slide3");

    const pitanje3 = document.getElementById("pitanje3");
    pitanje3.classList.add("hide");


    // REMOVE SLIDE 4


    const slide4Pitanje = document.getElementById("slide4Pitanje");
    slide4Pitanje.classList.add("hide");
    slide4Pitanje.classList.remove("slide4");

    const pitanje4 = document.getElementById("pitanje4");
    pitanje4.classList.add("hide");


    // ODGOVORI
    // SLIDE 2
    //  odgovor 5
    const odgovor5 = document.getElementById("odgovor5");
    odgovor5.classList.add("answer5");

    //  odgovor 6
    const odgovor6 = document.getElementById("odgovor6");
    odgovor6.classList.add("answer6");


    //  odgovor 7
    const odgovor7 = document.getElementById("odgovor7");
    odgovor7.classList.add("answer7");

    //  odgovor 8
    const odgovor8 = document.getElementById("odgovor8");
    odgovor8.classList.add("answer8");

    // NEXT AND PREVIOUS BUTTONS

    const previous = document.getElementById("previous");
    previous.classList.remove("hide");

    const showResults = document.getElementById("showResults");
    showResults.classList.add("hide");

    const next = document.getElementById("next");
    next.classList.remove("hide");

    previous.addEventListener("click", function () {



        slide1();


    })


    next.addEventListener("click", function () {


        slide3();



    })

}



function slide3() {

    // REMOVING

    const odgovor1 = document.getElementById("odgovor1");
    odgovor1.classList.remove("correctAnswer");

    const odgovor2 = document.getElementById("odgovor2");
    odgovor2.classList.remove("wrongAnswer");

    const odgovor3 = document.getElementById("odgovor3");
    odgovor3.classList.remove("wrongAnswer");

    const odgovor4 = document.getElementById("odgovor4");
    odgovor4.classList.remove("wrongAnswer");



    const odgovor5 = document.getElementById("odgovor5");
    odgovor5.classList.remove("correctAnswer");

    const odgovor6 = document.getElementById("odgovor6");
    odgovor6.classList.remove("wrongAnswer");

    const odgovor7 = document.getElementById("odgovor7");
    odgovor7.classList.remove("wrongAnswer");

    const odgovor8 = document.getElementById("odgovor8");
    odgovor8.classList.remove("wrongAnswer");



    const odgovor13 = document.getElementById("odgovor13");
    odgovor13.classList.remove("correctAnswer");

    const odgovor14 = document.getElementById("odgovor14");
    odgovor14.classList.remove("wrongAnswer");

    const odgovor15 = document.getElementById("odgovor15");
    odgovor15.classList.remove("wrongAnswer");

    const odgovor16 = document.getElementById("odgovor16");
    odgovor16.classList.remove("wrongAnswer");



    // SHOW RESULTS BUTTON REMOVING 

    const results = document.getElementById("results");
    results.classList.add("hide");

    const resultsHeadline = document.getElementById("resultsNaslov");
    resultsHeadline.classList.add("hide");
    // ------

    const slide3Pitanje = document.getElementById("slide3Pitanje");
    slide3Pitanje.classList.remove("hide");
    slide3Pitanje.classList.add("slide3");

    const pitanje3 = document.getElementById("pitanje3");
    pitanje3.classList.remove("hide");

    // REMOVE SLIDE 1
    const slide1Pitanje = document.getElementById("slide1Pitanje");
    slide1Pitanje.classList.add("hide");
    slide1Pitanje.classList.remove("slide1");

    const pitanje1 = document.getElementById("pitanje1");
    pitanje1.classList.add("hide");


    //   REMOVE SLIDE 2 

    const slide2Pitanje = document.getElementById("slide2Pitanje");
    slide2Pitanje.classList.add("hide");
    slide2Pitanje.classList.remove("slide2");

    const pitanje2 = document.getElementById("pitanje2");
    pitanje2.classList.add("hide");


    // REMOVE SLIDE 4


    const slide4Pitanje = document.getElementById("slide4Pitanje");
    slide4Pitanje.classList.add("hide");
    slide4Pitanje.classList.remove("slide4");

    const pitanje4 = document.getElementById("pitanje4");
    pitanje4.classList.add("hide");


    // ODGOVORI
    // SLIDE 3
    //  odgovor 9
    const odgovor9 = document.getElementById("odgovor9");
    odgovor9.classList.add("answer9");

    //  odgovor 10
    const odgovor10 = document.getElementById("odgovor10");
    odgovor10.classList.add("answer10");


    //  odgovor 11
    const odgovor11 = document.getElementById("odgovor11");
    odgovor11.classList.add("answer11");

    //  odgovor 12
    const odgovor12 = document.getElementById("odgovor12");
    odgovor12.classList.add("answer12");

    // NEXT AND PREVIOUS BUTTONS

    const previous = document.getElementById("previous");
    previous.classList.remove("hide");

    previous.addEventListener("click", function () {



        slide2();


    })


    const showResults = document.getElementById("showResults");
    showResults.classList.add("hide");

    const next = document.getElementById("next");
    next.classList.remove("hide");



    next.addEventListener("click", function () {


        slide4();



    })

}


function slide4() {

    // REMOVING
    const odgovor1 = document.getElementById("odgovor1");
    odgovor1.classList.remove("correctAnswer");

    const odgovor2 = document.getElementById("odgovor2");
    odgovor2.classList.remove("wrongAnswer");

    const odgovor3 = document.getElementById("odgovor3");
    odgovor3.classList.remove("wrongAnswer");

    const odgovor4 = document.getElementById("odgovor4");
    odgovor4.classList.remove("wrongAnswer");



    const odgovor5 = document.getElementById("odgovor5");
    odgovor5.classList.remove("correctAnswer");

    const odgovor6 = document.getElementById("odgovor6");
    odgovor6.classList.remove("wrongAnswer");

    const odgovor7 = document.getElementById("odgovor7");
    odgovor7.classList.remove("wrongAnswer");

    const odgovor8 = document.getElementById("odgovor8");
    odgovor8.classList.remove("wrongAnswer");


    const odgovor9 = document.getElementById("odgovor9");
    odgovor9.classList.remove("correctAnswer");

    const odgovor10 = document.getElementById("odgovor10");
    odgovor10.classList.remove("wrongAnswer");

    const odgovor11 = document.getElementById("odgovor11");
    odgovor11.classList.remove("wrongAnswer");

    const odgovor12 = document.getElementById("odgovor12");
    odgovor12.classList.remove("wrongAnswer");

    // ------



    const slide4Pitanje = document.getElementById("slide4Pitanje");
    slide4Pitanje.classList.remove("hide");
    slide4Pitanje.classList.add("slide4");

    const pitanje4 = document.getElementById("pitanje4");
    pitanje4.classList.remove("hide");



    // REMOVE SLIDE 1
    const slide1Pitanje = document.getElementById("slide1Pitanje");
    slide1Pitanje.classList.add("hide");
    slide1Pitanje.classList.remove("slide1");

    const pitanje1 = document.getElementById("pitanje1");
    pitanje1.classList.add("hide");


    //   REMOVE SLIDE 2 

    const slide2Pitanje = document.getElementById("slide2Pitanje");
    slide2Pitanje.classList.add("hide");
    slide2Pitanje.classList.remove("slide2");

    const pitanje2 = document.getElementById("pitanje2");
    pitanje2.classList.add("hide");


    // REMOVE SLIDE 3


    const slide3Pitanje = document.getElementById("slide3Pitanje");
    slide3Pitanje.classList.add("hide");
    slide3Pitanje.classList.remove("slide3");

    const pitanje3 = document.getElementById("pitanje3");
    pitanje3.classList.add("hide");


    // ODGOVORI
    // SLIDE 4
    //  odgovor 13
    const odgovor13 = document.getElementById("odgovor13");
    odgovor13.classList.add("answer13");

    //  odgovor 14
    const odgovor14 = document.getElementById("odgovor14");
    odgovor14.classList.add("answer14");


    //  odgovor 15
    const odgovor15 = document.getElementById("odgovor15");
    odgovor15.classList.add("answer15");

    //  odgovor 16
    const odgovor16 = document.getElementById("odgovor16");
    odgovor16.classList.add("answer16");


    // NEXT AND PREVIOUS BUTTONS

    const previous = document.getElementById("previous");
    previous.classList.remove("hide");


    const next = document.getElementById("next");
    next.classList.add("hide");


    const showResults = document.getElementById("showResults");
    showResults.classList.remove("hide");

    showResults.addEventListener("click", function () {

        const results = document.getElementById("results");
        results.classList.remove("hide");

        const resultsHeadline = document.getElementById("resultsNaslov");
        resultsHeadline.classList.remove("hide");




    })

    previous.addEventListener("click", function () {



        slide3();


    })
}
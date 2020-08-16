$(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
//     var images = [
//         "0.png",
//         "1.png",
//         "2.png",
//         "3.png",
//         "4.png",
//         "5.png",
//         "6.png",
//         "7.png",
//         "8.png",
//         "9.png",
//         "10.png",
//         "11.png",
//         "12.png",
//         "13.png",
//         "14.png",
//         "15.png",
//         "16.png",
//         "17.png",
//         "18.png",
//         "19.png",
//         "20.png",
//         "21.png",
//         "22.png",
//         "23.png",
//         "24.png",
//         "25.png",
//         "26.png",
//         "27.png",
//         "28.png",
//         "29.png",
//         "30.png",
//         "31.png",
//         "32.png",
//         "33.png",
//         "34.png",
//         "35.png",
//         "36.png",
//         "37.png",
//         "38.png",
//         "39.png",
//         "40.png",
//         "41.png",
//         "42.png",
//         "43.png",
//         "44.png",
//         "45.png",
//         "46.png",
//         "47.png",
//         "48.png",
//         "49.png",
//         "50.png",
//         "51.png",
//         "52.png"
//     ];
//
// // TweenMax can tween any property of any object. We use this object to cycle through the array
//     var obj = {curImg: 0};
//
// // create tween
//     var tween = TweenMax.to(obj, 0.5,
//         {
//             curImg: images.length - 1,	// animate propery curImg to number of images
//             roundProps: "curImg",				// only integers so it can be used as an array index
//             repeat: 0,									// repeat 3 times
//             immediateRender: true,			// load first image automatically
//             ease: Linear.easeNone,			// show every image the same ammount of time
//             onUpdate: function () {
//                 $("#myimg").attr("src", images[obj.curImg]); // set the image source
//             }
//         }
//     );
//
// // init controller
//     var $triggerElement = $('<span class="trigger" style="visibility:hidden;"></span>');
//     $("#navbar").after( $triggerElement );
//
//
//
// // build scene
//     var scene = new ScrollMagic.Scene({
//         triggerElement: "#body-outer",
//         // triggerElement: $triggerElement.get(0),
//         duration: "40%",
//         triggerHook: 0,
//     })
//         .setTween(tween)
//         // .addIndicators({
//         // 	name: 'animation-go',
//         // 	colorTrigger: 'pink',
//         // 	// indent: 200,
//         // 	colorStart: '#75C695',
//         // 	colorEnd: 'pink'}) // add indicators (requires plugin)
//         .addTo(controller);
//
// // handle form change
//     $("form.move input[name=duration]:radio").change(function () {
//         scene.duration($(this).val());
//     });
///////////////////////////////////////////////////////////////////////////
    var parallaxTl = new TimelineMax();
    parallaxTl
        // .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.bcg', 1, {y: '-20%'}, 0)
    ;

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '#bcg-parallax',
        triggerHook: 1,
        duration: '100%',
        offset: -100
    })
        .setTween(parallaxTl)
        // .addIndicators({
        //     name: 'p1',
        //     colorTrigger: 'black',
        //     colorStart: 'red',
        //     colorEnd: 'red'
        // })
        .addTo(controller);
///////////////////////////////////////////////////////////////////////////
    var parallaxTl2 = new TimelineMax();
    parallaxTl2
        .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.bcg2', 2, {y: '-50%', ease:Power0.easeNone}, 0)
    ;

    var slideParallaxScene2 = new ScrollMagic.Scene({
        triggerElement: '#bcg-parallax',
        triggerHook: 1,
        duration: '150%'
    })
        .setTween(parallaxTl2)
        // .addIndicators({
        //     name: 'p2',
        //     colorTrigger: 'black',
        //     colorStart: 'pink',
        //     colorEnd: 'pink'
        // })
        .addTo(controller);
///////////////////////////////////////////////////////////////////////////
    var parallaxTl3 = new TimelineMax();
    parallaxTl3
        .from('.content-wrapper1', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.bcg3', 2, {y: '-50%', ease:Power0.easeNone}, 0)
    ;

    var slideParallaxScene3 = new ScrollMagic.Scene({
        triggerElement: '#bcg-parallax2',
        triggerHook: 1,
        duration: '150%'
    })
        .setTween(parallaxTl3)
        // .addIndicators({
        //     name: 'p3',
        //     colorTrigger: 'black',
        //     colorStart: '#75C695',
        //     colorEnd: '#75C695'
        // })
        .addTo(controller);

///////////////////////////////////////////////////////////////////////////
    document.getElementById("bio-item-2").innerHTML = "";
    // document.getElementById("bio-item-1").innerHTML = "Hi, my name is Tristan Lalor. I am a senior at the University of Vermont studying finance, data analytics, and computer science. I am a creator at heart, a friendly workaholic, and am excited to be utilized in a professional capacity.";
    document.getElementById("bio-item-1").style.fontWeight = "lighter";
    document.getElementById("bio-item-1").style.fontSize = "calc(1pt + 1vh + 1vw)";
//     window.onscroll = function() {scrollFunction()};
//
//     function scrollFunction() {
//         // if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
//         //     document.getElementById("title").style.fontSize = "42pt";
//         // } else {
//         //     document.getElementById("title").style.fontSize = "120px";
//         // }
//
// //
//
//         // if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//         //     document.getElementById("bio-item-1").innerHTML = "Why NextCapital?";
//         //     document.getElementById("bio-item-2").innerHTML = "I am a finance-focused engineer striving to innovate and learn more about financial technology. I want to help people and institutions control their financial well-being by providing innovative solutions to complex problems.";
//         //     document.getElementById("bio-item-1").style.fontWeight = "bold";
//         //     document.getElementById("bio-item-1").style.fontSize = "calc(10pt + 1vh + 1vw)";
//         //     document.getElementById("bio-item-1").style.transition = ".06s";
//         // } else {
//         //     document.getElementById("bio-item-2").innerHTML = "";
//         //     document.getElementById("bio-item-1").innerHTML = "Hi, my name is Tristan Lalor. I am a senior at the University of Vermont studying finance, data analytics, and computer science. I am a creator at heart, a friendly workaholic, and am excited to be utilized in a professional capacity.";
//         //     document.getElementById("bio-item-1").style.fontWeight = "lighter";
//         //     document.getElementById("bio-item-1").style.fontSize = "calc(1pt + 1vh + 1vw)";
//         //     document.getElementById("bio-item-1").style.transition = "0s";
//         // }
//     }
    // Why NextCapital?
    // I am a finance-focused engineer striving to innovate and learn more about financial technology. I want to help people and institutions control their financial well-being by providing innovative solutions to difficult problems.
    // Hi, my name is Tristan Lalor. I am currently a senior at the University of Vermont studying finance, data analytics, and computer science. I am a creator at heart, a friendly workaholic, and am excited to be utilized in a professional capacity.
///////////////////////////////////////////////////////////////////////////
//     var pinIntroScene2 = new ScrollMagic.Scene({
//         triggerElement: '#main',
//         triggerHook: .975,
//         duration: '50%',
//     })
//         .setPin('#main', {pushFollowers: false})
//         .addTo(controller);
///////////////////////////////////////////////////////////////////////////
// 	var pinIntroScene22 = new ScrollMagic.Scene({
// 		triggerElement: '.bcg',
// 		triggerHook: .975,
// 		duration: '50%',
// 	})
// 		.setPin('.bcg', {pushFollowers: false})
// 		.addTo(controller);
///////////////////////////////////////////////////////////////////////////
    $(document).on("click", "a[href^=#main]", function(e) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            controller.scrollTo('#main');
        }
    });
    $(document).on("click", "a[href^=#bcg-parallax]", function(f) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            f.preventDefault();

            // trigger scroll
            controller.scrollTo('#main');
        }
    });
    $(document).on("click", "a[href^=#bcg-parallax2]", function(g) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            g.preventDefault();

            // trigger scroll
            controller.scrollTo('#bcg-parallax2');
        }
    });
    $(document).on("click", "a[href^=#project01]", function(h) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            h.preventDefault();

            // trigger scroll
            controller.scrollTo('#project01');
        }
    });
    $(document).on("click", "a[href^=#project02]", function(i) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            i.preventDefault();

            // trigger scroll
            controller.scrollTo('#project02');
        }
    });
    $(document).on("click", "a[href^=#project03]", function(j) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            j.preventDefault();

            // trigger scroll
            controller.scrollTo('#project03');
        }
    });




    // pin the intro
    // var pinIntroScene = new ScrollMagic.Scene({
    // 	triggerElement: '#top-spacer',
    // 	triggerHook: 0,
    // 	// duration: '30%'
    // })
    // .setPin('#top-spacer', {pushFollowers: false})
    // .addTo(controller);

    // var pinIntroScene1 = new ScrollMagic.Scene({
    // 	triggerElement: '#navbar',
    // 	triggerHook: .92,
    // 	duration: '30%'
    // })
    // 	.setPin('#navbar', {pushFollowers: false})
    // 	.addIndicators({
    // 		name: 'n1',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);
    // //
    // var pinIntroScene3 = new ScrollMagic.Scene({
    // 	triggerElement: '#topofnav',
    // 	triggerHook: 0.0,
    // 	// duration: '1000%',
    // 	// offset: 284
    // })
    // 	.setPin('#navbar', {pushFollowers: false})
    // 	.addIndicators({
    // 		name: 'n2',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);
    // var pinIntroScene6 = new ScrollMagic.Scene({
    // 	triggerElement: '#project01',
    // 	triggerHook: 0.91,
    // 	// duration: '1000%',
    // 	// offset: 284
    // })
    // 	.setClassToggle('.navbar', 'two')
    // 	.addIndicators({
    // 		name: 'n2',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);



    // $('.project').each(function(){
    //
    // 	// build a scene
    // 	var ourScene = new ScrollMagic.Scene({
    // 		triggerElement: '#navbar',
    // 		triggerHook: 0.92,
    // 		duration: '30%'
    // 	})
    // 		.addTo(controller);
    // 	var pinIntroScene3 = new ScrollMagic.Scene({
    // 		triggerElement: '#topofnav',
    // 		triggerHook: 0.0,
    // 		container: '#body-outer'
    // 		// duration: '1000%',
    // 		// offset: 284
    // 	}).addTo(controller);
    // })
    // var pinIntroScene1 = new ScrollMagic.Scene({
    // 	triggerElement: '#navbar',
    // 	triggerHook: .92,
    // 	duration: '30%'
    // })
    // 	.setPin('.navcont', {pushFollowers: false})
    // 	.addIndicators({
    // 		name: 'n1',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);
    // //
    // var pinIntroScene3 = new ScrollMagic.Scene({
    // 	triggerElement: '#topofnav',
    // 	triggerHook: 0.0,
    // 	// duration: '1000%',
    // 	// offset: 284
    // })
    // 	.setPin('.navcont', {pushFollowers: false})
    // 	.addIndicators({
    // 		name: 'n2',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);



    // var pinIntroScene1 = new ScrollMagic.Scene({
    // 	triggerElement: '#bottom-of-navbar',
    // 	triggerHook: .92,
    // 	duration: '30%'
    // })
    // 	.setPin('#bottom-of-navbar', {pushFollowers: false})
    // 	.addIndicators({
    // 		name: 'n3',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);
    //
    // var pinIntroScene3 = new ScrollMagic.Scene({
    // 	triggerElement: '#bottom-of-navbar',
    // 	triggerHook: 0.08,
    // 	duration: '200%'
    // })
    // 	.setPin('#bottom-of-navbar', {pushFollowers: false})
    // 	.addIndicators({
    // 		name: 'n4',
    // 		colorTrigger: 'black',
    // 		colorStart: '#75C695',
    // 		colorEnd: 'pink'
    // 	})
    // 	.addTo(controller);

    // // pin again
    // var pinIntroScene2 = new ScrollMagic.Scene({
    // 	triggerElement: '#project01',
    // 	triggerHook: 0.4
    // })
    // .setPin('#intro', {pushFollowers: false})
    // .addTo(controller);

    // loop through each .project element
    $('.project').each(function(){

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0].children[0],
            triggerHook: .9,
        })
            .setClassToggle(this, 'fade-in') // add class to project01
            // .addIndicators({
            // 	name: 'fade scene',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75C695',
            // 	colorEnd: 'pink'
            // }) // this requires a plugin
            .addTo(controller);

    });
    $('.fade').each(function(){

        // build a scene
        var ourScene103 = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .9,
        })
            .setClassToggle(this, 'fade-in') // add class to project01
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     colorStart: '#75C695',
            //     colorEnd: 'pink'
            // }) // this requires a plugin
            .addTo(controller);

    });


    // var shrinkage = TweenMax.to("#title", 1, {
    //     scale: 0.3,
    //     ease: Sine.easeInOut,
    //     // repeat: -1,
    //     // repeatDelay: 0.5,
    //     // yoyo: true
    // });



    var ourScene1045 = new ScrollMagic.Scene({
        triggerElement: '#main',
        // triggerHook: document.getElementById("title"),
        // triggerPosition: 200,
        triggerHook: 0,
        offset: -125,
        duration: 66,
    })
        // .setClassToggle('#title', 'small') // add class to project01
        .setTween("#title", {fontSize: "42pt"})
        // .addIndicators({
        //     name: 'smallify aka shrink',
        //     colorTrigger: 'black',
        //     colorStart: '#75C695',
        //     colorEnd: 'pink'
        // }) // this requires a plugin
        .addTo(controller);
    var ourScene10456 = new ScrollMagic.Scene({
        triggerElement: '#main',
        // triggerHook: document.getElementById("title"),
        // triggerPosition: 200,
        triggerHook: 0,
        offset: -125,
        duration: 200,
    })
        // .setClassToggle('#title', 'small') // add class to project01
        .setTween("#title", {minWidth: "0px"})
        // .addIndicators({
        //     name: 'smallify aka shrink2',
        //     colorTrigger: 'black',
        //     colorStart: '#75C695',
        //     colorEnd: 'pink'
        // }) // this requires a plugin
        .addTo(controller);





    //SET NAV-BAR ITEM HEIGHT WHEN THE SMALLER DIV IS HIGHLIGHTED
    // $(document).ready(function(){
    //     $('#excel-dropdown').on("hover", function(e){
    //         $('.nav-double').style.height('84px')
    //     });
    // });





});





















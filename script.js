$(document).ready(function(){
    //----------NAVIGATION----------
    $("main").show();
    $("#flashcards").hide();
    $("#mcqs").hide();
    $("#graphing").hide();
    $("#settings").hide();
    $("#home").show();

    $("#header_logo_button").click(function(){
        $("main").show();
        $("#flashcards").hide();
        $("#mcqs").hide();
        $("#graphing").hide();
        $("#settings").hide();
        $("#home").show();
    });

    $("#header_home_button").click(function(){
        $("main").show();
        $("#flashcards").hide();
        $("#mcqs").hide();
        $("#graphing").hide();
        $("#settings").hide();
        $("#home").show();

        setLastPracticed(modeIndex);
    });

    $("#header_flashcards_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#mcqs").hide();
        $("#graphing").hide();
        $("#settings").hide();
        $("#flashcards").show();

        $("#flashcards_landing").show();
        $("#flashcards_content").hide();
        $("#flashcards_complete").hide();

        modeData = flashcardsData;
        modeIndex = 1;
        maxQuestions = updateMaxQuestions(flashcardsData);
        $('#flashcards_number_of_questions_input').val(maxQuestions);
    });

    $("#header_mcqs_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#flashcards").hide();
        $("#graphing").hide();
        $("#settings").hide();
        $("#mcqs").show();

        $("#mcqs_landing").show();
        $("#mcqs_content").hide();
        $("#mcqs_complete").hide();

        modeData = mcqsData;
        modeIndex = 2;
        maxQuestions = updateMaxQuestions(mcqsData);
        $('#mcqs_number_of_questions_input').val(maxQuestions);
    });

    $("#header_graphing_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").hide();
        $("#mcqs").hide();
        $("#graphing").show();

        $("#graphing_landing").show();
        $("#graphing_content").hide();
        $("#graphing_complete").hide();

        modeData = graphingData;
        modeIndex = 3;
        maxQuestions = updateMaxQuestions(graphingData);
        $('#graphing_number_of_questions_input').val(maxQuestions);
    });

    $("#header_settings_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#flashcards").hide()
        $("#graphing").hide();
        $("#settings").show();
    });

    $("#flashcards_button_home").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#graphing").hide();
        $("#mcqs").hide();
        $("#flashcards").show();

        $("#flashcards_landing").show();
        $("#flashcards_content").hide();
        $("#flashcards_complete").hide();

        modeData = flashcardsData;
        modeIndex = 1;
        maxQuestions = updateMaxQuestions(flashcardsData);
        $('#flashcards_number_of_questions_input').val(maxQuestions);
    });

    $("#mcqs_button_home").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").hide();
        $("#graphing").hide();
        $("#mcqs").show();

        $("#mcqs_landing").show();
        $("#mcqs_content").hide();
        $("#mcqs_complete").hide();

        modeData = mcqsData;
        modeIndex = 2;
        maxQuestions = updateMaxQuestions(mcqsData);
        $('#mcqs_number_of_questions_input').val(maxQuestions);
    });

    $("#graphing_button_home").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").hide();
        $("#mcqs").hide();
        $("#graphing").show();

        $("#graphing_landing").show();
        $("#graphing_content").hide();
        $("#graphing_complete").hide();

        modeData = graphingData;
        modeIndex = 3;
        maxQuestions = updateMaxQuestions(graphingData);
        $('#graphing_number_of_questions_input').val(maxQuestions);
    });

    function setLastPracticed(modeIndex) {
        if (modeIndex == 1) {
            $("#last_practiced_button").html("Last Practiced: Flashcards");
        }

        else if (modeIndex == 2) {
            $("#last_practiced_button").html("Last Practiced: Multiple Choice");
        }

        else if (modeIndex == 3) {
            $("#last_practiced_button").html("Last Practiced: Multiple Choice");
        }
        else {
            $("#last_practiced_button").html("Last Practiced: Nothing yet! Choose a mode below to start");
        }
    }

    $("#level_button").click(function(){
        var popup = document.getElementById("levelling_popup");
            popup.style.display = "block";
            
            setTimeout(function() {
                popup.style.display = "none";
            }, 4000);
    })

    $("#last_practiced_button").click(function(){
        if (modeIndex == 1) {
            $("main").show();
            $("#home").hide();
            $("#settings").hide();
            $("#graphing").hide();
            $("#mcqs").hide();
            $("#flashcards").show();

            $("#flashcards_landing").show();
            $("#flashcards_content").hide();
            $("#flashcards_complete").hide();

            modeData = flashcardsData;
            modeIndex = 1;
            maxQuestions = updateMaxQuestions(flashcardsData);
            $('#flashcards_number_of_questions_input').val(maxQuestions);
        }

        else if (modeIndex == 2) {
            $("main").show();
            $("#home").hide();
            $("#settings").hide();
            $("#flashcards").hide();
            $("#graphing").hide();
            $("#mcqs").show();
    
            $("#mcqs_landing").show();
            $("#mcqs_content").hide();
            $("#mcqs_complete").hide();
    
            modeData = mcqsData;
            modeIndex = 2;
            maxQuestions = updateMaxQuestions(mcqsData);
            $('#mcqs_number_of_questions_input').val(maxQuestions);
        }

        else if (modeIndex == 3) {
            $("main").show();
            $("#home").hide();
            $("#settings").hide();
            $("#flashcards").hide();
            $("#mcqs").hide();
            $("#graphing").show();
    
            $("#graphing_landing").show();
            $("#graphing_content").hide();
            $("#graphing_complete").hide();
    
            modeData = graphingData;
            modeIndex = 3;
            maxQuestions = updateMaxQuestions(graphingData);
            $('#graphing_number_of_questions_input').val(maxQuestions);
        }

        else {
            $('#last_practiced_button').css('background-color', 'red');
            setTimeout(function() {
                $('#last_practiced_button').css('background-color', '');
            }, 500);
        }
    });

    //----------EXPERIENCE SYSTEM----------
     function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) == 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }

    function updateExp(n) {
        if (userExp == null) {
            setCookie('userExp', 0, 365);
        }
        else {
            setCookie("userExp", n, 365);
        }
        userExp = getCookie("userExp");

        exp = userExp;
        lvl = 0;
        lvlLen = 10;

        while (exp >= lvlLen) {
            exp = exp - lvlLen;
            lvl++;
            lvlLen += 10;
        }
        console.log(exp);
        $("#level_button").text("Level " + lvl + ": " + exp + "/" + lvlLen);
        return userExp;
    }

    function incrementExp(n) {
        var current = parseInt(getCookie("userExp"))
        return updateExp(current + n);
    }

    let userExp = null;

    userExp = getCookie("userExp");
    updateExp(userExp);

    
    //----------TOPICS SELECTION----------
    
    let modeData = {};
    let modeIndex = 0;
    setLastPracticed(modeIndex);
    let selectedTopics = ["all"];
    let maxQuestions = 0;
    let currentIndex = 0;
    let numberOfQuestions = 0;
    let incorrectQuestions = [];
    $('#mcqs_number_of_questions_input').val(0);
    $('#flashcards_number_of_questions_input').val(0);
    $('#graphing_number_of_questions_input').val(0);

    function toggleTopicSelection(topic) {
        if (selectedTopics.includes(topic)) {
            $(`.select_${topic}`).removeClass('selected');
            selectedTopics = selectedTopics.filter(function(item) {
                return item !== topic;
            });
            console.log("updated selected topics: " + selectedTopics);
        }
        else {
            $(`.select_${topic}`).addClass('selected');
            selectedTopics.push(topic);
            console.log("updated selected topics: " + selectedTopics);
        }
    }

    function updateMaxQuestions(dataset, modeData) {
        var result = 0;
        selectedTopics.forEach(topic => {
            result += dataset.topics[topic].length;
        });
        if (modeData = flashcardsData) {
            $('#flashcards_number_of_questions_input').attr('max', result);
            $('#flashcards_number_of_questions_input').val(result);
        }
        if (modeData = mcqsData) {
            $('#mcqs_number_of_questions_input').attr('max', result);
            $('#mcqs_number_of_questions_input').val(result);
        }
        if (modeData = graphingData) {
            $('#graphing_number_of_questions_input').attr('max', result);
            $('#graphing_number_of_questions_input').val(result);
        }
        
        console.log("updated max questions: " + result)
        return result;
    }

    function getRandomQuestions(dataset, selectedTopics, numberOfQuestions) {
        var result = [];
        
        // get all flashcards from selected topics
        selectedTopics.forEach(topic => {
            result.push(...dataset.topics[topic]);
        });
        
        // shuffle the selected flashcards
        result.sort(() => Math.random() - 0.5);
        
        // teturn a slice of the shuffled flashcards based on numberOfQuestions
        return result.slice(0, numberOfQuestions);
    }
    
    $('.select_reflections').click(function(){
        toggleTopicSelection('reflections');
        maxQuestions = updateMaxQuestions(modeData);
    });

    $('.select_rotations').click(function(){
        toggleTopicSelection('rotations');
        maxQuestions = updateMaxQuestions(modeData);
    });

    $('.select_translations').click(function(){
        toggleTopicSelection('translations');
        maxQuestions = updateMaxQuestions(modeData);
    });

    $('.select_congruency').click(function(){
        toggleTopicSelection('congruency');
        maxQuestions = updateMaxQuestions(modeData);
    });
    
    $('.select_all_topics').click(function(){
        selectedTopics = ["all"];
        selectedTopics.push('reflections');
        selectedTopics.push('rotations');
        selectedTopics.push('translations');
        selectedTopics.push('congruency');
        maxQuestions = updateMaxQuestions(modeData);
        $('.topics_selector_container button').addClass('selected');
    });
    
    //----------FLASHCARDS----------
    let finalFlashcards = [];

    $('#flashcards_start').click(function() {
        incorrectQuestions = [];
        numberOfQuestions = parseInt($('#flashcards_number_of_questions_input').val());
        finalFlashcards = getRandomQuestions(flashcardsData, selectedTopics, numberOfQuestions);
        currentIndex = 0;

        console.log("updated final flashcards list: ");
        console.log(finalFlashcards);

        $("#flashcards").show();

        $("#flashcards_landing").hide();
        $("#flashcards_content").show();
        $('#flashcard_back').hide();

        updateFlashcardsContentHeading(currentIndex, numberOfQuestions);
        displayFlashcard(currentIndex);
    });

    function updateFlashcardsContentHeading(index, total) {
        $('#flashcards_content_heading').html(`Flashcards: ${index + 1}/${total}`);
    }

    function displayFlashcard(index) {
        if (finalFlashcards.length === 0 || index < 0 || index >= finalFlashcards.length) {
            console.error();
            return;
        }

        if ($("#flashcard_front").is(":hidden")) {
            $('#flashcard_front, #flashcard_back').toggle();
        }

        $('#flashcard_front p').text(finalFlashcards[index].term);
        $('#flashcard_back p').text(finalFlashcards[index].definition);

        
        if (incorrectQuestions.includes(finalFlashcards[currentIndex]) && !$("#mark_unknown").hasClass("selected")) {
            $(`#mark_unknown`).addClass('selected');
        }
        else if (!incorrectQuestions.includes(finalFlashcards[currentIndex]) && $("#mark_unknown").hasClass("selected")) {
            $(`#mark_unknown`).removeClass('selected');
        }
    }

    function displayFlashcardsComplete() {
        $("#flashcards").show();

        $("#flashcards_landing").hide();
        $("#flashcards_content").hide();
        $("#flashcards_complete").show();
        
        var unknownCount = incorrectQuestions.length;
        var knownPercentage = (1 - (unknownCount / numberOfQuestions)) * 100;
        
        incrementExp(numberOfQuestions);

        var finishedHTML = `Finished! ${knownPercentage.toFixed(2)}% flashcards marked as known (${unknownCount} unknown). You earned ${numberOfQuestions} experience!`;
        $(".mode_finished_left_div p").text(finishedHTML);
    }

    $('#flip').click(function() {
        $('#flashcard_front, #flashcard_back').slideToggle();
    });

    $("#flashcard_front, #flashcard_back").on("click", function() {
        //TODO: doesnt work
        console.log("flashcard clicked");
        $('#flashcard_front, #flashcard_back').toggle();
    });

    $('#prev_flashcard').click(function() {
        if (currentIndex > 0) {
            currentIndex -= 1;
            console.log("updated current index: " + currentIndex);
            updateFlashcardsContentHeading(currentIndex, numberOfQuestions)
            displayFlashcard(currentIndex);
        }
    });
    
    $('#next_flashcard').click(function() {
        if (currentIndex < numberOfQuestions - 1) {
            currentIndex += 1;
            console.log("updated current index: " + currentIndex);
            updateFlashcardsContentHeading(currentIndex, numberOfQuestions)
            displayFlashcard(currentIndex);
        }
        else {
            displayFlashcardsComplete();
        }
    });

    $('#mark_unknown').click(function() {
        if (incorrectQuestions.includes(finalFlashcards[currentIndex])) {
            $(`#mark_unknown`).removeClass('selected');
            incorrectQuestions = incorrectQuestions.filter(function(item) {
                return item !== finalFlashcards[currentIndex];
            });
            console.log("updated unknown flashcards: ");
            console.log(incorrectQuestions);
        }
        
        else {
            $(`#mark_unknown`).addClass('selected');
            incorrectQuestions.push(finalFlashcards[currentIndex]);
            console.log("updated unknown flashcards: " + incorrectQuestions);
        }
    });

    $('#flashcards_review_unknown').click(function() {
        if (incorrectQuestions.length > 0) {
            $("#flashcards_complete").hide();
            $("#flashcards_content").show();

            finalFlashcards = incorrectQuestions;
            numberOfQuestions = incorrectQuestions.length;
            incorrectQuestions = [];
            currentIndex = 0;

            updateFlashcardsContentHeading(currentIndex, numberOfQuestions);
            displayFlashcard(currentIndex);
        }
        else {
            $('#flashcards_review_unknown').css('background-color', 'red');
            setTimeout(function() {
                $('#flashcards_review_unknown').css('background-color', '');
            }, 500);
        }
    });

    $('#flashcards_restart_mode').click(function() {
        $("#flashcards_complete").hide();
        $("#flashcards_content").show();

        incorrectQuestions = [];
        currentIndex = 0;

        updateFlashcardsContentHeading(currentIndex, numberOfQuestions);
        displayFlashcard(currentIndex);
    });


    $('#flashcards_complete_home').click(function() {
        $("#flashcards_landing").show();
        $("#flashcards_complete").hide();
    });

    //----------MCQS----------
    let selectedMCQChoices = [];
    let unscrambledFinalMcqs = [];
    let finalMcqs = [];

    $('#mcqs_start').click(function() {
        if (parseInt($('#mcqs_number_of_questions_input').val()) > 0) {
            incorrectQuestions = [];
            numberOfQuestions = parseInt($('#mcqs_number_of_questions_input').val());
            console.log(numberOfQuestions);
            unscrambledFinalMcqs = getRandomQuestions(mcqsData, selectedTopics, numberOfQuestions);
            console.log(unscrambledFinalMcqs);

            finalMcqs = unscrambledFinalMcqs.map(mcq => {
                const shuffledAnswers = shuffleArray([...mcq.answers]);
                return {
                    question: mcq.question,
                    answers: shuffledAnswers
                };
            });
            console.log(finalMcqs);
            
            currentIndex = 0;
            
            console.log("updated final mcqs list: ");
            console.log(finalMcqs);

            $("#mcqs").show();

            $("#mcqs_landing").hide();
            $("#mcqs_content").show();

            selectedMCQChoices = new Array(numberOfQuestions).fill(null);
            updateMcqsContentHeading(currentIndex, numberOfQuestions);
            displayMcq(currentIndex);
        }
        else {
            $('#mcqs_start').css('background-color', 'red');
            setTimeout(function() {
                $('#mcqs_start').css('background-color', '');
            }, 500);
        }

    });

    function updateMcqsContentHeading(index, total) {
        $('#mcqs_content_heading').html(`Multiple Choice: ${index + 1}/${total}`);
    }

    function displayMcq(index) {
        if (finalMcqs.length === 0 || index < 0 || index >= finalMcqs.length) {
            console.error();
            return;
        }

        $('#mcqs_question p').text(finalMcqs[index].question);

        
        var answerButtons = $('#mcqs_answers button');

        answerButtons.each(function(i) {
            $(this).text(finalMcqs[index].answers[i]);
            
        });

        answerButtons.removeClass('selected');

        if (selectedMCQChoices[index] !== null) {
            answerButtons.each(function(i) {
                if ($(this).text() == selectedMCQChoices[index]) {
                    $(this).addClass("selected");
                }
            });
        }
    }

    $('#mcqs_answers button').click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected")
            selectedMCQChoices[currentIndex] = null;
        }
        else {
            $(this).addClass('selected').siblings().removeClass('selected');
            $(this).parent().siblings().children('button').removeClass('selected');

            selectedMCQChoices[currentIndex] = $(this).text();
        }
        console.log(selectedMCQChoices);
    });    

    function shuffleArray(array) {
        var copy = [];
        for (var i = 0; i < array.length; i++) {
            copy[i] = array[i];
        }
        for (var i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    $('#prev_mcq').click(function() {
        if (currentIndex > 0) {
            currentIndex -= 1;
            console.log("updated current index: " + currentIndex);
            updateMcqsContentHeading(currentIndex, numberOfQuestions)
            displayMcq(currentIndex);
        }
    });
    
    $('#next_mcq').click(function() {
        if (currentIndex < numberOfQuestions - 1) {
            currentIndex += 1;
            console.log("updated current index: " + currentIndex);
            updateMcqsContentHeading(currentIndex, numberOfQuestions)
            displayMcq(currentIndex);
        }
        else {
            displayMcqComplete()
        }
    });

    function displayMcqComplete() {
        if (selectedMCQChoices.includes(null)) {
            var popup = document.getElementById("mcqs_not_done_popup");
            popup.style.display = "block";
            
            setTimeout(function() {
                popup.style.display = "none";
            }, 2000);
        }
        else {
            for (var i = 0; i < numberOfQuestions; i++) {
                if (selectedMCQChoices[i] !== unscrambledFinalMcqs[i].answers[0]) {
                    incorrectQuestions.push(unscrambledFinalMcqs[i]);
                }
            }
            console.log(selectedMCQChoices);
            console.log(unscrambledFinalMcqs);
            console.log(incorrectQuestions);
            $("#mcqs").show();

            $("#mcqs_landing").hide();
            $("#mcqs_content").hide();
            $("#mcqs_complete").show();
            
            var incorrectCount = incorrectQuestions.length;
            var correctPercentage = (1- (incorrectCount / numberOfQuestions)) * 100;
            
            incrementExp(numberOfQuestions * 5 - incorrectCount - 3);
            var finishedHTML = `Finished! (${correctPercentage.toFixed(2)}% correct (${incorrectCount} incorrect). You earned ${numberOfQuestions * 5 - incorrectCount - 3} experience!`;
            $(".mode_finished_left_div p").text(finishedHTML);
        }
    }

    $('#mcqs_review_unknown').click(function() {
        if (incorrectQuestions.length > 0) {
            $("#mcqs_complete").hide();
            $("#mcqs_content").show();

            unscrambledFinalMcqs = incorrectQuestions;
            numberOfQuestions = incorrectQuestions.length;
            incorrectQuestions = [];
            currentIndex = 0;

            finalMcqs = unscrambledFinalMcqs.map(mcq => {

                const shuffledAnswers = shuffleArray([...mcq.answers]); 
                return {
                    question: mcq.question,
                    answers: shuffledAnswers
                };
            });
            selectedMCQChoices = new Array(numberOfQuestions).fill(null);

            updateMcqsContentHeading(currentIndex, numberOfQuestions);
            displayMcq(currentIndex);
            
        }
        else {
            $('#mcqs_review_unknown').css('background-color', 'red');
            setTimeout(function() {
                $('#mcqs_review_unknown').css('background-color', '');
            }, 500);
        }
    });

    $('#mcqs_restart_mode').click(function() {
        $("#mcqs_complete").hide();
        $("#mcqs_content").show();

        incorrectQuestions = [];
        currentIndex = 0;
        selectedMCQChoices = new Array(numberOfQuestions).fill(null);

        updateMcqsContentHeading(currentIndex, numberOfQuestions);
        displayMcq(currentIndex);
    });


    $('#mcqs_complete_home').click(function() {
        $("#mcqs_landing").show();
        $("#mcqs_complete").hide();
    });
    //----------GRAPHING----------
    let graphingResponses = [];
    let finalGraphingQuestions = [];

    $('#graphing_start').click(function() {
        if (parseInt($('#graphing_number_of_questions_input').val()) > 0) {
            incorrectQuestions = [];
            numberOfQuestions = parseInt($('#graphing_number_of_questions_input').val());
            console.log(numberOfQuestions);
            finalGraphingQuestions = getRandomQuestions(graphingData, selectedTopics, numberOfQuestions);

            console.log(finalGraphingQuestions);
            
            currentIndex = 0;
            
            console.log("updated final graphing questions list: ");
            console.log(finalGraphingQuestions);

            $("#graphing").show();

            $("#graphing_landing").hide();
            $("#graphing_content").show();

            graphingResponses = new Array(numberOfQuestions).fill(null);
            updateGraphingContentHeading(currentIndex, numberOfQuestions);
            displayGraphing(currentIndex);
        }
        else {
            $('#graphing_start').css('background-color', 'red');
            setTimeout(function() {
                $('#graphing_start').css('background-color', '');
            }, 500);
        }
    });
    function updateGraphingContentHeading(index, total) {
        $('#graphing_content_heading').html(`Graphing: ${index + 1}/${total}`);
    }

    function drawPoint(x, y, response) {
        // Calculate relative coordinates based on graph interface dimensions
        var centerX = $('#graph_interface').width() / 2;
        var centerY = $('#graph_interface').height() / 2;
        var relativeX = centerX + x * 25; // Adjust based on the scale used in the original code
        var relativeY = centerY - y * 25; // Adjust based on the scale used in the original code
    
        // Append a new dot representing the point
        if (response) {
            $('#graph_interface').find('.responsePoint').remove();
            $('#graph_interface').append(`<div class="responsePoint" style="position: absolute; left: ${relativeX + $('#graph_interface').offset().left}px; top: ${relativeY + $('#graph_interface').offset().top}px; width: 5px; height: 5px; background-color: blue; border-radius: 50%;"></div>`);
        }
        else {
            $('#graph_interface').find('.promptPoint').remove();
            $('#graph_interface').append(`<div class="promptPoint" style="position: absolute; left: ${relativeX + $('#graph_interface').offset().left}px; top: ${relativeY + $('#graph_interface').offset().top}px; width: 5px; height: 5px; background-color: red; border-radius: 50%;"></div>`);
        }
    }

    $('#graph_interface').click(function(event) {

        var offset = $(this).offset();
        var relativeX = event.pageX - offset.left;
        var relativeY = event.pageY - offset.top;

        var centerX = $(this).width() / 2;
        var centerY = $(this).height() / 2;

        var graphX = Math.round((relativeX - centerX) / 25);
        var graphY = Math.round(( centerY - relativeY) / 25); 

        drawPoint(graphX, graphY, true);

        console.log({x: graphX, y: graphY});
        graphingResponses[currentIndex] = [graphX, graphY];
        console.log(graphingResponses);
    });

    $('#reset_graphing').click(function() {
        $('#graph_interface').find('.responsePoint').remove();
        console.log(graphingResponses);
        graphingResponses[currentIndex] = null;
    });

    function displayGraphing(index) {
        if (finalGraphingQuestions.length === 0 || index < 0 || index >= finalGraphingQuestions.length) {
            console.error();
            return;
        }

        $('#graphing_question_text p').text(finalGraphingQuestions[index].question);

        drawPoint(finalGraphingQuestions[currentIndex].preimage[0], finalGraphingQuestions[currentIndex].preimage[1], false);
        if (graphingResponses[currentIndex] != null) {
            drawPoint(graphingResponses[currentIndex][0], graphingResponses[currentIndex][1], true);
        }
        else {
            $('#graph_interface').find('.responsePoint').remove();
        }
    }

    $('#prev_graphing').click(function() {
        if (currentIndex > 0) {
            currentIndex -= 1;
            console.log("updated current index: " + currentIndex);
            updateGraphingContentHeading(currentIndex, numberOfQuestions)
            displayGraphing(currentIndex);
        }
    });
    
    $('#next_graphing').click(function() {
        if (currentIndex < numberOfQuestions - 1) {
            currentIndex += 1;
            console.log("updated current index: " + currentIndex);
            updateGraphingContentHeading(currentIndex, numberOfQuestions)
            displayGraphing(currentIndex);
        }
        else {
            displayGraphingComplete()
        }
    });

    function displayGraphingComplete() {
        if (graphingResponses.includes(null)) {
            var popup = document.getElementById("graphing_not_done_popup");
            popup.style.display = "block";
            
            setTimeout(function() {
                popup.style.display = "none";
            }, 2000);
        }
        else {
            for (var i = 0; i < numberOfQuestions; i++) {
                if (graphingResponses[i][0] != finalGraphingQuestions[i].image[0] || graphingResponses[i][1] != finalGraphingQuestions[i].image[1]) {
                    incorrectQuestions.push(finalGraphingQuestions[i]);
                }
            }
            console.log(graphingResponses);
            console.log(finalGraphingQuestions);
            console.log(incorrectQuestions);
            $("#graphing").show();

            $("#graphing_landing").hide();
            $("#graphing_content").hide();
            $("#graphing_complete").show();
            
            var incorrectCount = incorrectQuestions.length;
            var correctPercentage = (1- (incorrectCount / numberOfQuestions)) * 100;
            
            incrementExp(numberOfQuestions * 5 - incorrectCount - 3);
            var finishedHTML = `Finished! (${correctPercentage.toFixed(2)}% correct (${incorrectCount} incorrect). You earned ${numberOfQuestions * 5 - incorrectCount - 3} experience!`;
            $(".mode_finished_left_div p").text(finishedHTML);

            incrementExp(numberOfQuestions * 5 - incorrectCount - 3);
    
        }
    }

    $('#graphing_review_unknown').click(function() {
        if (incorrectQuestions.length > 0) {
            $("#graphing_complete").hide();
            $("#graphing_content").show();

            finalGraphingQuestions = incorrectQuestions;
            numberOfQuestions = incorrectQuestions.length;
            incorrectQuestions = [];
            currentIndex = 0;

            graphingResponses = new Array(numberOfQuestions).fill(null);

            updateGraphingContentHeading(currentIndex, numberOfQuestions);
            displayGraphing(currentIndex);
            
        }
        else {
            $('#graphing_review_unknown').css('background-color', 'red');
            setTimeout(function() {
                $('#graphing_review_unknown').css('background-color', '');
            }, 500);
        }
    });

    $('#graphing_restart_mode').click(function() {
        $("#graphing_complete").hide();
        $("#graphing_content").show();

        incorrectQuestions = [];
        currentIndex = 0;
        graphingResponses = new Array(numberOfQuestions).fill(null);

        updateGraphingContentHeading(currentIndex, numberOfQuestions);
        displayGraphing(currentIndex);
    });


    $('#graphing_complete_home').click(function() {
        $("#graphing_landing").show();
        $("#graphing_complete").hide();
    });
    //----------DATA----------
    let flashcardsData = {
        "topics": {
          "reflections": [
            {"term": "Reflection", "definition": "Flips a figure over a line to create a mirror image"},
            {"term": "Reflections always happen across a", "definition": "Line (of reflection)"},
            {"term": "Line of reflection", "definition": "Line over which a figure is reflected to create its mirror"},
            {"term": "Y axis", "definition": "Line drawn from top to bottom going through the origin"},
            {"term": "X axis", "definition": "Line drawn from left to right going through the origin"},
            {"term": "Y=x line", "definition": "Diagonal line from bottom-left to top-right through the origin"},
            {"term": "Y=-x line", "definition": "Diagonal line from top-left to bottom-right through the origin"}
          ],
          "rotations": [
            {"term": "Rotation", "definition": "Moving a figure around a center in a circular motion"},
            {"term": "Rotations always happen around a", "definition": "Point (of rotation)"},
            {"term": "Center", "definition": "Another way to say point of rotation; the point around which a figure is rotated"},
            {"term": "90 degrees", "definition": "¼ of a full circle"},
            {"term": "180 degrees", "definition": "½ of a full circle"},
            {"term": "270 degrees", "definition": "¾ of a full circle"},
            {"term": "360 degrees", "definition": "1 full circle"},
            {"term": "Rotations that result in the original image", "definition": "Rotate multiples of 360 degrees"},
            {"term": "Clockwise", "definition": "Top goes right, direction of numbers on a clock"},
            {"term": "Counterclockwise", "definition": "Top goes left, opposite direction of numbers on a clock"},
            {"term": "Anticlockwise", "definition": "Another way of saying counterclockwise"}
          ],
          "translations": [
            {"term": "Translation", "definition": "Slides a figure to a new location in some direction on the graph, horizontally, vertically, or a combination of both"},
            {"term": "Vertical component", "definition": "The units left or right the figure is moved"},
            {"term": "Horizontal component", "definition": "The units up or down the figure is moved"},
            {"term": "Left rule", "definition": "Subtract from x coordinate"},
            {"term": "Right rule", "definition": "Add to x coordinate"},
            {"term": "Up rule", "definition": "Add to y coordinate"},
            {"term": "Down rule", "definition": "Subtract from y coordinate"}
          ],
          "congruency": [
            {"term": "Congruent", "definition": "Figures with the same shape and size"},
            {"term": "Similar", "definition": "Figures with the same shape but not necessarily the same size"},
            {"term": "Rigid Transformation", "definition": "Transformations that result in a congruent image"},
            {"term": "Size Transformation", "definition": "Transformations that result in a similar image"},
            {"term": "T/F Reflections are rigid", "definition": "True"},
            {"term": "T/F Rotations are rigid", "definition": "True"},
            {"term": "T/F Translations are rigid", "definition": "True"},
            {"term": "T/F Dilation are rigid", "definition": "False"},
            {"term": "Two figures with same angles but maybe not the same side lengths are", "definition": "Similar"},
            {"term": "Two figures with same angles and side lengths are", "definition": "Congruent"}
          ],
          "all": [
            {"term": "Figure", "definition": "Something that can be transformed, like a shape, line, or point. When transforming a figure, apply the transformation to each component of the figure"},
            {"term": "Prime (A -> A')", "definition": "Symbol that means the image (result) of a transformation"},
            {"term": "Preimage", "definition": "The original figure before the transformation"},
            {"term": "Image", "definition": "The transformed figure after the transformation"},
            {"term": "T/F Order matters when doing multiple transformations in a row", "definition": "True"}
          ]
        }
    };

    let mcqsData = {
        "topics": {
            "reflections": [{
                    "question": "A point that is 1 unit to the right of and 2 unit above the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "1 unit to the right of and 2 unit below the origin",
                        "1 unit to the left of and 2 unit below the origin",
                        "1 unit to the right of and 2 unit above the origin",
                        "1 unit to the left of and 2 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the left of and 2 unit above the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "3 unit to the left of and 2 unit below the origin",
                        "3 unit to the right of and 2 unit below the origin",
                        "3 unit to the left of and 2 unit above the origin",
                        "3 unit to the right of and 2 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 5 unit to the right of and 2 unit below the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "5 units to the right of and 2 units above the origin",
                        "5 units to the left of and 2 units above the origin",
                        "5 units to the right of and 2 units below the origin",
                        "5 units to the left of and 2 units below the origin"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the left of and 3 unit below the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "3 unit to the left of and 3 unit above the origin",
                        "3 unit to the right of and 3 unit above the origin",
                        "3 unit to the left of and 3 unit below the origin",
                        "3 unit to the right of and 3 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 7 unit to the right of and 8 unit above the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "7 unit to the right of and 8 unit below the origin", 
                        "7 unit to the left of and 8 unit below the origin", 
                        "7 unit to the right of and 8 unit above the origin", 
                        "7 unit to the left of and 8 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 4 unit to the left of and 5 unit above the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "4 unit to the left of and 5 unit below the origin", 
                        "4 unit to the right of and 5 unit below the origin", 
                        "4 unit to the left of and 5 unit above the origin", 
                        "4 unit to the right of and 5 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the right of and 6 unit below the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "3 unit to the right of and 6 unit above the origin", 
                        "3 unit to the left of and 6 unit above the origin", 
                        "3 unit to the right of and 6 unit below the origin", 
                        "3 unit to the left of and 6 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 1 unit to the left of and 4 unit below the origin is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "1 unit to the left of and 4 unit above the origin", 
                        "1 unit to the right of and 4 unit above the origin", 
                        "1 unit to the left of and 4 unit below the origin", 
                        "1 unit to the right of and 4 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the right of and 3 unit above the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "2 unit to the left of and 3 unit above the origin", 
                        "2 unit to the right of and 3 unit above the origin", 
                        "2 unit to the left of and 3 unit below the origin", 
                        "2 unit to the right of and 3 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 7 unit to the left of and 5 unit above the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "7 unit to the right of and 5 unit above the origin", 
                        "7 unit to the left of and 5 unit above the origin", 
                        "7 unit to the right of and 5 unit below the origin", 
                        "7 unit to the left of and 5 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the right of and 7 unit below the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "3 unit to the left of and 7 unit below the origin", 
                        "3 unit to the right of and 7 unit below the origin", 
                        "3 unit to the left of and 7 unit above the origin", 
                        "3 unit to the right of and 7 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 1 unit to the left of and 2 unit below the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "1 unit to the right of and 2 unit below the origin", 
                        "1 unit to the left of and 2 unit below the origin", 
                        "1 unit to the right of and 2 unit above the origin", 
                        "1 unit to the left of and 2 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 5 unit to the right of and 3 unit above the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "5 unit to the left of and 3 unit above the origin", 
                        "5 unit to the right of and 3 unit above the origin", 
                        "5 unit to the left of and 3 unit below the origin", 
                        "5 unit to the right of and 3 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 6 unit to the left of and 6 unit above the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "6 unit to the right of and 6 unit above theorigin", 
                        "6 unit to the left of and 6 unit above the origin", 
                        "6 unit to the right of and 6 unit below the origin", 
                        "6 unit to the left of and 6 unit below the origin"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the right of and 8 unit below the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "2 unit to the left of and 8 unit below the origin", 
                        "2 unit to the right of and 8 unit below the origin", 
                        "2 unit to the left of and 8 unit above the origin", 
                        "2 unit to the right of and 8 unit above the origin"
                    ]
                },
                {
                    "question": "A point that is 9 unit to the left of and 4 unit below the origin is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "9 unit to the right of and 4 unit below the origin", 
                        "9 unit to the left of and 4 unit below the origin", 
                        "9 unit to the right of and 4 unit above the origin", 
                        "9 unit to the left of and 4 unit below the origin"
                    ]
                },
                {
                    "question": "A point somewhere to the left of the origin is reflected over the x axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere to the left of the origin", 
                        "It's somewhere to the right of the origin", 
                        "It's somewhere above the origin", 
                        "It's somewhere below the origin"
                    ]
                },
                {
                    "question": "A point somewhere to the right of the origin is reflected over the x axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere to the right of the origin", 
                        "It's somewhere to the left of the origin", 
                        "It's somewhere above the origin", 
                        "It's somewhere below the origin"
                    ]
                },
                {
                    "question": "A point somewhere above the origin is reflected over the x axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere below the origin", 
                        "It's somewhere above the origin", 
                        "It's somewhere to the right of the origin", 
                        "It's somewhere to the left of the origin"
                    ]
                },
                {
                    "question": "A point somewhere below the origin is reflected over the x axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere above the origin", 
                        "It's somewhere below the origin", 
                        "It's somewhere to the right of the origin", 
                        "It's somewhere to the left of the origin"
                    ]
                },
                {
                    "question": "A point somewhere to the left of the origin is reflected over the y axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere to the right of the origin", 
                        "It's somewhere to the left of the origin", 
                        "It's somewhere above the origin", 
                        "It's somewhere below the origin"
                    ]
                },
                {
                    "question": "A point somewhere to the right of the origin is reflected over the y axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere to the left of the origin", 
                        "It's somewhere to the right of the origin", 
                        "It's somewhere above the origin", 
                        "It's somewhere below the origin"]
                },
                {
                    "question": "A point somewhere above the origin is reflected over the y axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere above the origin", 
                        "It's somewhere below the origin", 
                        "It's somewhere to the left of the origin", 
                        "It's somewhere to the right of the origin"]
                },
                {
                    "question": "A point somewhere below the origin is reflected over the y axis. What do we know for sure about the image of the transformation?",
                    "answers": [
                        "It's somewhere below the origin", 
                        "It's somewhere above the origin", 
                        "It's somewhere to the left of the origin", 
                        "It's somewhere to the right of the origin"
                    ]
                },
                {
                    "question": "The preimage (1, 2) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(1, -2)", 
                        "(-1, -2)", 
                        "(1, 2)", 
                        "(-1, 2)"
                    ]
                },
                {
                    "question": "The preimage (-3, 2) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(-3, -2)", 
                        "(3, -2)", 
                        "(-3, 2)", 
                        "(3, 2)"
                    ]
                },
                {
                    "question": "The preimage (5, -2) reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(5, 2)", 
                        "(-5, 2)", 
                        "(5, -2)", 
                        "(-5, -2)"
                    ]
                },
                {
                    "question": "The preimage (-3, -3) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(-3, 3)",
                        "(3, 3)", 
                        "(-3, -3)", 
                        "(3, -3)"
                    ]
                },
                {
                    "question": "The preimage (7, 8) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(7, -8)", 
                        "(-7, -8)", 
                        "(7, 8)", 
                        "(-7, 8)"
                    ]
                },
                {
                    "question": "The preimage (-4, 5) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(-4, -5)", 
                        "(4, -5)", 
                        "(-4, 5)", 
                        "(4, 5)"
                    ]
                },
                {
                    "question": "The preimage (3, -6) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(3, 6)", 
                        "(-3, 6)", 
                        "(3, -6)", 
                        "(-3, -6)"
                    ]
                },
                {
                    "question": "The preimage (-1, -4) is reflected over the x axis. Where is the image of the transformation?",
                    "answers": [
                        "(-1, 4)", 
                        "(1, 4)", 
                        "(-1, -4)", 
                        "(1, -4)"]
                },
                {
                    "question": "The preimage (2, 3) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(-2, 3)", 
                        "(2, 3)", 
                        "(-2, -3)", 
                        "(2, -3)"
                    ]
                },
                {
                    "question": "The preimage (-7, 5) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(7, 5)", 
                        "(-7, 5)", 
                        "(7, -5)", 
                        "(-7, -5)"
                    ]
                },
                {
                    "question": "The point (3, -7) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(-3, -7)", 
                        "(3, -7)", 
                        "(3, 7)", 
                        "(-3, 7)"
                    ]
                },
                {
                    "question": "The preimage (-1, -2) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(1, -2)", 
                        "(-1, -2)", 
                        "(1, 2)", 
                        "(-1, 2)"
                    ]
                },
                {
                    "question": "The preimage (5, 3) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(-5, 3)", 
                        "(5, 3)", 
                        "(-5, -3)", 
                        "(5, -3)"
                    ]
                },
                {
                    "question": "The preimage (-6, 6) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(6, 6)", 
                        "(-6, 6)", 
                        "(6, -6)", 
                        "(-6, -6)"
                    ]
                },
                {
                    "question": "The preimage (2, -8) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(-2, -8)", 
                        "(2, -8)", 
                        "(-2, 8)", 
                        "(2, 8)"
                    ]
                },
                {
                    "question": "The preimage (-9, -4) is reflected over the y axis. Where is the image of the transformation?",
                    "answers": [
                        "(9, -4)", 
                        "(-9, -4)", 
                        "(9, 4)", 
                        "(-9, -4)"
                    ]
                }
            ],
            "rotations": [{
                    "question": "A point that is 2 unit to the right of and 4 unit above the origin is rotated 90 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(4, 2)", 
                        "(2, 4)",
                        "(-4, 2)", 
                        "(-2, 4)"
                    ]
                },
                {
                    "question": "A point that is 1 unit to the left of and 6 unit below the origin is rotated 90 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-6, 1)", 
                        "(-1, 6)", 
                        "(6, -1)", 
                        "(1, -6)"
                    ]
                },
                {
                    "question": "A point that is 5 unit to the right of and 7 unit below the origin is rotated 180 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(5, 7)",
                        "(7, 5)",
                        "(5, -7)",
                        "(7, -5)"
                    ]
                },
                {
                    "question": "A point that is 6 unit to the left of and 1 unit above the origin is rotated 180 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(6, -1)",
                        "(1, -6)",
                        "(-6, 1)",
                        "(-1, 6)"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the right of and 2 unit above the origin is rotated 270 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-2, 2)",
                        "(2, 2)",
                        "(-2, -2)", 
                        "(2, -2)"
                    ]
                },
                {
                    "question": "A point that is 9 unit to the left of and 5 unit below the origin is rotated 270 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(5, -9)", 
                        "(9, -5)", 
                        "(-5, 9)", 
                        "(-9, 5)"
                    ]
                },
                {
                    "question": "A point that is 4 unit to the right of and 4 unit below the origin is rotated 360 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(4, -4)", 
                        "(-4, -4)", 
                        "(4, 4)", 
                        "(-4, 4)"
                    ]
                },
                {
                    "question": "A point that is 6 unit to the left of and 2 unit above the origin is rotated 360 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-6, 2)", 
                        "(-2, 6)", 
                        "(6, -2)", 
                        "(2, -6)"
                    ]
                },
                {
                    "question": "A point that is 8 unit to the right of and 3 unit above the origin is rotated 90 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-3, 8)", 
                        "(-8, 3)", 
                        "(3, -8)", 
                        "(8, -3)"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the left of and 3 unit below the origin is rotated 90 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(3, -2)", 
                        "(2, -3)", 
                        "(-3, 2)", 
                        "(-2, 3)"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the right of and 1 unit below the origin is rotated 180 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(3, -1)", 
                        "(1, -3)", 
                        "(3, 1)", 
                        "(1, 3)"
                    ]
                },
                {
                    "question": "A point that is 0 unit to the left of and 7 unit above the origin is rotated 180 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(0, -7)",
                        "(-7, 0)", 
                        "(0, 7)", 
                        "(7, 0)"
                    ]
                },
                {
                    "question": "A point that is 9 unit to the right of and 3 unit above the origin is rotated 270 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(3, -9)", 
                        "(9, -3)", 
                        "(-3, 9)", 
                        "(-9, 3)"
                    ]
                },
                {
                    "question": "A point that is 7 unit to the left of and 4 unit below the origin is rotated 270 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-4, 7)", 
                        "(-7, 4)", 
                        "(4, -7)", 
                        "(7, -4)"
                    ]
                },
                {
                    "question": "A point that is 7 unit to the right of and 5 unit below the origin is rotated 360 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(7, -5)", 
                        "(5, -7)", 
                        "(-7, 5)", 
                        "(-5, 7)"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the left of and 2 unit above the origin is rotated 360 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-2, 2)", 
                        "(2, 2)", 
                        "(-2, -2)", 
                        "(2, -2)"
                    ]
                },
                {
                    "question": "A 90-degree clockwise rotation is the same as",
                    "answers": [
                        "A 270-degree counterclockwise rotation", 
                        "A 180-degree counterclockwise rotation",
                        "A 90-degree counterclockwise rotation", 
                        "A 270-degree clockwise rotation"
                    ]
                },
                {
                    "question": "A 180-degree clockwise rotation is the same as",
                    "answers": [
                        "A 180-degrees counterclockwise rotation", 
                        "A 180-degrees clockwise rotation", 
                        "A 90-degrees counterclockwise rotation", 
                        "A 270-degrees counterclockwise rotation"
                    ]
                },
                {
                    "question": "A 270-degree clockwise rotation is the same as",
                    "answers": [
                        "A 90-degree counterclockwise rotation", 
                        "A 90-degree clockwise rotation", 
                        "A 180-degree counterclockwise rotation", 
                        "A 270-degree counterclockwise rotation"
                    ]
                },
                {
                    "question": "A 360-degree rotation is the same as",
                    "answers": [
                        "A 0-degree rotation", 
                        "A 90-degree clockwise rotation", 
                        "A 180-degree rotation", 
                        "A 90-degree counterclockwise rotation"
                    ]
                },
                {
                    "question": "The preimage (2, 4) is rotated 90 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(4, -2)", 
                        "(2, -4)", 
                        "(-4, 2)", 
                        "(-2, 4)"
                    ]
                },
                {
                    "question": "The preimage (-1, -6) is rotated 90 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-6, 1)", 
                        "(-1, 6)", 
                        "(6, -1)", 
                        "(1, -6)"
                    ]
                },
                {
                    "question": "The preimage (-6, 1) is rotated 90 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-6, 1)",
                        "(-1, 6)", 
                        "(6, -1)", 
                        "(1, -6)"
                    ]
                },
                {
                    "question": "The preimage (5, -7) is rotated 180 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-5, 7)", 
                        "(-7, 5)", 
                        "(5, -7)", 
                        "(7, -5)"
                    ]
                },
                {
                    "question": "The preimage (-6, 1) is rotated 180 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(6, -1)", 
                        "(1, -6)", 
                        "(-6, 1)", 
                        "(-1, 6)"
                    ]
                },
                {
                    "question": "The preimage (2, 2) is rotated 270 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-2, 2)", 
                        "(2, 2)", 
                        "(-2, -2)", 
                        "(2, -2)"
                    ]
                },
                {
                    "question": "The preimage (-9, -5) is rotated 270 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(5, -9)", 
                        "(9, -5)", 
                        "(-5, 9)", 
                        "(-9, 5)"
                    ]
                },
                {
                    "question": "The preimage (4, -4) is rotated 360 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(4, -4)", 
                        "(-4, -4)", 
                        "(4, 4)", 
                        "(-4, 4)"
                    ]
                },
                {
                    "question": "The preimage (-6, 2) is rotated 360 degrees clockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-6, 2)", 
                        "(-2, 6)", 
                        "(6, -2)", 
                        "(2, -6)"
                    ]
                },
                {
                    "question": "The preimage (8, 3) is rotated 90 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-3, 8)", 
                        "(-8, 3)", 
                        "(3, -8)", 
                        "(8, -3)"
                    ]
                },
                {
                    "question": "The preimage (-2, -3) is rotated 90 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(3, -2)", 
                        "(2, -3)", 
                        "(-3, 2)", 
                        "(-2, 3)"
                    ]
                },
                {
                    "question": "The preimage (3, -1) rotated 180 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(3, -1)", 
                        "(1, -3)",
                        "(3, 1)", 
                        "(1, 3)"
                    ]
                },
                {
                    "question": "The preimage (0, 7) is rotated 180 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(0, -7)", 
                        "(-7, 0)", 
                        "(0, 7)", 
                        "(7, 0)"
                    ]
                },
                {
                    "question": "The preimage (9, 3) is rotated 270 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(3, -9)", 
                        "(9, -3)", 
                        "(-3, 9)", 
                        "(-9, 3)"
                    ]
                },
                {
                    "question": "The preimage (-7, -4) is rotated 270 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-4, 7)", 
                        "(-7, 4)", 
                        "(4, -7)", 
                        "(7, -4)"]
                },
                {
                    "question": "The preimage (7, -5) rotated 360 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(7, -5)", 
                        "(5, -7)", 
                        "(-7, 5)", 
                        "(-5, 7)"
                    ]
                },
                {
                    "question": "The preimage (-2, 2) is rotated 360 degrees counterclockwise. Where is the image of the transformation?",
                    "answers": [
                        "(-2, 2)", 
                        "(2, 2)", 
                        "(-2, -2)", 
                        "(2, -2)"
                    ]
                }
            ],
            "translations": [{
                    "question": "A point that is 2 unit to the right of and 5 unit above the origin is translated 3 units to the right and 5 units up. Where is the image of the transformation?",
                    "answers": [
                        "5 units to the right of and 10 units above the origin",
                        "3 units to the left of 10 units above the origin",
                        "5 units to the right of and 0 units above the origin",
                        "3 units to the left of and 0 units above the origin"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the left of and 0 unit above the origin is translated 0 units to the right and 6 units up. Where is the image of the transformation?",
                    "answers": [
                        "3 units to the left of and 6 units above the origin",
                        "3 units to the left of and 6 units below the origin",
                        "9 units to the left of and 0 units above the origin",
                        "3 units to the right of and 0 units above the origin"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the right of and 9 unit below the origin is translated 3 units to the left and 1 unit up. Where is the image of the transformation?",
                    "answers": [
                        "1 unit to the left of and 8 units below the origin",
                        "3 units to the right of and 8 units below the origin",
                        "1 unit to the left of and 6 units below the origin",
                        "3 units to the right of and 6 units below the origin"
                    ]
                },
                {
                    "question": "A point that is 8 unit to the left of and 8 unit below the origin is translated 5 units to the left and 5 units up. Where is the image of the transformation?",
                    "answers": [
                        "13 units to the left of and 3 units below the origin",
                        "3 units to the left of and 13 units below the origin",
                        "13 units to the left of and 13 units below the origin",
                        "3 units to the left of and 3 units below the origin"
                    ]
                },
                {
                    "question": "A point that is 3 unit to the right of and 6 unit above the origin is translated 5 units to the right and 4 units down. Where is the image of the transformation?",
                    "answers": [
                        "8 units to the right of and 2 units above the origin",
                        "1 unit to the left of and 11 units above the origin",
                        "8 units to the left of and 11 units above the origin",
                        "1 unit to the left of and 2 units above the origin"
                    ]
                },
                {
                    "question": "A point that is 6 unit to the left of and 2 unit above the origin is translated 6 units to the right and 6 units down. Where is the image of the transformation?",
                    "answers": [
                        "0 units to the right of and 4 units below the origin",
                        "12 units to the left of and 4 units below the origin",
                        "0 units to the right of and 8 units above the origin",
                        "12 units to the left of and 8 units above the origin"
                    ]
                },
                {
                    "question": "A point that is 2 unit to the right of and 3 unit below the origin is translated 2 units to the left and 3 units down. Where is the image of the transformation?",
                    "answers": [
                        "0 units to the right of and 6 units below the origin",
                        "4 units to the right of and 6 units below the origin",
                        "0 units to the right of and 0 units above the origin",
                        "4 units to the right of 0 units above the origin"
                    ]
                },
                {
                    "question": "A point that is 1 unit to the left of and 5 unit below the origin is translated 4 units to the left and 9 units down. Where is the image of the transformation?",
                    "answers": [
                        "5 units to the left of and 14 units below the origin",
                        "3 units to the right of and 14 units below the origin",
                        "5 units to the left of and 4 units above the origin",
                        "3 units to the right of and 14 units below the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 5 unit to the right and 2 unit up is 0 unit to the right of and 4 unit above the origin, where was the original (preimage) point?",
                    "answers": [
                        "5 units to the left of and 2 units above the origin",
                        "5 units to the right of and 2 units below the origin",
                        "9 units to the right of and 2 units above the origin",
                        "9 units to the left of and 2 units above the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 1 unit to the left and 2 unit up is 4 unit to the right of and 2 unit above the origin, where was the original (preimage) point?",
                    "answers": [
                        "5 units to the right of and 0 units above the origin",
                        "5 units to the right of and 4 units above the origin",
                        "3 units to the right of and 0 units above the origin",
                        "3 units to the right of and 3 units above the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 5 unit to the right and 6 unit down is 9 unit to the left of and 0 unit above the origin, where was the original (preimage) point?",
                    "answers": [
                        "14 units to the left of and 6 units above the origin",
                        "4 units to the left of and 6 units above the origin",
                        "15 units to the left of and 5 units below the origin",
                        "15 unit to the left of and 5 units above the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 8 unit to the left and 0 unit down is 1 unit to the left of and 0 unit above the origin, where was the original (preimage) point?",
                    "answers": [
                        "7 units to the right of and 0 units above the origin",
                        "9 units to the left of and 0 units above the origin",
                        "7 units to the left of and 8 units above the origin",
                        "9 units to the left of and 8 units above the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 2 unit to the right and 1 unit up is 0 unit to the right of and 2 unit below the origin, where was the original (preimage) point?",
                    "answers": [
                        "2 units to the left of and 3 units below the origin",
                        "2 units to the right of and 1 unit below the origin",
                        "2 units to the left of and 1 units below the origin",
                        "2 units to the right of and 3 units below the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 3 unit to the left and 8 unit up is 2 unit to the right of and 1 unit below the origin, where was the original (preimage) point?",
                    "answers": [
                        "5 units to the right of and 9 units below the origin",
                        "1 unit to the left of and 9 units below the origin",
                        "5 units to the right of and 7 units above the origin",
                        "1 unit to the left of and 7 units above the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 0 unit to the right and 7 unit down is 8 unit to the left of and 9 unit below the origin, where was the original (preimage) point?",
                    "answers": [
                        "8 units to the left of and 2 units below the origin",
                        "8 units to the left of and 16 units below the origin",
                        "9 units to the right of and 9 units below the origin",
                        "7 units to the left of and 1 unit below the origin"
                    ]
                },
                {
                    "question": "If the image of a point that was translated 9 unit to the left and 2 unit down is 9 unit to the left of and 8 unit below the origin, where was the original (preimage) point?",
                    "answers": [
                        "0 units to the right of and 6 units below the origin",
                        "18 units to the left of and 2 units above the origin",
                        "0 units to the right of and 2 units above the origin",
                        "18 units to the left of 6 units below the origin"
                    ]
                },
                {
                    "question": "If a point is translated only to the right, what happens to the x and y coordinates?",
                    "answers": [
                        "x increases, y stays the same",
                        "x decreases, y stays the same",
                        "x stays the same, y increases",
                        "x stays the same, y decreases"
                    ]
                },
                {
                    "question": "If a point is translated only to the left, what happens to the x and y coordinates?",
                    "answers": [
                        "x decreases, y stays the same",
                        "x increases, y stays the same",
                        "x stays the same, y increases",
                        "x stays the same, y decreases"
                    ]
                },
                {
                    "question": "If a point is translated only upwards, what happens to the x and y coordinates?",
                    "answers": [
                        "x stays the same, y increases",
                        "x stays the same, y decreases",
                        "x decreases, y stays the same",
                        "x increases, y stays the same"
                    ]
                },
                {
                    "question": "If a point is translated only downwards, what happens to the x and y coordinates?",
                    "answers": [
                        "x stays the same, y decreases",
                        "x stays the same, y increases",
                        "x decreases, y stays the same",
                        "x increases, y stays the same"
                    ]
                },
                {
                    "question": "If a point is translated to the right and upwards, what happens to the x and y coordinates?",
                    "answers": [
                        "x increases, y increases",
                        "x increases, y decreases",
                        "x decreases, y increases",
                        "x decreases, y decreases"
                    ]
                },
                {
                    "question": "If a point is translated to the left and upwards, what happens to the x and y coordinates?",
                    "answers": [
                        "x decreases, y increases",
                        "x decreases, y decreases",
                        "x increases, y increases",
                        "x increases, y decreases"
                    ]
                },
                {
                    "question": "If a point is translated to the right and downwards, what happens to the x and y coordinates?",
                    "answers": [
                        "x increases, y decreases",
                        "x increases, y increases",
                        "x decreases, y increases",
                        "x decreases, y decreases"
                    ]
                },
                {
                    "question": "If a point is translated to the left and downwards, what happens to the x and y coordinates?",
                    "answers": [
                        "x decreases, y decreases",
                        "x decreases, y increases",
                        "x increases, y decreases",
                        "x increases, y increases"
                    ]
                },
                {
                    "question": "The preimage (2, 5) is translated with the rule (x+3, y+5). Where is the image of the transformation?",
                    "answers": [
                        "(5, 10)",
                        "(-3, 10)",
                        "(5, 0)",
                        "(-3, 0)"
                    ]
                },
                {
                    "question": "The preimage (-3, 0) is translated with the rule (x+0, y+6). Where is the image of the transformation?",
                    "answers": [
                        "(-3, 6)",
                        "(-3, -6)",
                        "(-9, 0)",
                        "(3, 0)"
                    ]
                },
                {
                    "question": "The preimage (2, -9) is translated with the rule (x-3 , y+1). Where is the image of the transformation?",
                    "answers": [
                        "(-1, -8)",
                        "(3, -8)",
                        "(-1, -6)",
                        "(3, -6)"
                    ]
                },
                {
                    "question": "The preimage (-8, -8) is translated with the rule (x-5, y+5). Where is the image of the transformation?",
                    "answers": [
                        "(-13, -3)",
                        "(-3, -13)",
                        "(-13, -13)",
                        "(-3, -3)"
                    ]
                },
                {
                    "question": "The preimage (3, 6) is translated with the rule (x+5, y-4). Where is the image of the transformation?",
                    "answers": [
                        "(8, 2)",
                        "(-1, 11)",
                        "(-8, 11)",
                        "(-1, 2)"
                    ]
                },
                {
                    "question": "The preimage (-6, 2) is translated with the rule (x+6, y-6). Where is the image of the transformation?",
                    "answers": [
                        "(0, -4)",
                        "(-12, -4)",
                        "(0, 8)",
                        "(-12, 8)"
                    ]
                },
                {
                    "question": "The preimage (2, -3) is translated with the rule (x-2, y-3). Where is the image of the transformation?",
                    "answers": [
                        "(0, -6)",
                        "(4, -6)",
                        "(0, 0)",
                        "(4, 0)"
                    ]
                },
                {
                    "question": "The preimage (-1, -5) is translated with the rule (x-4, y-9). Where is the image of the transformation?",
                    "answers": [
                        "(-5, -14)",
                        "(3, -14)",
                        "(-5, 4)",
                        "(3, -14)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x+5, y+2) is the point (0, 4), where was the original (preimage) point?",
                    "answers": [
                        "(-5, 2)",
                        "(5, -2)",
                        "(9, 2)",
                        "(-9, 2)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x-1, y+2) is the point (4, 2), where was the original (preimage) point?",
                    "answers": [
                        "(5, 0)",
                        "(5, 4)",
                        "(3, 0)",
                        "(3, 3)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x+5, y-6) the point (-9, 0), where was the original (preimage) point?",
                    "answers": [
                        "(-14, 6)",
                        "(-4, 6)",
                        "(-15, -5)",
                        "(-15, 5)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x-8, y+0) is the point (-1, 0), where was the original (preimage) point?",
                    "answers": [
                        "(7, 0)",
                        "(-9, 0)",
                        "(-7, 8)",
                        "(-9, 8)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x+2, y+1) is the point (0, -2), where was the original (preimage) point?",
                    "answers": [
                        "(-2, -3)",
                        "(2, -1)",
                        "(-2, -1)",
                        "(2, -3)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x-3, y+8) is the point (2, -1), where was the original (preimage) point?",
                    "answers": [
                        "(5, -9)",
                        "(-1, -9)",
                        "(5, 7)",
                        "(-1, 7)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x+0, y-7) is the point (-8, -9), where was the original (preimage) point?",
                    "answers": [
                        "(-8, -2)",
                        "(-8, -16)",
                        "(9, -9)",
                        "(-7, -1)"
                    ]
                },
                {
                    "question": "If the image of a point that was translated with the rule (x-9, y-2) is the point (-9, -8), where was the original (preimage) point?",
                    "answers": [
                        "(0, -6)",
                        "(-18, 2)",
                        "(0, 2)",
                        "(-18, -6)"
                    ]
                }
            ],
            "congruency": [{
                    "question": "A rectangle has a height of 3 units and a width of 2 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Rectangle with height of 2 units and width of 3 units",
                        "Rectangle with height of 6 units and width of 4 units",
                        "Rectangle with height of 5 units and width of 4 units",
                        "Rectangle with height of 4 units and width of 6 units"
                    ]
                },
                {
                    "question": "A rectangle has a height of 5 units and a width of 4 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Rectangle with height of 4 units and width of 5 units",
                        "Rectangle with height of 8 units and width of 10 units",
                        "Rectangle with height of 10 units and width of 8 units",
                        "Both the 4x5 and 8x10 rectangle"
                    ]
                },
                {
                    "question": "A rectangle has a height of 6 units and a width of 1 unit. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Rectangle with height of 1 units and width of 6 units",
                        "Rectangle with height of 3 units and width of 2 units",
                        "Rectangle with height of 12 units and width of 2 units",
                        "Both the 1x6 and 3x2 rectangle"
                    ]
                },
                {
                    "question": "A rectangle has a height of 2 units and a width of 3 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Rectangle with height of 3 inches units and width of 2 units",
                        "Rectangle with height of 1 units and width of 6 units",
                        "Rectangle with height of 6 units and width of 2 units",
                        "Rectangle with height of 12 units and width of 2 units"
                    ]
                },
                {
                    "question": "A rectangle has a height of 7 units and a width of 8 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Both the 7x8 and 8x7 rectangle",
                        "Rectangle with height of 7 units and width of 8 units",
                        "Rectangle with height of 8 units and width of 7 units",
                        "Rectangle with height of 3 units and width of 4 units"
                    ]
                },
                {
                    "question": "A rectangle has a height of 5 units and a width of 2 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Both the 5x2 and 2x5 rectangle",
                        "Rectangle with height of 2 units and width of 5 units",
                        "Rectangle with height of 5 units and width of 2 units",
                        "Rectangle with height of 10 units and width of 4 units"
                    ]
                },
                {
                    "question": "A rectangle has a height of 9 units and a width of 3 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Both the 3x9 and 9x3 rectangle",
                        "Rectangle with height of 3 units and width of 9 units",
                        "Rectangle with height of 9 units and width of 3 units",
                        "Rectangle with height of 1 units and width of 3 units"
                    ]
                },
                {
                    "question": "A rectangle has a height of 2 units and a width of 4 units. Which of the following rectangles is congruent to it?",
                    "answers": [
                        "Both the 4x2 and 2x4 rectangle",
                        "Rectangle with height of 4 units and width of 2 units",
                        "Rectangle with height of 2 units and width of 4 units",
                        "Rectangle with height of 1 units and width of 2 units"
                    ]
                },
                {
                    "question": "Which of the following combinations of transformations doesn't maintain the congruency of the figure?",
                    "answers": [
                        "A dilation and then a rotation",
                        "A rotation then a translation",
                        "A reflection then a rotation",
                        "2 reflections in a row"
                    ]
                },
                {
                    "question": "Which of the following combinations of transformations doesn't maintain the congruency of the figure?",
                    "answers": [
                        "A translation then a dilation",
                        "A reflection then a rotation",
                        "2 translations in a row"
                    ]
                },
                {
                    "question": "Which of the following combinations of transformations doesn't maintain the congruency of the figure?",
                    "answers": [
                        "A dilation then a reflection",
                        "A rotation then a translation",
                        "A reflection then a rotation",
                        "A translation then a reflection"
                    ]
                },
                {
                    "question": "Which of the following combinations of transformations doesn't maintain the congruency of the figure?",
                    "answers": [
                        "A rotation then a dilation",
                        "A rotation then a translation",
                        "2 rotations in a row",
                        "A translation then a rotation"
                    ]
                }
            ],
            "all": []
        }
    };
    let graphingData = {
        "topics": {
            "reflections": [
                    {"question": "What is the reflection across the y axis?", "preimage": [2, 8], "image": [2, -8]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [8, 0], "image": [8, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-6, 0], "image": [-6, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [2, 1], "image": [2, -1]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [7, -8], "image": [7, 8]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-1, -8], "image": [-1, 8]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [0, 6], "image": [0, -6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [1, 7], "image": [1, -7]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [5, -3], "image": [5, 3]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-4, -5], "image": [-4, 5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [4, 4], "image": [4, -4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [4, 5], "image": [4, -5]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [5, 2], "image": [5, -2]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-4, -6], "image": [-4, 6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-3, -5], "image": [-3, 5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [0, 8], "image": [0, -8]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [3, 4], "image": [3, -4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [7, -4], "image": [7, 4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-4, 6], "image": [-4, -6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-1, -6], "image": [-1, 6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, -1], "image": [1, 1]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [4, -5], "image": [4, 5]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [5, 0], "image": [5, 0]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [6, -3], "image": [6, 3]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [2, 0], "image": [2, 0]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-4, -3], "image": [-4, 3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-8, -2], "image": [-8, 2]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [3, 2], "image": [3, -2]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-6, 3], "image": [-6, -3]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [3, -6], "image": [3, 6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [1, 6], "image": [1, -6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [2, -1], "image": [2, 1]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, 2], "image": [1, -2]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-1, 0], "image": [-1, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-2, 4], "image": [-2, -4]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [8, 5], "image": [8, -5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, 6], "image": [1, -6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [5, -7], "image": [5, 7]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [6, 8], "image": [6, -8]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-5, 6], "image": [-5, -6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-7, 4], "image": [-7, -4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-5, 0], "image": [-5, 0]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-2, 6], "image": [-2, -6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-5, 8], "image": [-5, -8]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [5, -5], "image": [5, 5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-4, -4], "image": [-4, 4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [6, -4], "image": [6, 4]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [2, 6], "image": [2, -6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [4, 7], "image": [4, -7]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-1, -1], "image": [-1, 1]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-2, 0], "image": [-2, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, -5], "image": [1, 5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [3, -8], "image": [3, 8]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [6, 5], "image": [6, -5]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [4, 6], "image": [4, -6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [8, -4], "image": [8, 4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [6, 1], "image": [6, -1]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, -3], "image": [1, 3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [8, -3], "image": [8, 3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-6, -2], "image": [-6, 2]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-2, -3], "image": [-2, 3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [7, -3], "image": [7, 3]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [5, 2], "image": [5, -2]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [0, 1], "image": [0, -1]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [3, 1], "image": [3, -1]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-7, -5], "image": [-7, 5]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-7, -6], "image": [-7, 6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [6, 4], "image": [6, -4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-1, -7], "image": [-1, 7]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-2, 1], "image": [-2, -1]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, 3], "image": [1, -3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [5, -3], "image": [5, 3]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-6, -3], "image": [-6, 3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [8, -2], "image": [8, 2]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [6, 4], "image": [6, -4]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-2, 5], "image": [-2, -5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-7, 5], "image": [-7, -5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [1, -7], "image": [1, 7]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-5, -7], "image": [-5, 7]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-8, 5], "image": [-8, -5]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [3, 0], "image": [3, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [2, 7], "image": [2, -7]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-6, 6], "image": [-6, -6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-1, -3], "image": [-1, 3]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-1, 0], "image": [-1, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [0, 7], "image": [0, -7]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-2, 7], "image": [-2, -7]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-1, 4], "image": [-1, -4]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-8, 6], "image": [-8, -6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [4, 0], "image": [4, 0]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [6, -1], "image": [6, 1]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [4, -7], "image": [4, 7]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [0, -6], "image": [0, 6]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [2, -6], "image": [2, 6]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [0, 7], "image": [0, -7]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [3, -5], "image": [3, 5]}, 
                    {"question": "What is the reflection across the y axis?", "preimage": [-7, 1], "image": [-7, -1]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [0, -2], "image": [0, 2]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-8, -5], "image": [-8, 5]}, 
                    {"question": "What is the reflection across the x axis?", "preimage": [-1, -7], "image": [-1, 7]}, 
            ],
            "rotations": [
                    {"question": "What is the rotation 360 degrees?", "preimage": [0, 8], "image": [0, 8]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [8, 3], "image": [-3, -8]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [8, -8], "image": [8, -8]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [2, 7], "image": [2, 7]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-5, -6], "image": [-6, 5]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [0, -4], "image": [-4, 0]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [6, 6], "image": [6, 6]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [-5, 7], "image": [-7, -5]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [0, -4], "image": [-4, 0]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-3, 6], "image": [-3, 6]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-1, 8], "image": [-1, 8]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [2, 2], "image": [-2, 2]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [8, 1], "image": [1, -8]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [0, -7], "image": [-7, 0]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [4, 8], "image": [4, 8]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [-6, 2], "image": [-2, -6]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-8, 5], "image": [-5, 8]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-8, -5], "image": [-8, -5]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [6, -2], "image": [2, 6]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [5, 8], "image": [-8, -5]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-3, 1], "image": [1, 3]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [-3, 3], "image": [3, 3]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [-7, -5], "image": [-5, 7]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [0, -4], "image": [4, 0]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-3, -7], "image": [7, 3]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [7, -5], "image": [-5, -7]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-5, 8], "image": [-8, 5]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [-1, 0], "image": [0, 1]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [1, -6], "image": [6, 1]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [4, 1], "image": [4, 1]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-5, -2], "image": [-2, 5]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [3, 7], "image": [7, -3]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [3, -8], "image": [3, -8]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [-8, 8], "image": [8, 8]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [-3, 0], "image": [0, -3]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-2, 8], "image": [-2, 8]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-1, 4], "image": [4, 1]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [5, -5], "image": [-5, -5]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-6, 6], "image": [-6, 6]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-6, -4], "image": [-6, -4]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [1, 3], "image": [1, 3]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-5, 4], "image": [4, 5]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [2, 8], "image": [-8, 2]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [-4, -3], "image": [3, -4]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-2, -1], "image": [-2, -1]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [-6, 6], "image": [-6, -6]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [4, 4], "image": [-4, -4]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-7, 5], "image": [-7, 5]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [0, 4], "image": [-4, 0]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [3, 0], "image": [0, -3]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [2, 8], "image": [2, 8]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [2, 6], "image": [6, -2]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [8, -2], "image": [2, 8]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [2, 5], "image": [2, 5]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-8, 6], "image": [-8, 6]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-1, -3], "image": [-1, -3]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [3, 2], "image": [-2, 3]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [6, 4], "image": [6, 4]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [4, 7], "image": [-7, 4]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [-4, 3], "image": [-3, -4]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-7, -6], "image": [-6, 7]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-5, -3], "image": [-5, -3]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-8, 8], "image": [-8, 8]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-3, -6], "image": [6, 3]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-3, -5], "image": [-3, -5]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [7, 7], "image": [7, 7]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-8, -3], "image": [3, 8]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-2, 0], "image": [0, 2]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [3, -4], "image": [4, -3]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [8, -6], "image": [8, -6]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-4, 3], "image": [-4, 3]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-6, 0], "image": [0, 6]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [8, -6], "image": [6, 8]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [-2, -5], "image": [-5, 2]}, 
                    {"question": "What is the rotation 270 degrees clockwise?", "preimage": [5, -7], "image": [-7, -5]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-5, 0], "image": [0, 5]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [1, 2], "image": [2, -1]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [-4, 5], "image": [-5, -4]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [2, 0], "image": [0, -2]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [7, -1], "image": [1, 7]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [1, -3], "image": [-3, -1]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-8, -4], "image": [4, 8]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-7, -5], "image": [5, 7]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [1, 1], "image": [1, -1]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [0, 5], "image": [-5, 0]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [4, 2], "image": [-2, 4]}, 
                    {"question": "What is the rotation 90 degrees clockwise?", "preimage": [-7, 2], "image": [-2, -7]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [1, -1], "image": [1, 1]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [7, -5], "image": [5, -7]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [-3, 7], "image": [-3, 7]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [1, 2], "image": [1, 2]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [4, 0], "image": [0, -4]}, 
                    {"question": "What is the rotation 0 degrees?", "preimage": [-6, -4], "image": [-6, -4]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [5, 8], "image": [-8, 5]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [-6, 1], "image": [-1, -6]}, 
                    {"question": "What is the rotation 360 degrees?", "preimage": [4, -1], "image": [4, -1]}, 
                    {"question": "What is the rotation 90 degrees counterclockwise?", "preimage": [3, -6], "image": [-6, -3]}, 
                    {"question": "What is the rotation 270 degrees counterclockwise?", "preimage": [5, 6], "image": [-6, 5]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [6, -2], "image": [2, -6]}, 
                    {"question": "What is the rotation 180 degrees?", "preimage": [-4, -2], "image": [2, 4]}, 
            ],
            "translations": [
                    {"question": "Where is the image with the translation (-3, 1) applied?", "preimage": [5, 1], "image": [2, 2]}, 
                    {"question": "Where is the image with the translation (2, 6) applied?", "preimage": [1, -6], "image": [3, 0]}, 
                    {"question": "Where is the image with the translation (-6, -5) applied?", "preimage": [6, -2], "image": [0, -7]}, 
                    {"question": "Where is the image with the translation (3, 5) applied?", "preimage": [-7, -1], "image": [-4, 4]}, 
                    {"question": "Where is the image with the translation (-2, -7) applied?", "preimage": [8, 7], "image": [6, 0]}, 
                    {"question": "Where is the image with the translation (-8, -2) applied?", "preimage": [3, 0], "image": [-5, -2]}, 
                    {"question": "Where is the image with the translation (-2, -8) applied?", "preimage": [7, 7], "image": [5, -1]}, 
                    {"question": "Where is the image with the translation (7, -7) applied?", "preimage": [-6, 6], "image": [1, -1]}, 
                    {"question": "Where is the image with the translation (3, -5) applied?", "preimage": [3, 8], "image": [6, 3]}, 
                    {"question": "Where is the image with the translation (8, -1) applied?", "preimage": [-7, 2], "image": [1, 1]}, 
                    {"question": "Where is the image with the translation (0, 5) applied?", "preimage": [0, -7], "image": [0, -2]}, 
                    {"question": "Where is the image with the translation (-2, 0) applied?", "preimage": [-2, 5], "image": [-4, 5]}, 
                    {"question": "Where is the image with the translation (-3, -7) applied?", "preimage": [8, 1], "image": [5, -6]}, 
                    {"question": "Where is the image with the translation (6, 1) applied?", "preimage": [-1, -6], "image": [5, -5]}, 
                    {"question": "Where is the image with the translation (-1, -2) applied?", "preimage": [-7, 4], "image": [-8, 2]}, 
                    {"question": "Where is the image with the translation (4, 6) applied?", "preimage": [2, -4], "image": [6, 2]}, 
                    {"question": "Where is the image with the translation (1, -7) applied?", "preimage": [7, 8], "image": [8, 1]}, 
                    {"question": "Where is the image with the translation (0, -2) applied?", "preimage": [-7, 5], "image": [-7, 3]}, 
                    {"question": "Where is the image with the translation (4, -4) applied?", "preimage": [3, 1], "image": [7, -3]}, 
                    {"question": "Where is the image with the translation (6, 0) applied?", "preimage": [-6, -4], "image": [0, -4]}, 
                    {"question": "Where is the image with the translation (-2, 1) applied?", "preimage": [7, -8], "image": [5, -7]}, 
                    {"question": "Where is the image with the translation (-5, -6) applied?", "preimage": [0, 7], "image": [-5, 1]}, 
                    {"question": "Where is the image with the translation (-6, -8) applied?", "preimage": [8, 1], "image": [2, -7]}, 
                    {"question": "Where is the image with the translation (-3, 2) applied?", "preimage": [3, 5], "image": [0, 7]}, 
                    {"question": "Where is the image with the translation (-7, 7) applied?", "preimage": [5, -4], "image": [-2, 3]}, 
                    {"question": "Where is the image with the translation (7, -6) applied?", "preimage": [1, 1], "image": [8, -5]}, 
                    {"question": "Where is the image with the translation (0, -5) applied?", "preimage": [4, 6], "image": [4, 1]}, 
                    {"question": "Where is the image with the translation (1, -2) applied?", "preimage": [-5, -6], "image": [-4, -8]}, 
                    {"question": "Where is the image with the translation (4, -8) applied?", "preimage": [-4, 2], "image": [0, -6]}, 
                    {"question": "Where is the image with the translation (2, 1) applied?", "preimage": [5, 4], "image": [7, 5]}, 
                    {"question": "Where is the image with the translation (-6, -8) applied?", "preimage": [7, 3], "image": [1, -5]}, 
                    {"question": "Where is the image with the translation (7, 3) applied?", "preimage": [-5, -6], "image": [2, -3]}, 
                    {"question": "Where is the image with the translation (8, 0) applied?", "preimage": [-2, 7], "image": [6, 7]}, 
                    {"question": "Where is the image with the translation (6, -8) applied?", "preimage": [-3, 6], "image": [3, -2]}, 
                    {"question": "Where is the image with the translation (-4, 6) applied?", "preimage": [7, -5], "image": [3, 1]}, 
                    {"question": "Where is the image with the translation (-4, -5) applied?", "preimage": [1, -1], "image": [-3, -6]}, 
                    {"question": "Where is the image with the translation (1, -3) applied?", "preimage": [-1, 0], "image": [0, -3]}, 
                    {"question": "Where is the image with the translation (-2, -2) applied?", "preimage": [-6, -1], "image": [-8, -3]}, 
                    {"question": "Where is the image with the translation (3, -8) applied?", "preimage": [-7, 3], "image": [-4, -5]}, 
                    {"question": "Where is the image with the translation (4, 7) applied?", "preimage": [3, -8], "image": [7, -1]}, 
                    {"question": "Where is the image with the translation (-7, 4) applied?", "preimage": [-1, -6], "image": [-8, -2]}, 
                    {"question": "Where is the image with the translation (-1, 0) applied?", "preimage": [7, -8], "image": [6, -8]}, 
                    {"question": "Where is the image with the translation (-6, -2) applied?", "preimage": [-1, 4], "image": [-7, 2]}, 
                    {"question": "Where is the image with the translation (3, 8) applied?", "preimage": [-6, -3], "image": [-3, 5]}, 
                    {"question": "Where is the image with the translation (4, -3) applied?", "preimage": [1, 6], "image": [5, 3]}, 
                    {"question": "Where is the image with the translation (-5, 5) applied?", "preimage": [1, -3], "image": [-4, 2]}, 
                    {"question": "Where is the image with the translation (-8, -2) applied?", "preimage": [4, -5], "image": [-4, -7]}, 
                    {"question": "Where is the image with the translation (8, -5) applied?", "preimage": [-6, 0], "image": [2, -5]}, 
                    {"question": "Where is the image with the translation (-2, 6) applied?", "preimage": [1, 1], "image": [-1, 7]}, 
                    {"question": "Where is the image with the translation (-3, 7) applied?", "preimage": [-5, -6], "image": [-8, 1]}, 
                    {"question": "Where is the image with the translation (-3, -2) applied?", "preimage": [0, -6], "image": [-3, -8]}, 
                    {"question": "Where is the image with the translation (-6, -6) applied?", "preimage": [7, 4], "image": [1, -2]}, 
                    {"question": "Where is the image with the translation (4, -2) applied?", "preimage": [-4, 0], "image": [0, -2]}, 
                    {"question": "Where is the image with the translation (-2, -7) applied?", "preimage": [5, 5], "image": [3, -2]}, 
                    {"question": "Where is the image with the translation (4, 3) applied?", "preimage": [1, 1], "image": [5, 4]}, 
                    {"question": "Where is the image with the translation (-1, 8) applied?", "preimage": [7, -8], "image": [6, 0]}, 
                    {"question": "Where is the image with the translation (-7, 3) applied?", "preimage": [7, -6], "image": [0, -3]}, 
                    {"question": "Where is the image with the translation (6, 0) applied?", "preimage": [1, -1], "image": [7, -1]}, 
                    {"question": "Where is the image with the translation (-6, -1) applied?", "preimage": [1, 5], "image": [-5, 4]}, 
                    {"question": "Where is the image with the translation (4, -6) applied?", "preimage": [-3, 6], "image": [1, 0]}, 
                    {"question": "Where is the image with the translation (5, -4) applied?", "preimage": [0, 7], "image": [5, 3]}, 
                    {"question": "Where is the image with the translation (2, -1) applied?", "preimage": [-2, 0], "image": [0, -1]}, 
                    {"question": "Where is the image with the translation (7, -7) applied?", "preimage": [-3, 2], "image": [4, -5]}, 
                    {"question": "Where is the image with the translation (-7, 8) applied?", "preimage": [5, 0], "image": [-2, 8]}, 
                    {"question": "Where is the image with the translation (0, 4) applied?", "preimage": [-2, -7], "image": [-2, -3]}, 
                    {"question": "Where is the image with the translation (-3, -2) applied?", "preimage": [-2, -6], "image": [-5, -8]}, 
                    {"question": "Where is the image with the translation (-5, -4) applied?", "preimage": [8, 2], "image": [3, -2]}, 
                    {"question": "Where is the image with the translation (0, -1) applied?", "preimage": [7, 7], "image": [7, 6]}, 
                    {"question": "Where is the image with the translation (-5, 3) applied?", "preimage": [7, -6], "image": [2, -3]}, 
                    {"question": "Where is the image with the translation (2, -8) applied?", "preimage": [6, 3], "image": [8, -5]}, 
                    {"question": "Where is the image with the translation (2, 6) applied?", "preimage": [-1, -7], "image": [1, -1]}, 
                    {"question": "Where is the image with the translation (-5, 4) applied?", "preimage": [4, 2], "image": [-1, 6]}, 
                    {"question": "Where is the image with the translation (5, 6) applied?", "preimage": [-7, 2], "image": [-2, 8]}, 
                    {"question": "Where is the image with the translation (0, 2) applied?", "preimage": [-4, 3], "image": [-4, 5]}, 
                    {"question": "Where is the image with the translation (5, 1) applied?", "preimage": [3, 5], "image": [8, 6]}, 
                    {"question": "Where is the image with the translation (0, 4) applied?", "preimage": [-6, 0], "image": [-6, 4]}, 
                    {"question": "Where is the image with the translation (7, -4) applied?", "preimage": [0, -2], "image": [7, -6]}, 
                    {"question": "Where is the image with the translation (0, 5) applied?", "preimage": [0, -3], "image": [0, 2]}, 
                    {"question": "Where is the image with the translation (1, 0) applied?", "preimage": [1, -5], "image": [2, -5]}, 
                    {"question": "Where is the image with the translation (-4, 0) applied?", "preimage": [5, -4], "image": [1, -4]}, 
                    {"question": "Where is the image with the translation (0, -8) applied?", "preimage": [3, 7], "image": [3, -1]}, 
                    {"question": "Where is the image with the translation (7, 4) applied?", "preimage": [-7, -1], "image": [0, 3]}, 
                    {"question": "Where is the image with the translation (-1, 1) applied?", "preimage": [-3, -5], "image": [-4, -4]}, 
                    {"question": "Where is the image with the translation (0, 3) applied?", "preimage": [6, 1], "image": [6, 4]}, 
                    {"question": "Where is the image with the translation (-7, 8) applied?", "preimage": [4, -5], "image": [-3, 3]}, 
                    {"question": "Where is the image with the translation (6, -2) applied?", "preimage": [-1, -3], "image": [5, -5]}, 
                    {"question": "Where is the image with the translation (7, -2) applied?", "preimage": [-3, 3], "image": [4, 1]}, 
                    {"question": "Where is the image with the translation (-2, -4) applied?", "preimage": [4, -2], "image": [2, -6]}, 
                    {"question": "Where is the image with the translation (3, 0) applied?", "preimage": [0, -5], "image": [3, -5]}, 
                    {"question": "Where is the image with the translation (7, -6) applied?", "preimage": [-5, 7], "image": [2, 1]}, 
                    {"question": "Where is the image with the translation (-4, 0) applied?", "preimage": [0, -4], "image": [-4, -4]}, 
                    {"question": "Where is the image with the translation (-2, 1) applied?", "preimage": [4, 6], "image": [2, 7]}, 
                    {"question": "Where is the image with the translation (1, 1) applied?", "preimage": [-4, 0], "image": [-3, 1]}, 
                    {"question": "Where is the image with the translation (6, -8) applied?", "preimage": [-3, 3], "image": [3, -5]}, 
                    {"question": "Where is the image with the translation (4, 0) applied?", "preimage": [-3, -5], "image": [1, -5]}, 
                    {"question": "Where is the image with the translation (-3, -1) applied?", "preimage": [-5, 7], "image": [-8, 6]}, 
                    {"question": "Where is the image with the translation (7, -8) applied?", "preimage": [-8, 4], "image": [-1, -4]}, 
                    {"question": "Where is the image with the translation (0, -5) applied?", "preimage": [1, -2], "image": [1, -7]}, 
                    {"question": "Where is the image with the translation (0, 3) applied?", "preimage": [4, 5], "image": [4, 8]}, 
                    {"question": "Where is the image with the translation (1, 1) applied?", "preimage": [1, 6], "image": [2, 7]},
                ], 
            "congruency": [],
            "all": [],
        }
    }
});
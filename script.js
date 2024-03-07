//TODO: make all variables camelcase!!
$(document).ready(function(){

    //----------NAVIGATION----------
    $("main").show();
    $("#flashcards").hide();
    $("#settings").hide();
    $("#mcqs").hide();
    $("#home").show();

    $("#header_logo_button").click(function(){
        $("main").show();
        $("#flashcards").hide();
        $("#mcqs").hide();
        $("#settings").hide();
        $("#home").show();
    });

    $("#header_home_button").click(function(){
        $("main").show();
        $("#flashcards").hide();
        $("#mcqs").hide();
        $("#settings").hide();
        $("#home").show();
    });

    $("#header_flashcards_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#mcqs").hide();
        $("#flashcards").show();

        $("#flashcards_landing").show();
        $("#flashcards_content").hide();
        $("#flashcards_complete").hide();

        mode = flashcardsData;
        maxQuestions = updateMaxQuestions(flashcardsData);
        $('#number_input').val(maxQuestions);
    });

    $("#header_mcqs_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").hide();
        $("#mcqs").show();

        $("#mcqs_landing").show();
        $("#mcqs_content").hide();
        $("#mcqs_complete").hide();

        mode = mcqsData;
        maxQuestions = updateMaxQuestions(mcqsData);
        $('#number_input').val(maxQuestions);
    });

    $("#header_settings_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#flashcards").hide()
        $("#settings").show();
    });

    $("#flashcards_button_home").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").show();

        $("#flashcards_landing").show();
        $("#flashcards_content").hide();
        $("#flashcards_complete").hide();

        mode = flashcardsData;
        maxQuestions = updateMaxQuestions(flashcardsData);
        $('#number_input').val(maxQuestions);
    });

    $("#mcqs_button_home").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").hide();
        $("#mcqs").show();

        $("#mcqs_landing").show();
        $("#mcqs_content").hide();
        $("#mcqs_complete").hide();
        mode = mcqsData;
        maxQuestions = updateMaxQuestions(mcqsData);
        $('#number_input').val(maxQuestions);
    });
    
    //----------TOPICS SELECTION----------
    
    let mode = {};
    let selectedTopics = ["all"];
    let maxQuestions = 0;
    let currentIndex = 0;
    let numberOfQuestions = 0;
    let incorrectQuestions = [];
    $('#number_input').val(0);

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

    function updateMaxQuestions(dataset, mode) {
        var result = 0;
        selectedTopics.forEach(topic => {
            result += dataset.topics[topic].length;
        });
        if (mode = flashcardsData) {
            $('#flashcards_number_of_questions_input').attr('max', result);
            $('#flashcards_number_of_questions_input').val(result);
        }
        else if (mode = mcqsData) {
            $('#mcqs_number_of_questions_input').attr('max', result);
            $('#mcqs_number_of_questions_input').val(result);
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
        maxQuestions = updateMaxQuestions(mode);
    });

    $('.select_rotations').click(function(){
        toggleTopicSelection('rotations');
        maxQuestions = updateMaxQuestions(mode);
    });

    $('.select_translations').click(function(){
        toggleTopicSelection('translations');
        maxQuestions = updateMaxQuestions(mode);
    });

    $('.select_congruency').click(function(){
        toggleTopicSelection('congruency');
        maxQuestions = updateMaxQuestions(mode);
    });
    
    $('.select_all_topics').click(function(){
        selectedTopics = ["all"];
        selectedTopics.push('reflections');
        selectedTopics.push('rotations');
        selectedTopics.push('translations');
        selectedTopics.push('congruency');
        maxQuestions = updateMaxQuestions(mode);
        $('.topics_selector_container button').addClass('selected');
    });
    
    //----------FLASHCARDS----------
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
            {"term": "Prime (A -> A’)", "definition": "Symbol that means the image (result) of a transformation"},
            {"term": "Preimage", "definition": "The original figure before the transformation"},
            {"term": "Image", "definition": "The transformed figure after the transformation"},
            {"term": "T/F Order matters when doing multiple transformations in a row", "definition": "True"}
          ]
        }
      }
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
        
        var finishedHTML = `Finished! ${unknownCount} flashcards marked as unknown.(${knownPercentage.toFixed(2)}% known)`;
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

    let selectedChoices = [];
    let unscrambledFinalMcqs = [];
    let finalMcqs = [];

    let mcqsData = {
        "topics": {
          "reflections": [
            {"question": "Reflection of (1, 1) across x axis?", "answers": ["(1, -1)", "(0, 1)", "(-1, -1)", "(1, 0)"]},
            {"question": "Reflection of (1, 1) across y axis?", "answers": ["(-1, 1)", "(0, 1)", "(-1, -1)", "(1, 0)"]}
          ],
          "rotations": [
            {"question": "Rotation of (1, 1) 180 degrees?", "answers": ["(-1, -1)", "(0, 1)", "(1, 1)", "(1, 0)"]},
            {"question": "Rotation of (1, 1) 360 degrees?", "answers": ["(1, 1)", "(0, 1)", "(-1, -1)", "(1, 0)"]}
          ],
          "translations": [
            {"question": "Translation of (1, 1) by (3,4)", "answers": ["(4, 5)", "(0, 1)", "(1, 1)", "(1, 0)"]},
            {"question": "Translation of (1, 1) by (-3,-4)", "answers": ["(-2, -3)", "(0, 1)", "(1, 1)", "(1, 0)"]}
          ],
          "congruency": [
            {"question": "Which shape would be congruent", "answers": ["Equal side length, equal angles", "Equal side, different angles", "Different side, equal angles", "All of the choices"]},
          ],
          "all": [
          ]
        }
      }
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

            selectedChoices = new Array(numberOfQuestions).fill(null);
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

        if (selectedChoices[index] !== null) {
            answerButtons.each(function(i) {
                if ($(this).text() == selectedChoices[index]) {
                    $(this).addClass("selected");
                }
            });
        }

        $('#mcqs_question p').text(finalMcqs[index].question);
    }

    $('#mcqs_answers button').click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected")
            selectedChoices[currentIndex] = null;
        }
        else {
            $(this).addClass('selected').siblings().removeClass('selected');
            $(this).parent().siblings().children('button').removeClass('selected');

            selectedChoices[currentIndex] = $(this).text();
        }
        console.log(selectedChoices);
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
        if (selectedChoices.includes(null)) {
            var popup = document.getElementById("mcqs_not_done_popup");
            popup.style.display = "block";
            
            setTimeout(function() {
                popup.style.display = "none";
            }, 2000);
        }
        else {
            for (var i = 0; i < numberOfQuestions; i++) {
                if (selectedChoices[i] !== unscrambledFinalMcqs[i].answers[0]) {
                    incorrectQuestions.push(unscrambledFinalMcqs[i]);
                }
            }
            console.log(selectedChoices);
            console.log(unscrambledFinalMcqs);
            console.log(incorrectQuestions);
            $("#mcqs").show();

            $("#mcqs_landing").hide();
            $("#mcqs_content").hide();
            $("#mcqs_complete").show();
            
            var incorrectCount = incorrectQuestions.length;
            var correctPercentage = (1- (incorrectCount / numberOfQuestions)) * 100;
            
            var finishedHTML = `Finished! ${incorrectCount} questions incorrect. (${correctPercentage.toFixed(2)}% correct)`;
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

            updateMcqsContentHeading(currentIndex, numberOfQuestions);
            displayMcq(currentIndex);
            selectedChoices = new Array(numberOfQuestions).fill(null);
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

        updateFlashcardsContentHeading(currentIndex, numberOfQuestions);
        displayFlashcard(currentIndex);
    });


    $('#flashcards_complete_home').click(function() {
        $("#mcqs_landing").show();
        $("#mcqs_complete").hide();
    });

});
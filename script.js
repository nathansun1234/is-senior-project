//TODO: make all variables camelcase!!

$(document).ready(function(){

    //----------NAVIGATION----------

    $("main").show();
    $("#flashcards").hide();
    $("#settings").hide();
    $("#home").show();
    $("#header_logo_button").click(function(){
        $("main").show();
        $("#flashcards").hide();
        $("#settings").hide();
        $("#home").show();
    });
    $("#header_home_button").click(function(){
        $("main").show();
        $("#flashcards").hide();
        $("#settings").hide();
        $("#home").show();
    });
    $("#header_flashcards_button").click(function(){
        $("main").show();
        $("#home").hide();
        $("#settings").hide();
        $("#flashcards").show();

        $("#flashcards_landing").show();
        $("#flashcards_content").hide();
        $("#flashcards_complete").hide();
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
    });
    
    //----------TOPICS SELECTION----------

    //TODO make it link w json
    //TODO make a way to select the right dataset to use, prolly w a currentMode variable
    let flashcardsData = {
        "topics": {
          "reflections": [
            {"term": "Reflection", "definition": "Definition of reflection"},
            {"term": "Mirror", "definition": "Definition of mirror"}
          ],
          "rotations": [
            {"term": "Rotation", "definition": "Definition of rotation"},
            {"term": "Axis", "definition": "Definition of axis"}
          ],
          "translations": [
            {"term": "Translation", "definition": "Definition of translation"},
            {"term": "Vertical Rule", "definition": "Definition of vertical rule"}
          ],
          "congruency": [
            {"term": "Congruent", "definition": "Definition of congruent"},
            {"term": "Similar", "definition": "Definition of similar"}
          ],
          "all": [
            {"term": "Preimage", "definition": "Definition of preimage"},
            {"term": "Image", "definition": "Definition of image"}
          ]
        }
      }

    let selectedTopics = ["all"];
    let maxQuestions = flashcardsData.topics["all"].length; //todo: make work for all modes, maybe put this in the button to get into the flashcards page

    maxQuestions = updateMaxQuestions();
    //TODO: not sure why it doesnt just reset by itself
    $('#number_input').val(maxQuestions);
    
    function toggleTopicSelection(topic) {
        if (selectedTopics.includes(topic)) {
            $(`.select_${topic}`).removeClass('selected');
            selectedTopics = selectedTopics.filter(function(item) {
                return item !== topic;
            });
            console.log("updated selected topics: " + selectedTopics);
        } else {
            $(`.select_${topic}`).addClass('selected');
            selectedTopics.push(topic);
            console.log("updated selected topics: " + selectedTopics);
        }
    }

    function updateMaxQuestions() {
        var result = 0;
        selectedTopics.forEach(topic => {
            result += flashcardsData.topics[topic].length;
        });
        $('.number_questions_input').attr('max', result);
        $('.number_questions_input').val(result);
        console.log("updated max questions: " + result)
        return result;
    }

    function getRandomQuestions(dataset, selectedTopics, numberOfQuestions) {
        var result = [];
        
        // get all flashcards from selected topics
        selectedTopics.forEach(topic => {
            result.push(...flashcardsData.topics[topic]);
        });
        
        // shuffle the selected flashcards
        result.sort(() => Math.random() - 0.5);
        
        // teturn a slice of the shuffled flashcards based on numberOfQuestions
        return result.slice(0, numberOfQuestions);
    }
    
    $('.select_reflections').click(function(){
        toggleTopicSelection('reflections');
        maxQuestions = updateMaxQuestions();
    });

    $('.select_rotations').click(function(){
        toggleTopicSelection('rotations');
        maxQuestions = updateMaxQuestions();
    });

    $('.select_translations').click(function(){
        toggleTopicSelection('translations');
        maxQuestions = updateMaxQuestions();
    });

    $('.select_congruency').click(function(){
        toggleTopicSelection('congruency');
        maxQuestions = updateMaxQuestions();
    });
    
    $('.select_all_topics').click(function(){
        selectedTopics = ["all"];
        selectedTopics.push('reflections');
        selectedTopics.push('rotations');
        selectedTopics.push('translations');
        selectedTopics.push('congruency');
        maxQuestions = updateMaxQuestions();
        $('.topics_selector_container button').addClass('selected');
    });
    
    //----------FLASHCARDS----------

    let unknownFlashcards = [];
    let currentIndex = 0;
    let numberOfQuestions = 0;
    let finalFlashcards = [];

    function updateFlashcardsContentHeading(index, total) {
        $('#flashcards_content_heading').text(`Flashcards: ${index + 1}/${total}`);
    }

    function displayFlashcard(index) {
        if (finalFlashcards.length === 0 || index < 0 || index >= finalFlashcards.length) {
            console.error();
            return;
        }

        $('#flashcard_front p').text(finalFlashcards[index].term);
        $('#flashcard_back p').text(finalFlashcards[index].definition);

        if (unknownFlashcards.includes(finalFlashcards[currentIndex]) && !$("#mark_unknown").hasClass("selected")) {
            $(`#mark_unknown`).addClass('selected');
        }
        else if (!unknownFlashcards.includes(finalFlashcards[currentIndex]) && $("#mark_unknown").hasClass("selected")) {
            $(`#mark_unknown`).removeClass('selected');
        }
    }

    function displayFlashcardsComplete() {
        $("#flashcards_content").hide();
        $("#flashcards_complete").show();
        
        let unknownTermsHTML = "";
        unknownFlashcards.forEach(flashcard => {
            unknownTermsHTML += `<p>${flashcard.term}: ${flashcard.definition}</p>`;
        });
        $("#flashcards_complete").html(`<p>Unknown Terms:</p>${unknownTermsHTML}`);
    }

    $('#flashcards_start').click(function() {
        numberOfQuestions = parseInt($('.number_questions_input').val());
        finalFlashcards = getRandomQuestions(flashcardsData, selectedTopics, numberOfQuestions);
        
        console.log("updated final flashcards list: ");
        console.log(finalFlashcards);

        $("#flashcards").show();

        $("#flashcards_landing").hide();
        $("#flashcards_content").show();
        $('#flashcard_back').hide();

        updateFlashcardsContentHeading(currentIndex, numberOfQuestions);
        displayFlashcard(currentIndex);
    });

    $('#flip').click(function() {
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
        if (unknownFlashcards.includes(finalFlashcards[currentIndex])) {
            $(`#mark_unknown`).removeClass('selected');
            unknownFlashcards = unknownFlashcards.filter(function(item) {
                return item !== finalFlashcards[currentIndex];
            });
            console.log("updated unknown flashcards: ");
            console.log(unknownFlashcards);
        }
        
        else {
            $(`#mark_unknown`).addClass('selected');
            unknownFlashcards.push(finalFlashcards[currentIndex]);
            console.log("updated unknown flashcards: " + unknownFlashcards);
        }
    });
});


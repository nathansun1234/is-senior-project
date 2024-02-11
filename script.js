//TODO: make all variables camelcase!!

$(document).ready(function(){
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

    $("#flashcards_start").click(function() {
        $("#flashcards").show();

        $("#flashcards_landing").hide();
        $("#flashcards_content").show();
    });

    let flashcardsData = $.getJSON('flashcards.json', function() {});

    let selectedTopics = [];
    let maxQuestions = 0;
    
    function toggleTopicSelection(topic) {
        if (selectedTopics.includes(topic)) {
            $(`.select_${topic}`).removeClass('selected');
            selectedTopics = selectedTopics.filter(function(item) {
                return item !== topic;
            });
            console.log(selectedTopics);
        } else {
            $(`.select_${topic}`).addClass('selected');
            selectedTopics.push(topic);
            console.log(selectedTopics);
        }
    }

    $('.select_reflections').click(function(){
        toggleTopicSelection('reflections');
    });

    $('.select_rotations').click(function(){
        toggleTopicSelection('rotations');
    });

    $('.select_translations').click(function(){
        toggleTopicSelection('translations');
    });

    $('.select_congruency').click(function(){
        toggleTopicSelection('congruency');
    });
    
    $('.select_all_topics').click(function(){
        selectedTopics = [];
        selectedTopics.push('reflections');
        selectedTopics.push('rotations');
        selectedTopics.push('translations');
        selectedTopics.push('congruency');
        $('.topics_selector_container button').addClass('selected');
    });
});


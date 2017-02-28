/**
 * index page controller
 */
function indexController($scope) {

    $scope.bannerImg = "static/images/sun.jpg";

    $scope.mahdi_name = "Barwick Mahdi";
    $scope.mahdi_pic = "static/images/Berwick_Mahdi.jpg";
    $scope.mahdi_bio = "Berwick Mahdi Davenport is an Infinite-Being, Father, Author of six books, a " +
        "New Woke Guide, Anti-Racist Organizer and a seasoned Human Performance Specialist/Life Coach " +
        "with over 25 years of experience.  In addition, he’s been a core-trainer with the People’s Institute " +
        "for Survival and Beyond for over fifteen years. \n\nBefore Life Coaching was popular, Mahdi was pioneering " +
        "the field, dating all the way back to 1990 when he first started his life coaching practice.  Since then " +
        "Mahdi has successfully helped thousands of people own their power, unapologetically and take their " +
        "rightful place in the world.  He passionately works with people of all races and nationalities who seek " +
        "to lean into their power and own it. \n\nMahdi enjoys reading, writing, working out, watching movies, " +
        "being in nature and spending quality time with his three lovely daughters.  Mahdi’s level of " +
        "intuitive insight, commitment to the liberation of people’s souls, expertise and experiences " +
        "gives him an extraordinary perspective few coaches, trainers, spiritual guides and leaders possess.  " +
        "This you discover in only a few moments with Mahdi. ";
    $scope.dustin_name = "Dustin Washington";
    $scope.dustin_pic = "static/images/sun.jpg";
    $scope.dustin_bio = "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah";
    $scope.martin_name = "Martin Freidman";
    $scope.martin_pic = "static/images/Martin_Freidman.jpg";
    $scope.martin_bio = "Martin is a life coach, story teller and antiracist organizer." +
        " He is a core trainer and organizer with the People’s Institute for Survival and Beyond." +
        "  Martin has worked as a college preparatory counselor and in the field of prison reentry" +
        " and family reunification.  He has also been a 15 year volunteer at Monroe Correctional Complex" +
        " with the Black Prisoner’s Caucus.  Martin was a cofounder of the People’s Institute Northwest, " +
        "The City of Seattle Undoing Institutional Racism Group, the Coalition of Antiracist Whites (CARW)" +
        " and Seattle European Dissent.   He is currently working with antiracist white folks around the" +
        " country on what it means to move from being an ally to being an abolitionist.   With a focus on" +
        " healing from the internalized racial superiority (IRS) of white people and the challenges IRS brings" +
        " to white antiracist organizing.   Martin is also organizing with Jewish people (both white and of color)" +
        " to work to separate out Jewishness from whiteness.  He currently resides in the Cleveland Ohio area.";
    $scope.felicia_name = "Felicia Lane Savage";
    $scope.felicia_pic = "static/images/Felicia_Lane_Savage.jpg";
    $scope.felicia_bio = "For over 27 years, Felicia continues to joyfully practice Raja Yoga, which encompasses" +
        "all aspects of her life: movement, breathing, moderation, self-study, concentration, stillness, and" +
        " self-realization through an intimate reflective practice. \n\nFelicia has taught “Felicia Fusion” through" +
        " YogaRoots On Location, LLC, for 21 years that includes: power yoga, gentle yoga, restorative yoga, rhythm" +
        " and movement dance routines, essential oils, Reiki-Japanese relaxation techniques, nutritional support," +
        " self-awareness and self-care strategies to address the symptoms of Pain, Anxiety, Nausea, Insomnia," +
        " Constipation, Exhaustion, Frustration and Anger. \n\nFelicia presently teaches 10 integrative group yoga" +
        " classes at The Kingsley Association, Shaare Torah Congregation and The Ace Hotel, Pittsburgh, PA: Power" +
        " Yoga 4 Athletic, Yoga 4 Gentlemen Only, Yoga 4 Women Only, and Gentle Yoga classes. She continues to" +
        " teach private, integrative yoga sessions with community members wherever they live, work and play." +
        " \n\nPresently, from September 2016 through August 2017, YogaRoots On Location’s Certified Yoga Teacher" +
        " Training marks the inaugural one year 200-hour registered yoga teacher certification training with" +
        " curriculum that is engaging, educating, and empowering 28 yoga students to holistically manage their" +
        " lives through learning the anatomy, physiology and kinesiology of Raja Yoga, practicing using various" +
        " healing justice techniques and developing community organizing strategies that promote self-awareness" +
        " and self-care approaches to encourage consistent self-reflective learning and teaching practices that" +
        " address personal prejudices, and biases in an effort to dismantle racism and have all people recognized" +
        " as Humans. Felicia will continue to provide Integrative yoga-based movement sessions, Integrative" +
        " Self-care intensives, and 200-hour Registered Raja Yoga Teacher Trainings as a New Woke Guide. ";

    $scope.current_bio_pic = "";
    $scope.current_bio_text = "";
    $scope.current_bio_name = "";

    $scope.setCurrentBio = function (id) {
        switch (id) {
            case 0: //mahdi
                $scope.current_bio_pic = angular.copy($scope.mahdi_pic);
                $scope.current_bio_text = angular.copy($scope.mahdi_bio);
                break;
            case 1: //dustin
                $scope.current_bio_pic = angular.copy($scope.dustin_pic);
                $scope.current_bio_text = angular.copy($scope.dustin_bio);
                break;
            case 2: //felicia
                $scope.current_bio_pic = angular.copy($scope.martin_pic);
                $scope.current_bio_text = angular.copy($scope.martin_bio);
                break;
            case 3: //martin
                $scope.current_bio_pic = angular.copy($scope.felicia_pic);
                $scope.current_bio_text = angular.copy($scope.felicia_bio);
                break;
            default:
                break;
        }

        return "#bio";
    }

}
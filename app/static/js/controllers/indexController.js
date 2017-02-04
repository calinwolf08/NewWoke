/**
 * index page controller
 */
function indexController($scope) {

    $scope.bannerImg = "static/images/sun.jpg";
    $scope.mahdi_name = "Barwick Mahdi";
    $scope.mahdi_bio = "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah";
    $scope.dustin_name = "Dustin Washington";
    $scope.dustin_bio = "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah";
    $scope.martin_name = "Martin Freidman";
    $scope.martin_bio = "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah";
    $scope.felicia_name = "Felicia Lane Savage";
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

    $scope.current_bio_pic = "bio pic link";

    $scope.setBioPic = function (id) {
        switch (id) {
            case 0: //mahdi
                $scope.current_bio_pic = "static/images/sun.jpg";
                break;
            case 1: //dustin
                $scope.current_bio_pic = "static/images/sun.jpg";
                break;
            case 2: //felicia
                $scope.current_bio_pic = "static/images/Felicia_Lane_Savage.jpg";
                break;
            case 3: //martin
                $scope.current_bio_pic = "static/images/sun.jpg";
                break;
            default:
                $scope.current_bio_pic = "default pic";
                break;
        }
    }

}
//find the index of the period of each file in the array of files
//check the letters after that period and add the file to the array based on the extension 

var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];
  var videos=[];
  var pictures =[]

  var sortFiles = function(filesArr){
    for (var i = 0; i < filesArr.length; i++){
        var index = filesArr[i].indexOf(".");
        var extension = filesArr[i].substr(index,(filesArr[i].length - 1));
        if (extension ===".jpg" || extension ===".gif" || extension ===".png" || extension ===".jpeg"){
            pictures.push(filesArr[i]);
        }
        else{
            videos.push(filesArr[i]);
        }
    }
  }

  sortFiles(files);
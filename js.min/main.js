function init(){var e=$(window).height(),a=$(window).width(),s=$(".headers_container").height(),t=($(".squer_container").width()-20)/3-12,n=($(window).width()-100)/3-12;a<768?($(".squer").width(n).height(n),$(".squer_container").css("padding","0 56px"),console.log("phone_screen_size "+n)):($(".squer").width(t).height(t),console.log("squer_size "+t)),isMobile()?($("#main_banner, #footer").css("height","inherit"),$(".headers_container").css("padding","150px 0")):($("#main_banner, #footer").height(e),$(".headers_container").css("padding",(e-s)/2+"px 0"))}function isMobile(){return $(window).width()<768}function winer(e){var a=$("#one").hasClass("active"),s=$("#two").hasClass("active"),t=$("#three").hasClass("active"),n=$("#four").hasClass("active"),i=$("#five").hasClass("active"),r=$("#six").hasClass("active"),o=$("#seven").hasClass("active"),c=$("#eight").hasClass("active"),u=$("#nine").hasClass("active"),l=$("#one").data("value"),d=$("#two").data("value"),v=$("#three").data("value"),p=$("#four").data("value"),_=$("#five").data("value"),h=$("#six").data("value"),m=$("#seven").data("value"),f=$("#eight").data("value"),w=$("#nine").data("value");a&&1===l&&s&&1===d&&t&&1===v||n&&1===p&&i&&1===_&&r&&1===h||o&&1===m&&c&&1===f&&u&&1===w||a&&1===l&&n&&1===p&&o&&1===m||s&&1===d&&i&&1===_&&c&&1===f||t&&1===v&&r&&1===h&&u&&1===w||a&&1===l&&i&&1===_&&u&&1===w||t&&1===v&&i&&1===_&&o&&1===m?($("#popup").show(),$("#popup .box_info p").text("Wygrywa "+e.user1_name),e.win1++):a&&2===l&&s&&1===d&&t&&2===v||n&&2===p&&i&&2===_&&r&&2===h||o&&2===m&&c&&2===f&&u&&2===w||a&&2===l&&n&&2===p&&o&&2===m||s&&2===d&&i&&2===_&&c&&2===f||t&&2===v&&r&&2===h&&u&&2===w||a&&2===l&&i&&2===_&&u&&2===w||t&&2===v&&i&&2===_&&o&&2===m?($("#popup").show(),$("#popup .box_info p").text("Wygrywa "+e.user2_name),e.win2++):a&&s&&t&&n&&i&&r&&o&&c&&u&&($("#popup").show(),$("#popup .box_info p").text("Spruóbujcie jeszcze raz"))}$(window).resize(function(){init()}),$(document).ready(function(){init(),$("#main_banner .icon_container").click(function(){$("html, body").animate({scrollTop:$("#main_gallery").offset().top},1500)}),$("#footer .icon_container").click(function(){$("html, body").animate({scrollTop:$("#main_gallery").offset().top},1500)});var e={user1:'<i class="fa fa-times sign"></i>',user1_sign:1,user1_name:"",win1:0,user2:'<i class="far fa-circle sign"></i>',user2_sign:2,user2_name:"",win2:0,current:1,moves:0};$("#player1").blur(function(){e.user1_name=$("#player1").val()}),$("#player2").blur(function(){e.user2_name=$("#player2").val()});var a,s=0;$(".squer").click(function(){9===e.moves&&(alert("koniec gry!"),$(".squer").each(function(){$(this).removeClass("active").data("value","").children().remove()}),e.current=1,e.moves=0),0===e.moves?(""!==e.user1_name&&""!==e.user2_name||(e.user1_name="Krzyżyk",e.user2_name="Kółko"),s=0,a=setInterval(function(){$(".time").text(s++)},1e3),$("#point_table .first_player .name").text(e.user1_name),$("#point_table .second_player .name").text(e.user2_name),$('.user_container[data-user= "first"] .icon_container2 p').text(e.user1_name+" x"),$('.user_container[data-user= "second"] .icon_container2 p').text(e.user2_name+" 0"),$(this).addClass("active").data("value",e.user1_sign).append(e.user1),$(this).data("value",e.user1_sign),e.current=2,e.moves++,$('.user_container[data-user= "first"]').removeClass("active"),$('.user_container[data-user= "second"]').addClass("active")):0<e.moves&&e.moves<9&&1===e.current?($(this).hasClass("active")||($(this).addClass("active").data("value",e.user1_sign).append(e.user1),e.current=2,e.moves++,$('.user_container[data-user= "first"]').removeClass("active"),$('.user_container[data-user= "second"]').addClass("active")),winer(e)):0<e.moves&&e.moves<9&&2===e.current&&($(this).hasClass("active")||($(this).addClass("active").data("value",e.user2_sign).append(e.user2),e.current=1,e.moves++,$('.user_container[data-user= "second"]').removeClass("active"),$('.user_container[data-user= "first"]').addClass("active")),winer(e)),$("")});setInterval(function(){$("#point_table .first_player .point").text(e.win1),$("#point_table .second_player .point").text(e.win2)},1e3);$("#popup .box_info .icon").click(function(){$(".squer").each(function(){$(this).removeClass("active").data("value","").children().remove()}),e.current=1,e.moves=0,$("#popup").hide(),$("#time").text(s),clearInterval(a)})});
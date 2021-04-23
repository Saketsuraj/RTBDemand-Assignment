$.ajax({
    url: "http://hbadapt.andbeyond.media/apichatnew.php?aff=332117&env=DESKTOP&city=BANGALORE",
    type: "GET",
    success: function(response){
        console.log(response);
            var mainQst = response;
            var windowwidth = window.innerWidth;
            if (windowwidth >= 768) {
                console.log(mainQst);
                for (i in mainQst.cricket) {
                    if (mainQst.cricket[i].matchstatus == "LIVE") {
                        $("#binddiv").html('<div id="co-banner" class="co-banner"><div class="closechat"> X</div><div class="cube-wrap vertical"><div class="cube depth"><div class="left"> <a target="_parent" href="clickurl"><h3 class="c-19"> ' + mainQst.cricket[i].batting.short_name + ' ' + mainQst.cricket[i].batting.score + '</h3><h2 class="c-num" style="font-size:12px;">over ' + mainQst.cricket[i].batting.overs + '</h2> <span class="state" style="font-size: 8px;margin-top: 5px;display: inline-block;margin-bottom: 25px;line-height: 1.6;"> <span>' + mainQst.cricket[i].batting.current_batters.player1 + '</span><br><span>' + mainQst.cricket[i].batting.current_batters.player2 + '</span></span></a></div><div class="front"> <a target="_parent" href="clickurl"><h3 class="c-19">' + mainQst.cricket[i].bowling.short_name + '</h3><h2 class="c-num" style="font-size:11px;">Bowler<br>' + mainQst.cricket[i].bowling.current_bowlers.player1 + '</h2> <span class="state" style="font-size: 9px;margin-top: 5px;display: inline-block;">' + mainQst.cricket[i].bowling.current_bowlers.stats + '</span> </a></div><div class="back"> <a target="_parent" id="download_state"><h3 class="c-yell"><img id="demandimg"></h3> </a></div><div class="right"><h3 class="c-19">' + mainQst.cricket[i].matchstatus + '</h3><h2 class="c-num" style="font-size:9px;">' + mainQst.cricket[i].series_name + '</h2> <span class="state"> ' + mainQst.cricket[i].match_name + ' </span></div></div></div></div>');
                    } else if (mainQst.cricket[i].matchstatus == "COMPLETED") {
                        $("#binddiv").html('<div id="co-banner" class="co-banner"><div class="closechat"> X</div><div class="cube-wrap vertical"><div class="cube depth"><div class="left"> <a target="_parent" href="clickurl"><h3 class="c-19"> ' + mainQst.cricket[i].batting.short_name + ' ' + mainQst.cricket[i].batting.score + '</h3><h2 class="c-num" style="font-size:12px;">over ' + mainQst.cricket[i].batting.overs + '</h2> <span class="state" style="font-size: 8px;margin-top: 5px;display: inline-block;margin-bottom: 25px;line-height: 1.6;"> <span>' + mainQst.cricket[i].batting.current_batters.player1 + '</span><br><span>' + mainQst.cricket[i].batting.current_batters.player2 + '</span></span></a></div><div class="front"> <a target="_parent" href="clickurl"><h3 class="c-19">' + mainQst.cricket[i].bowling.short_name + '</h3><h2 class="c-num" style="font-size:11px;">Bowler<br>' + mainQst.cricket[i].bowling.current_bowlers.player1 + '</h2> <span class="state" style="font-size: 9px;margin-top: 5px;display: inline-block;">' + mainQst.cricket[i].bowling.current_bowlers.stats + '</span> </a></div><div class="back"> <a target="_parent" id="download_state"><h3 class="c-yell"><img id="demandimg"></h3> </a></div><div class="right"><h3 class="c-19">' + mainQst.cricket[i].matchstatus + '</h3><h2 class="c-num" style="font-size:8px;line-height:10px;">' + mainQst.cricket[i].series_name + '</h2> <span class="state"> ' + mainQst.cricket[i].matchsummary + ' </span></div></div></div></div>');
                    } else {
                        $("#binddiv").html('<div id="co-banner" class="co-banner"><div class="closechat"> X</div><div class="cube-wrap vertical"><div class="cube depth"><div class="left"> <a target="_parent" href="clickurl"><h3 class="c-19"> ' + mainQst.cricket[i].batting.short_name + ' ' + mainQst.cricket[i].batting.score + '</h3><h2 class="c-num" style="font-size:12px;">over ' + mainQst.cricket[i].batting.overs + '</h2> <span class="state" style="font-size: 8px;margin-top: 5px;display: inline-block;margin-bottom: 25px;line-height: 1.6;"> <span>' + mainQst.cricket[i].batting.current_batters.player1 + '</span><br><span>' + mainQst.cricket[i].batting.current_batters.player2 + '</span></span></a></div><div class="front"> <a target="_parent" href="clickurl"><h3 class="c-19">' + mainQst.cricket[i].bowling.short_name + '</h3><h2 class="c-num" style="font-size:11px;">Bowler<br>' + mainQst.cricket[i].bowling.current_bowlers.player1 + '</h2> <span class="state" style="font-size: 9px;margin-top: 5px;display: inline-block;">' + mainQst.cricket[i].bowling.current_bowlers.stats + '</span> </a></div><div class="back"> <a target="_parent" id="download_state"><h3 class="c-yell"><img id="demandimg"></h3> </a></div><div class="right"><h3 class="c-19">' + mainQst.cricket[i].matchstatus + '</h3><h2 class="c-num" style="font-size:9px;">' + mainQst.cricket[i].series_name + '</h2> <span class="state"> ' + mainQst.cricket[i].matchsummary + ' </span></div></div></div></div>');
                    }
                }
                var cricketlead = mainQst.data_lead;
                for (j in cricketlead) {
                    console.log("cricketlead" + cricketlead[j].icon_url);
                    $("#demandimg").attr("src", cricketlead[j].icon_url);
                    $("#download_state").attr("href", cricketlead[j].start.download);
                }
                $(document).ready(function () {

                    $(".closechat").click(function () {
                        $(".stickyadunitcricket").css("display", "none");

                        $(".co-banner").css("display", "none");
                    });
                });

            } else {

                for (i in mainQst.cricket) {
                    if (mainQst.cricket[i].matchstatus == "LIVE") {
                        $("#binddiv").html('<div id="co-banner" class="co-banner"><div class="closechat"> X</div><div class="cube-wrap vertical"><div class="cube depth"><div class="left"> <a target="_parent" href="clickurl"><h3 class="c-19"> ' + mainQst.cricket[i].batting.short_name + ' ' + mainQst.cricket[i].batting.score + '</h3><h2 class="c-num" style="font-size:7px;">over ' + mainQst.cricket[i].batting.overs + '</h2> <span class="state" style="font-size: 7px;margin-top: 5px;display: inline-block;margin-bottom: 25px;line-height: 1.6;"> <span>' + mainQst.cricket[i].batting.current_batters.player1 + '</span><br><span>' + mainQst.cricket[i].batting.current_batters.player2 + '</span></span></a></div><div class="front"> <a target="_parent" href="clickurl"><h3 class="c-19">' + mainQst.cricket[i].bowling.short_name + '</h3><h2 class="c-num" style="font-size:7px;">Bowler<br>' + mainQst.cricket[i].bowling.current_bowlers.player1 + '</h2> <span class="state" style="font-size: 6px;margin-top: 5px;display: inline-block;">' + mainQst.cricket[i].bowling.current_bowlers.stats + '</span> </a></div><div class="back"> <a target="_parent" id="download_state"><h3 class="c-yell"><img id="demandimg"></h3> </a></div><div class="right"><h3 class="c-19">' + mainQst.cricket[i].matchstatus + '</h3> <span class="state"> ' + mainQst.cricket[i].match_name + ' </span></div></div></div></div>');
                    } else if (mainQst.cricket[i].matchstatus == "COMPLETED") {
                        $("#binddiv").html('<div id="co-banner" class="co-banner"><div class="closechat"> X</div><div class="cube-wrap vertical"><div class="cube depth"><div class="left"> <a target="_parent" href="clickurl"><h3 class="c-19"> ' + mainQst.cricket[i].batting.short_name + ' ' + mainQst.cricket[i].batting.score + '</h3><h2 class="c-num" style="font-size:7px;">over ' + mainQst.cricket[i].batting.overs + '</h2> <span class="state" style="font-size: 7px;margin-top: 5px;display: inline-block;margin-bottom: 25px;line-height: 1.6;"> <span>' + mainQst.cricket[i].batting.current_batters.player1 + '</span><br><span>' + mainQst.cricket[i].batting.current_batters.player2 + '</span></span></a></div><div class="front"> <a target="_parent" href="clickurl"><h3 class="c-19">' + mainQst.cricket[i].bowling.short_name + '</h3><h2 class="c-num" style="font-size:7px;">Bowler<br>' + mainQst.cricket[i].bowling.current_bowlers.player1 + '</h2> <span class="state" style="font-size: 8px;margin-top: 5px;display: inline-block;">' + mainQst.cricket[i].bowling.current_bowlers.stats + '</span> </a></div><div class="back"> <a target="_parent" id="download_state"><h3 class="c-yell"><img id="demandimg"></h3> </a></div><div class="right"><h3 class="c-19">' + mainQst.cricket[i].matchstatus + '</h3><span class="state" style="margin-top: 10px;display: inline-block;"> ' + mainQst.cricket[i].matchsummary + ' </span></div></div></div></div>');
                    } else {
                        $("#binddiv").html('<div id="co-banner" class="co-banner"><div class="closechat"> X</div><div class="cube-wrap vertical"><div class="cube depth"><div class="left"> <a target="_parent" href="clickurl"><h3 class="c-19"> ' + mainQst.cricket[i].batting.short_name + ' ' + mainQst.cricket[i].batting.score + '</h3><h2 class="c-num" style="font-size:7px;">over ' + mainQst.cricket[i].batting.overs + '</h2> <span class="state" style="font-size: 7px;margin-top: 5px;display: inline-block;margin-bottom: 25px;line-height: 1.6;"> <span>' + mainQst.cricket[i].batting.current_batters.player1 + '</span><br><span>' + mainQst.cricket[i].batting.current_batters.player2 + '</span></span></a></div><div class="front"> <a target="_parent" href="clickurl"><h3 class="c-19">' + mainQst.cricket[i].bowling.short_name + '</h3><h2 class="c-num" style="font-size:7px;">Bowler<br>' + mainQst.cricket[i].bowling.current_bowlers.player1 + '</h2> <span class="state" style="font-size: 8px;margin-top: 5px;display: inline-block;">' + mainQst.cricket[i].bowling.current_bowlers.stats + '</span> </a></div><div class="back"> <a target="_parent" id="download_state"><h3 class="c-yell"><img id="demandimg"></h3> </a></div><div class="right"><h3 class="c-19">' + mainQst.cricket[i].matchstatus + '</h3> <span class="state"> ' + mainQst.cricket[i].matchsummary + ' </span></div></div></div></div>');
                    }
                }
                var cricketlead = mainQst.data_lead;
                for (j in cricketlead) {
                    console.log("cricketlead" + cricketlead[j].icon_url);
                    $("#demandimg").attr("src", cricketlead[j].icon_url);
                    $("#download_state").attr("href", cricketlead[j].start.download);
                }
                $(document).ready(function () {

                    $(".closechat").click(function () {
                        $(".stickyadunitcricket").css("display", "none");

                        $(".co-banner").css("display", "none");
                    });
                });

            }
        }
});

//close the photo
function closeImage() {
    $('#closeImage').click(function () {
        $('#jpgImage').hide();
        $('#closeImage').hide();
    });
}
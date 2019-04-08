d3.json("/static/js/thedata.csv", function(error, jsonData) {
  if (error) throw error;
  // Process the JSON data

});

var queue = d3.queue();

var filenames = [ "/static/js/thedata.csv",];

filenames.forEach(function(filename) {
  queue.defer(d3.json, filename);
});

function themainGraphs(error, dataforgrapghs) {
        var ndx = crossfilter(dataforgrapghs);
        
        dataforgrapghs.forEach(function(d){
            d.Weeks = parseInt(d.Weeks);
            
            d.groupAnswers = parseFloat(d.groupAnswers);
           
        })
        
        
        dc.rowChart("#row_chart")
            .width(850)
            .height(350)
            .dimension(Weeks)
            .group(groupAnswers)
            .cap(9)
            .othersGrouper(false)
            .xAxis().ticks(8);
            
            
            
        dc.pieChart('#pie_chart')
            .height(350)
            .radius(240)
            .transitionDuration(1000)
            .dimension(Weeks)
            .group(groupAnswers);















 var Q1ByTotal = ndx.dimension(function(d) { return d.Question1; });


var groupQ1 = Q1ByTotal.groupAll();


function mean1(groupQ1) {
    var total = 0, i;
    for (i = 0; i < groupQ1.length; i += 1) {
        total += groupQ1[i];
    }
    return total / groupQ1.length;
}


 var Q2ByTotal = ndx.dimension(function(d) { return d.Question2; });


var groupQ2 = Q2ByTotal.groupAll();


function mean2(groupQ2) {
    var total = 0, i;
    for (i = 0; i < groupQ2.length; i += 1) {
        total += groupQ2[i];
    }
    return total / groupQ2.length;
}




 var Q3ByTotal = ndx.dimension(function(d) { return d.Question3; });


var groupQ3 = Q3ByTotal.groupAll();


function mean3(groupQ3) {
    var total = 0, i;
    for (i = 0; i < groupQ3.length; i += 1) {
        total += groupQ3[i];
    }
    return total / groupQ3.length;
}






 var Q4ByTotal = ndx.dimension(function(d) { return d.Question4; });


var groupQ4 = Q4ByTotal.groupAll();


function mean4(groupQ4) {
    var total = 0, i;
    for (i = 0; i < groupQ4.length; i += 1) {
        total += groupQ4[i];
    }
    return total / groupQ4.length;
}






 var Q5ByTotal = ndx.dimension(function(d) { return d.Question5; });


var groupQ5 = Q5ByTotal.groupAll();


function mean5(groupQ5) {
    var total = 0, i;
    for (i = 0; i < groupQ5.length; i += 1) {
        total += groupQ5[i];
    }
    return total / groupQ5.length;
}





 var Q6ByTotal = nx.dimension(function(d) { return d.Question6; });


var groupQ6 = Q6ByTotal.groupAll();


function mean6(groupQ6) {
    var total = 0, i;
    for (i = 0; i < groupQ6.length; i += 1) {
        total += groupQ6[i];
    }
    return total / groupQ6.length;
}







 var Q7ByTotal = ndx.dimension(function(d) { return d.Question7; });


var groupQ7 = Q7ByTotal.groupAll();


function mean7(groupQ7) {
    var total = 0, i;
    for (i = 0; i < groupQ7.length; i += 1) {
        total += groupQ7[i];
    }
    return total / groupQ7.length;
}






 var Q8ByTotal = ndx.dimension(function(d) { return d.Question8; });


var groupQ8 = Q8ByTotal.groupAll();


function mean8(groupQ8) {
    var total = 0, i;
    for (i = 0; i < groupQ8.length; i += 1) {
        total += groupQ8[i];
    }
    return total / groupQ8.length;
}






 var Q9ByTotal = ndx.dimension(function(d) { return d.Question9; });


var groupQ9 = Q9ByTotal.groupAll();


function mean9(groupQ9) {
    var total = 0, i;
    for (i = 0; i < groupQ9.length; i += 1) {
        total += groupQ9[i];
    }
    return total / groupQ9.length;
}


var groupAnswers = [groupQ1,groupQ2,groupQ3,groupQ4,groupQ5,groupQ6,groupQ7,groupQ8,groupQ9];


dc.renderAll();
}
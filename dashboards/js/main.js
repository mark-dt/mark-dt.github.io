function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function downloadCSV(csv) {
    var csvFile;
    var downloadLink;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var tenant = document.getElementById("tenant").value;
    var filename = tenant + time + '.csv';

    // CSV file
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    var table = document.getElementById("table");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        var style_row = table.rows[i];

        for (var j = 0; j < cols.length; j++)
            if (j == 0) {
                if (style_row.style.display != 'none')
                    row.push('\'' + cols[j].innerText + '\'');
            }
            else {
                if (style_row.style.display != 'none')
                    row.push(cols[j].innerText);
            }

        if (style_row.style.display != 'none')
            csv.push(row.join(";"));
    }
    /*
 var table = document.getElementById("table");
 for (var i = 0, row; row = table.rows[i]; i++) {
     //iterate through rows
     //rows would be accessed using the "row" variable assigned in the for loop
     var my_row = [];
     for (var j = 0, col; col = row.cells[j]; j++) {
         //iterate through columns
         //columns would be accessed using the "col" variable assigned in the for loop
         //var text_content = row.textContent.toLowerCase();
         //var search_val = filter_value.toLowerCase();
         //row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
         my_row.push('\'' + row.textContent + '\'');
     }
     csv.push(my_row.join(";"));
 }
 */

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}



function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        console.log(reader.result);
    };

    reader.onerror = function () {
        console.log(reader.error);
    };

}

/*
function pushDashboard(data) {
    delete data['metadata'];
    delete data['id'];
    data['dashboardMetadata']['owner'] = 'mark.bley@dynatrace.com';
    //data['dashboardMetadata']['shared'] = 'true';
    //data['dashboardMetadata']['sharingDetails']['published'] = true;
    console.log(data);
    //ChromeSamples.log('Posting request to GitHub API...');
    url = 'https://ggg43721.sprint.dynatracelabs.com/api/config/v1/dashboards/';
    fetch(url, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Api-Token " + token
        },
        body: JSON.stringify(data)
    }).then(function (response) {

        console.log(response);
        return response.json();
    }).then(function (data) {
        console.log(data['id']);
    });
}

function getSingleDashboard(name) {
    //url = 'https://raw.githubusercontent.com/mark-dt/mark-dt.github.io/dashboards/dashboards/' + name;
    url = 'https://raw.githubusercontent.com/TechShady/Dynatrace-Dashboards/master/' + name;
    //https://raw.githubusercontent.com/mark-dt/mark-dt.github.io/dashboards/dashboards
    const response = fetch(url, {
        method: "GET",
        mode: 'cors',
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            //displayLog(data)
            //data['owner'] = 'Dynatrace';
            //console.log(data);
            //displayDashboardList(data)
            pushDashboard(data)
        });
}

*/

function displayDashboardList(data) {
    var selector = document.getElementById("framework");
    selector.innerHTML = "";
    // columns has the header of the table
    var columns = [];
    //var header = $('<tr/>'); 
    var list = data.list

    //var x = document.getElementById("mySelect");
    for (var i = 0; i < list.length; i++) {
        var option = document.createElement("option");
        option.text = list[i];
        //var row = list[i];
        selector.add(option)
        //console.log(row);
    }
    //console.log(columns)
    //generateTableHead(selector, columns)
    //generateTable(selector, list)
    return columns;
}
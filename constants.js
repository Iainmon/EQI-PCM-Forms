//Logo in a URL STRING FORM change it and convert image into data here: http://dataurl.net/#dataurlmaker
//then delete the old data and copy and paste the text into the "" on line 3

//----------------------------------------------End of image constants----------------------------------------------

const popularClients = {
    0:{
        name: "",
        address: ""
    }
}

const filterDiameter = 385;
const fieldArea = 0.00785;
// Case(Volume &gt; 0 and (fibers - Blank Fibers) &gt;= 5.5;(fibers-Blank Fibers) * (385)/fields/(.00785) *
// (1000) * (Volume);Volume &gt; 0 and (fibers - Blank
//     Fibers)&lt;5.5;&quot;8.9&quot;;Volume=&quot;Blank&quot;;(fibers/fields)/.00785;Volume=&quot;OL&quot;;&quot; &quot;;Volume=&quot;N/A&quot;;&quot; &quot;;
//     Volume=&quot;C&quot;;&quot; &quot;;Volume=&quot;V&quot;;&quot; &quot;)
function calculateFiberOverCC(i) {
    var block = sampleData[i];
    var volume = block.volumeCollected;
    var fibers = block.fibersFound;
    var fiberField = block.fiberField;
    return (((fibers / fiberField) * filterDiameter) / fieldArea / volume / 1000);
}

function failsThreshold(input) {
    
}
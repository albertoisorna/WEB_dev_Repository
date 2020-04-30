
// Variables
const csvname = 'vitaminas_6.csv';

const cdr = {
    NC1:NaN,
    NC2:NaN,
    NC3:NaN,
    A: 1000,
    B1: 1200,
    B2: 1400,
    C: 80000,
    Niac: 16000,
    Na: 2300000,
    K: 2000000,
    Ca: 800000,
    Mg: 375000,
    Fe: 14000,
    Cu: 1000,
    P: 700000,
    S: 1000000,
    Cl: 2000000,
}

// Funcion Get
async function getData(n) {
    
    // First part -- get the data to TEXT
    let  table = document.getElementById("myTable");
    table.innerHTML = ""; // In case press again table

    const response = await fetch(csvname);          // HTTP demand 
    const data = await response.text();             // conveert to textwg
    const rows  = data.split(/\n/); // or ('\n')    // split in rows

    // Second part -- loop over the data
    rows.forEach ( row => {
        const col = row.split(',');                 // split in columns

        let htmlrow = table.insertRow();            // <tr></tr>
        
        for (const [i, el] of col.entries()) {      // i == index, el == element
            let cell = htmlrow.insertCell();        //<td></td>
            if(n == 0)                              // if first button
                cell.innerHTML = el;                //      just insert the element
            else                                    // if second button
            {                                       //
                if (isNaN(el) || i == 0)            //      if is string or first column -> do not treat
                    cell.innerHTML = el;            //
                else                                //      if is numeric -> covert to CDR
                    cell.innerHTML = (100*Number(el)/Object.values(cdr)[i]).toFixed(2); // --> (mcg/100g)/(mcg/mcgrecom) = mcgrecm/100g 
            }
          } 
    })
    // Third part -- Send back the info
    $('#employee_table').html(table);
    $('table tr:first').css('font-weight','bold');
}

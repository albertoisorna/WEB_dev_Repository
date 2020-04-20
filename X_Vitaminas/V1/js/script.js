$(document).ready(function()
{
    $('#load_data').click(function()
    {
     $.ajax({
      url:"vitaminas_6.csv",
      dataType:"text",
      success:function(data)
      {
       var data_rows = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped table-condensed">';
       for(var count = 0; count<data_rows.length; count++)   // We put the ROWS
       {
            var cell_data = data_rows[count].split(",");
            table_data += '<tr>';
            for(var cell_count=0; cell_count<cell_data.length; cell_count++)   // We put the COLUMNS
            {
                if(count === 0) // first row
                    table_data += '<th class="th-lg">'+cell_data[cell_count]+'</th>';
                else
                    table_data += '<td>'+cell_data[cell_count]+'</td>';
            }
            table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });    
});
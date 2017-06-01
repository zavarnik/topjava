var ajaxUrl = 'ajax/profile/meals/';
var datatableApi;
var contextModalTitle = "meals.edit";
// $(document).ready(function () {


function updateTable() {
    $.ajax({
        type: "POST",
        url: ajaxUrl + 'filter',
        data: $('#filter').serialize(),
        success: updateTableByData
    });
}

function clearFilter() {
    $("#filter")[0].reset();
    $.get(ajaxUrl, updateTableByData);
}

$(function () {
    datatableApi = $('#datatable').DataTable({
        "ajax": {
            "url": ajaxUrl,
            "dataSrc": ""
        },
        "paging": false,
        "info": true,
        "columns": [
            {
                "data": "dateTime",
                "render":function (data,type,row) {
                    if (type='display')    {
                        return data.replace('T', ' ');
                    }
                    return data;
                }
            },
            {
                "data": "description"
            },
            {
                "data": "calories"
            },
            {
                "defaultContent": "",
                "orderable": false,
                "render": renderEditBtn
            },
            {
                "defaultContent": "",
                "orderable": false,
                "render": renderDeleteBtn
            }
        ],
        "order": [
            [
                0,
                "desc"
            ]
        ],
        "createdRow": function (row, data, dataIndex) {
            if (!data.enabled) {
                $(row).addClass(data.exceed ? 'exceeded' : 'normal');
            }
        },
        "initComplete": function () {
            $('#filter').submit(function() {

                updateTable();
                return false;
            });
        makeEditable();
        }
    });
});
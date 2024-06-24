$(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const employeeNumber = urlParams.get('id');

    if (employeeNumber) {
        $.ajax({
            url: `https://kerbau.odaje.biz/getstaffbyid.php?id=${employeeNumber}`,
            method: 'GET',
            success: function(data){
                const staffDetails = JSON.parse(data);
                if (staffDetails[1]) {
                    const staffData = JSON.parse(staffDetails[1]);
                    $('#employeeNumber').text(`Employee Number: ${staffData.employeeNumber}`);
                    $('#firstname').text(`First Name: ${staffData.firstName}`);
                    $('#lastname').text(`Last Name: ${staffData.lastName}`);
                    $('#officeCode').text(`Office Code: ${staffData.officeCode}`);
                    $('#extension').text(`Phone Extension: ${staffData.extension}`);
                    $('#email').text(`Email: ${staffData.email}`);
                    $('#jobTitle').text(`Job Title: ${staffData.jobTitle}`);
                    $('#reportsTo').text(`Reports To: ${staffData.reportsTo}`);
                } else {
                    alert('No details found for this employee.');
                }
            },
            error: function() {
                alert('Failed to fetch staff details.');
            }
        });
    } else {
        alert('No employee ID provided.');
    }
});

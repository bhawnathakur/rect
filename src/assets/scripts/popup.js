  $(document).ready(function () {

    //alert("Document loaded, including graphics and embedded documents (like SVG)");
    var a = document.getElementById("svgObject");

    //get the inner DOM of alpha.svg
    //var svgDoc = a.contentDocument;

    //get the inner element by id
    var delta = svgDoc.getElementById("rect13");
    delta.addEventListener("mouseover", function(){ alert('hello world!')}, false);
});
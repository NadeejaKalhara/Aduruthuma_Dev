count = 0
cans = 1
var $$ = function( id ) { return document.getElementById( id ); };
function launch(that){

}

            var _PDF_DOC,
            _CURRENT_PAGE,
            _TOTAL_PAGES,
            _PAGE_RENDERING_IN_PROGRESS = 0,
            _CANVAS = document.getElementsByClassName("pdf-canvas")[cans]
        
            console.log(cans)
        
        // initialize and load the PDF
        async function showPDF(pdf_url) {
            // get handle of pdf document
            try {
                _PDF_DOC = await pdfjsLib.getDocument({ url: pdf_url });
            }
            catch(error) {
                alert(error.message);
            }
        
            // total pages in pdf
            _TOTAL_PAGES = _PDF_DOC.numPages;
            
            // Hide the pdf loader and show pdf container
            // show the first page
            showPage(1);
        }
        
        // load and render specific page of the PDF
        async function showPage(page_no) {
            _PAGE_RENDERING_IN_PROGRESS = 1;
            _CURRENT_PAGE = page_no;
        
            // disable Previous & Next buttons while page is being loaded
            
            // get handle of page
            try {
                var page = await _PDF_DOC.getPage(page_no);
            }
            catch(error) {
                alert(error.message);
            }
            _CANVAS = document.getElementsByClassName("pdf-canvas")[cans]
            cans = cans +1
            // original width of the pdf page at scale 1
            var pdf_original_width = page.getViewport(1).width;
            
            // as the canvas is of a fixed width we need to adjust the scale of the viewport where page is rendered
            var scale_required = _CANVAS.width / pdf_original_width;
        
            // get viewport to render the page at required scale
            var viewport = page.getViewport(scale_required);
        
            // set canvas height same as viewport height
            _CANVAS.height = viewport.height;
        
            // setting page loader height for smooth experience
         

            var render_context = {
                canvasContext: _CANVAS.getContext('2d'),
                viewport: viewport
            };
                
            // render the page contents in the canvas
            try {
                await page.render(render_context)
                
$(document).ready(function() {
 
});
            }
            catch(error) {
                alert(error.message);
            }
        
            _PAGE_RENDERING_IN_PROGRESS = 0;
        
            // re-enable Previous & Next buttons
        
            // show the canvas and hide the page loader
        }
        

function onloadz(yt){
    for(let a=0 ; a<Object.keys(yt).length ; a++){
        classes = yt[Object.keys(yt)[a]]
        for(let z=0 ; z<Object.keys(classes).length ; z++){
            months = classes[Object.keys(classes)[z]]
            for(let w=0 ; w<Object.keys(Object.keys(Object.keys(yt)[a])[z]).length ; w++){
    for(let i=0 ; i<Object.keys(Object.keys(Object.keys(Object.keys(yt)[a])[z])[w]).length ; i++){
        classes = yt[Object.keys(yt)[a]]

dt = months[Object.keys(months)[w]]
        console.log(classes[Object.keys(classes)[z]])
        clzcd = $$("clzcard")
        clone = clzcd.cloneNode(true);  
        pdfs = $$("pdf-main-container")
        cones = pdfs.cloneNode(true);
   
    $$("all-classes-card").appendChild(clone);
    count = count + 1
    k = count
    console.log(k)
    console.log(dt)
    document.getElementsByClassName("pdf-canvas")[k].id="pdf-canvas"+count
    document.getElementsByClassName("clzcard")[k].style.display="block"
    if(dt["url"]!=null){
        if(dt["url"].includes(".pdf")){
        document.getElementsByClassName("sname")[k].innerText = dt["name"] + (" (pdf)")

    } else {
        document.getElementsByClassName("sname")[k].innerText = dt["name"]
    } 
}
    document.getElementsByClassName("cname")[k].innerText =  dt["cname"]
    document.getElementsByClassName("syr")[k].innerText =  dt["year"]
    document.getElementsByClassName("vbtn")[k].abc =  dt["url"]
    document.getElementsByClassName("vbtn")[k].onclick =  function(){window.open(this.abc,'targetWindow','toolbar=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=900')}
    document.getElementsByClassName("tname")[k].innerText = dt["tname"]
    document.getElementsByClassName("fee")[k].innerText = dt["fee"] + " LKR"
    document.getElementsByClassName("allbtn")[k].id = dt["uid"] + "``"+dt["cid"] + "``"+dt["uid"] + "``"+dt["mid"] 
    if(dt["url"]!=null){
    if(dt["url"]!=null){
        if(dt["url"].includes(".pdf")){
// click on "Show PDF" buuton

document.getElementsByClassName("pdfcont")[k].style.display="block"
document.getElementsByClassName("allpic")[k].style.display="none"

    showPDF(dt['url']);


// click on the "Previous" page button


// click on the "Next" page button

        } else {
document.getElementsByClassName("pdfcont")[k].style.display="none"
document.getElementsByClassName("allpic")[k].style.display="block"
      document.getElementsByClassName("allpic")[k].src = dt["url"]}
    }else{
      document.getElementsByClassName("allpic")[k].src = "assets/img/clz.jpg"
    }}}}}
}}

window.adobePdfFunctions = {
	adobePdfViwer: function (pdfFilePath) {
		var adobeDCView = new AdobeDC.View({ clientId: "5eae34846d994ac0b6d671f8c316994f", divId: "adobe-dc-view" });
		adobeDCView.previewFile({
			content: { location: { url: pdfFilePath } },
			metaData: { fileName: "Bodea Brochure.pdf" }
		}, { showAnnotationTools: true, showDownloadPDF: true, showPrintPDF: true });
	}
};

document.addEventListener("adobe_dc_view_sdk.ready", function () {
	var adobeDCView = new AdobeDC.View({ clientId: "5eae34846d994ac0b6d671f8c316994f", divId: "adobe-dc-view" });
	adobeDCView.previewFile({
		content: { location: { url: "https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf" } },
		metaData: { fileName: "Bodea Brochure.pdf" }
	}, {});
});


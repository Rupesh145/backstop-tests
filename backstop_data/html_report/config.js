report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Andanet_QA_-_Login_Page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20250630-192725/backstop_default_Andanet_QA_-_Login_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Andanet_QA_-_Login_Page_0_document_0_desktop.png",
        "label": "Andanet QA - Login Page",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.1,
        "url": "https://qa.andanet.com/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Andanet_QA_-_Post_Login_Dashboard_0_document_0_desktop.png",
        "test": "../bitmaps_test/20250630-192725/backstop_default_Andanet_QA_-_Post_Login_Dashboard_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Andanet_QA_-_Post_Login_Dashboard_0_document_0_desktop.png",
        "label": "Andanet QA - Post Login Dashboard",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://qa.andanet.com/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.0019217330538085255,
          "misMatchPercentage": "0.00",
          "analysisTime": 51
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Andanet_QA_-_Victoza_Banner_After_Login_0_imgsrcAnda_Victoza_NA_withImage_1036x100Netpng_0_desktop.png",
        "test": "../bitmaps_test/20250630-192725/backstop_default_Andanet_QA_-_Victoza_Banner_After_Login_0_imgsrcAnda_Victoza_NA_withImage_1036x100Netpng_0_desktop.png",
        "selector": "img[src*=\"Anda_Victoza_NA_withImage_1036x100 Net.png\"]",
        "fileName": "backstop_default_Andanet_QA_-_Victoza_Banner_After_Login_0_imgsrcAnda_Victoza_NA_withImage_1036x100Netpng_0_desktop.png",
        "label": "Andanet QA - Victoza Banner After Login",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://qa.andanet.com/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});
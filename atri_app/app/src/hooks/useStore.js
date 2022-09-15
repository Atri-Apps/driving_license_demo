import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "TextBox2": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Tests"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex1": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "justifyContent": "flex-end",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "columnGap": "40px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex4": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "static",
        "width": "100%",
        "top": null
      },
      "callbacks": {}
    },
    "NavWrapper": {
      "styles": {
        "display": "flex",
        "position": "absolute",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Image6": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex9": {
      "styles": {
        "display": "flex",
        "width": "",
        "flexGrow": 1,
        "flexDirection": "column",
        "paddingLeft": "40px",
        "paddingRight": "80px",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "width": "",
        "flexGrow": null,
        "flexDirection": "row",
        "height": "100%",
        "flexShrink": 1,
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "flexWrap": "wrap",
        "height": "100%",
        "paddingTop": "60px",
        "marginTop": "",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Image8": {
      "styles": {
        "height": "100%",
        "boxSizing": "border-box"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/homepage_wallpaper.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "styles": {
        "borderWidth": "",
        "fontSize": "24px",
        "fontFamily": "IBM Plex Serif",
        "fontWeight": 600,
        "marginTop": "80px"
      },
      "custom": {
        "text": "Tests"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "current_range": {
      "styles": {},
      "custom": {
        "text": "0-0"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "0.3rem",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "marginTop": "",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "TextBox6": {
      "styles": {
        "color": "#6B7280"
      },
      "custom": {
        "text": "tests"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_1": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex14": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "status_1": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex15": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image10": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navtest_1": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex16": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "commentnum_1": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_1": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_1": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "paddingTop": "10px",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "TextBox9": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image13": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image14": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex25": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox12": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image18": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox14": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex31": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image21": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox16": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex36": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image24": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex40": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox18": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex41": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image27": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex45": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox20": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex46": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image30": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex50": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox22": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex51": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image33": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex55": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox24": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex56": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image36": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex60": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "TextBox26": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex61": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "commentnum_2": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_2": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_2": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex66": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_2": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_2": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex67": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex68": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_2": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_3": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_3": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_3": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex71": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_3": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_3": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex72": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex73": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_3": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_4": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_4": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_4": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex76": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_4": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_4": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex77": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex78": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_4": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_5": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_5": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_5": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex81": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_5": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_5": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex82": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex83": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_5": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_6": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_6": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_6": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex86": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_6": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_6": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex87": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex88": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_6": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_7": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_7": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_7": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex91": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_7": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_7": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex92": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex93": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_7": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_8": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_8": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_8": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex96": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_8": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_8": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex97": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex98": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_8": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_9": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image60": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_9": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_9": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex101": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_9": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_9": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex102": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex103": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_9": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "commentnum_10": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "commenticon_10": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "navtest_10": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex106": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "status_10": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testname_10": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex107": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex108": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "testitem_10": {
      "styles": {
        "display": "none",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex110": {
      "styles": {
        "display": "flex",
        "color": "#6B7280",
        "columnGap": "4px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "14px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingLeft": "4px",
        "paddingRight": "4px",
        "borderRadius": "2px",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderColor": "#6B7280"
      },
      "callbacks": {}
    },
    "TextBox45": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Prev"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox46": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Next"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex112": {
      "styles": {
        "display": "flex",
        "paddingTop": "40px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "prev": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "flexGrow": 1,
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/left-arrow.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "next": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "flexGrow": 1,
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right-arrow.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex116": {
      "styles": {
        "display": "flex",
        "height": "100%",
        "width": "1px",
        "backgroundColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Button2": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button19": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/newtest"
            }
          }
        ]
      }
    },
    "total_tests": {
      "styles": {},
      "custom": {
        "text": "-"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox186": {
      "styles": {
        "color": "#6B7280"
      },
      "custom": {
        "text": "of"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image150": {
      "styles": {
        "width": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/account_circle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "viewtest": {
    "Image68": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image70": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image72": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image73": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image74": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image77": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image78": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex117": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image79": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex118": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image80": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex119": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image81": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex120": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image82": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex121": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image83": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex122": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image84": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex123": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image85": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex124": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image86": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex125": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex126": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image87": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image88": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Next"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image89": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/left-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Prev"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image90": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex127": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox60": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image91": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex128": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox61": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image92": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex129": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox62": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image93": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex130": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox63": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image94": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex131": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox64": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image95": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex132": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox65": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image96": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex133": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox66": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image97": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex134": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox67": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image98": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex135": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex136": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image99": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex137": {
      "styles": {
        "display": "flex",
        "height": "100%",
        "width": "1px",
        "backgroundColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex138": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex139": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox69": {
      "styles": {
        "color": "#6B7280"
      },
      "custom": {
        "text": "tests"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "styles": {},
      "custom": {
        "text": "40"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex140": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex141": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex142": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex143": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex144": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex145": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex146": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex147": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex148": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex149": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex150": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex151": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex152": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex153": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex154": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex155": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex156": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex157": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex158": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex159": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex160": {
      "styles": {
        "display": "flex",
        "color": "#6B7280",
        "columnGap": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "14px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingLeft": "4px",
        "paddingRight": "4px",
        "borderRadius": "2px",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex161": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "0.3rem",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "marginTop": "",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex162": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex163": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex164": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex165": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex166": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex167": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex168": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex169": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex170": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex171": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Image101": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "3px",
        "paddingLeft": "10px",
        "paddingBottom": "3px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image102": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "styles": {
        "color": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Tests"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex181": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex182": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "columnGap": "40px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex183": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "justifyContent": "flex-end",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex184": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "static",
        "width": "100%",
        "top": null
      },
      "callbacks": {}
    },
    "Flex185": {
      "styles": {
        "display": "flex",
        "position": "absolute",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Flex186": {
      "styles": {
        "display": "flex",
        "paddingTop": "60px",
        "height": "100%",
        "boxSizing": "border-box",
        "flexDirection": "column",
        "paddingLeft": "40px",
        "paddingRight": "40px"
      },
      "callbacks": {}
    },
    "TextBox76": {
      "styles": {
        "borderWidth": "",
        "fontSize": "24px",
        "fontFamily": "IBM Plex Serif",
        "fontWeight": 600,
        "marginTop": "80px",
        "paddingLeft": "",
        "paddingTop": ""
      },
      "custom": {
        "text": "View Test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image103": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Next"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image104": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/left-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Prev"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex187": {
      "styles": {
        "display": "flex",
        "height": "100%",
        "width": "1px",
        "backgroundColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex188": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex189": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "testname": {
      "styles": {},
      "custom": {
        "text": "testname"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex190": {
      "styles": {
        "display": "flex",
        "color": "#6B7280",
        "columnGap": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "14px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingLeft": "4px",
        "paddingRight": "4px",
        "borderRadius": "2px",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex191": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "0.3rem",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "marginTop": "",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex192": {
      "styles": {
        "display": "flex",
        "paddingTop": "40px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Image105": {
      "styles": {
        "width": "600px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/example_driving_license.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex193": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "Flex194": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Button9": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FB923C",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex197": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox82": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Passport no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex200": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex201": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox85": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex202": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex203": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox87": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Place of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex204": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex205": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox89": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button13": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Nationality"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex208": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex209": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox93": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex211": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "columnGap": "30px",
        "paddingTop": "",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "correct": {
      "styles": {
        "width": "28px",
        "height": "28px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right_disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "exclaim": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/warning_disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "incorrect": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/wrong-disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "comment_btn": {
      "styles": {
        "color": "#94A3B8",
        "backgroundColor": "#fcfcfcff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#94A3B8",
        "cursor": "pointer",
        "userSelect": "none",
        "marginTop": "",
        "width": "300px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Leave a comment"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex212": {
      "styles": {
        "display": "flex",
        "marginTop": "20px",
        "justifyContent": "center",
        "flexDirection": "column",
        "alignItems": "center",
        "paddingLeft": "100px",
        "paddingRight": "100px",
        "width": "",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex213": {
      "styles": {
        "display": "flex",
        "paddingTop": "20px",
        "paddingLeft": "100px",
        "paddingRight": "100px",
        "flexDirection": "column",
        "rowGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox97": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "All comments"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "comment_wrapper_1": {
      "styles": {
        "display": "none",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex215": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex216": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Image109": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/profile_pic_3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "username_1": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "time_1": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "comment_1": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex218": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "flexDirection": "column",
        "columnGap": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "comment_2": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "time_2": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "username_2": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image110": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/profile_pic_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex219": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex220": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "comment_wrapper_2": {
      "styles": {
        "display": "none",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Image111": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/propfile_pic_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "username_3": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "time_3": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "comment_3": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex222": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex223": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "comment_wrapper_3": {
      "styles": {
        "display": "none",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "comment_input_wrapper": {
      "styles": {
        "display": "none",
        "flexDirection": "column",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "comment_input": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "20px",
        "paddingLeft": "11px",
        "paddingBottom": "20px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "outlineStyle": "none",
        "width": "800px"
      },
      "custom": {
        "value": "",
        "placeholder": "Leave a comment"
      },
      "callbacks": {}
    },
    "Button20": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/newtest"
            }
          }
        ]
      }
    },
    "Button49": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#4ADE80",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button50": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#60A5FA",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button51": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F472B6",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button52": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FACC15",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button58": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FB923C",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox198": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox199": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button59": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#4ADE80",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button60": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#60A5FA",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Expiry Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button61": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F472B6",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox202": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button62": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FACC15",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image148": {
      "styles": {
        "width": "600px"
      },
      "custom": {
        "alt": "No preview available",
        "src": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex372": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox203": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex373": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox204": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex374": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox205": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex375": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox206": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex376": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox207": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex377": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "Flex378": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex379": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex380": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex381": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex382": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex386": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Button63": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#f4b446",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox208": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox209": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button64": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#ef7939",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button65": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#f1a39a",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox211": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Expiry Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button66": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#d0d020",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox212": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button67": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#eb4b43",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "output_img": {
      "styles": {
        "width": "600px"
      },
      "custom": {
        "alt": "No preview available",
        "src": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex387": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "driver_name": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex388": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "license": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex389": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "dob": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex390": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "expiry": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex391": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "address": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "output_img_wrapper": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "Flex393": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex394": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex395": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex396": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex397": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex398": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex399": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "rowGap": "24px",
        "paddingTop": "20px",
        "paddingBottom": "20px",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex400": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-start",
        "marginTop": "20px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex401": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-end"
      },
      "callbacks": {}
    },
    "submit": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "comment_btn_wrapper": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image151": {
      "styles": {
        "width": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/account_circle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "newtest": {
    "Button17": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "3px",
        "paddingLeft": "10px",
        "paddingBottom": "3px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image112": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image113": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "styles": {
        "color": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Tests"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Button18": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/newtest"
            }
          }
        ]
      }
    },
    "Flex231": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex232": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "columnGap": "40px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex233": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "justifyContent": "flex-end",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex234": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "static",
        "width": "100%",
        "top": null
      },
      "callbacks": {}
    },
    "Flex235": {
      "styles": {
        "display": "flex",
        "position": "absolute",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Flex236": {
      "styles": {
        "display": "flex",
        "paddingTop": "60px",
        "boxSizing": "border-box",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "flexDirection": "column",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    },
    "TextBox111": {
      "styles": {
        "borderWidth": "",
        "fontSize": "24px",
        "fontFamily": "IBM Plex Serif",
        "fontWeight": 600,
        "marginTop": "80px",
        "paddingLeft": "",
        "paddingTop": ""
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "color": "#6B7280",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "paddingTop": "",
        "marginTop": ""
      },
      "custom": {
        "text": "Input Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#ffffff00",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "",
        "outline": "none",
        "fontWeight": 500,
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Flex237": {
      "styles": {
        "display": "inline-flex",
        "columnGap": "10px",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "borderColor": "#1F2937",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderRadius": "4px",
        "alignItems": "center",
        "cursor": "pointer"
      },
      "callbacks": {}
    },
    "Image114": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/file_upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_placeholder": {
      "styles": {
        "display": "flex",
        "width": "600px",
        "height": "",
        "alignItems": "center",
        "justifyContent": "center",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "borderWidth": "1px",
        "borderRadius": "4px",
        "backgroundColor": "#F1F5F9",
        "marginTop": "20px",
        "minHeight": "300px"
      },
      "callbacks": {}
    },
    "runtest": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#1E293B",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#ffffff",
        "marginTop": "20px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "paddingLeft": "10px",
        "columnGap": "10px",
        "borderWidth": "",
        "borderStyle": "none",
        "borderRadius": "4px",
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {},
      "custom": {
        "text": "Run Test"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image115": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/run_test.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "preview": {
      "styles": {
        "width": "600px",
        "height": "300px",
        "marginTop": "20px"
      },
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "preview_wrapper": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "filename": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex370": {
      "styles": {
        "display": "flex",
        "paddingTop": "40px",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Image152": {
      "styles": {
        "width": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/account_circle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "newtestresult": {
    "TextBox114": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image116": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/propfile_pic_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image117": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/profile_pic_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image118": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/profile_pic_3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Nationality"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button22": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FACC15",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button23": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F472B6",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Place of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button24": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#60A5FA",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button25": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#4ADE80",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Passport no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button26": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FB923C",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex240": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex241": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex242": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex243": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex244": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex245": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Button27": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "3px",
        "paddingLeft": "10px",
        "paddingBottom": "3px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex246": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox129": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex247": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox130": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex248": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox131": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex249": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox132": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex250": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Image119": {
      "styles": {},
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Prev"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image120": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/left-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Next"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image121": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button28": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex251": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex252": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex253": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex254": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-end"
      },
      "callbacks": {}
    },
    "Input2": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "20px",
        "paddingLeft": "11px",
        "paddingBottom": "20px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "outlineStyle": "none",
        "width": "800px"
      },
      "custom": {
        "value": "",
        "placeholder": "Leave a comment"
      },
      "callbacks": {}
    },
    "Flex255": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex256": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex257": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex258": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex259": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex260": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "TextBox135": {
      "styles": {},
      "custom": {
        "text": "40"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "styles": {
        "color": "#6B7280"
      },
      "custom": {
        "text": "tests"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex261": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex262": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex263": {
      "styles": {
        "display": "flex",
        "height": "100%",
        "width": "1px",
        "backgroundColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex265": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Button29": {
      "styles": {
        "color": "#94A3B8",
        "backgroundColor": "#fcfcfcff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#94A3B8",
        "cursor": "pointer",
        "userSelect": "none",
        "marginTop": "",
        "width": "300px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Leave a comment"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image122": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/wrong-disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image123": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/warning_disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image124": {
      "styles": {
        "width": "28px",
        "height": "28px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right_disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex266": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "rowGap": "10px",
        "paddingTop": "20px",
        "paddingBottom": "20px"
      },
      "callbacks": {}
    },
    "Flex267": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex268": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "0.3rem",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "marginTop": "",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex269": {
      "styles": {
        "display": "flex",
        "color": "#6B7280",
        "columnGap": "20px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "14px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingLeft": "4px",
        "paddingRight": "4px",
        "borderRadius": "2px",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Image125": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button30": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image126": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button31": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image127": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button32": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image128": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button33": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image129": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "styles": {
        "color": "#1E40AF",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Gallery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button34": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image130": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "styles": {
        "color": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "fontSize": "16px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Tests"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Button35": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/newtest"
            }
          }
        ]
      }
    },
    "Flex301": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex302": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "columnGap": "40px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex303": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "justifyContent": "flex-end",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex304": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "static",
        "width": "100%",
        "top": null
      },
      "callbacks": {}
    },
    "Flex305": {
      "styles": {
        "display": "flex",
        "position": "absolute",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox151": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image131": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/propfile_pic_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image132": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/profile_pic_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "fontSize": "16px"
      },
      "custom": {
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {
        "fontSize": "12px",
        "color": "#94A3B8"
      },
      "custom": {
        "text": "3h"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 600
      },
      "custom": {
        "text": "username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image133": {
      "styles": {
        "width": "40px",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/profile_pic_3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Nationality"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button36": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FACC15",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button37": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F472B6",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Place of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button38": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#60A5FA",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button39": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#4ADE80",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Passport no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button40": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FB923C",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "10px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex306": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex307": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex308": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex309": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex310": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Flex311": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox165": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex312": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox166": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex313": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox167": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex314": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox168": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex315": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox169": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex316": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Image134": {
      "styles": {},
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Prev"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image135": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/left-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Next"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image136": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right-arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button42": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex317": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex318": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex319": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "comment_input": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "20px",
        "paddingLeft": "11px",
        "paddingBottom": "20px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "outlineStyle": "none",
        "width": "800px"
      },
      "custom": {
        "value": "",
        "placeholder": "Leave a comment"
      },
      "callbacks": {}
    },
    "Flex321": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex322": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex323": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex324": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex325": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex326": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "testname": {
      "styles": {},
      "custom": {
        "text": "testname"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "comment_input_wrapper": {
      "styles": {
        "display": "none",
        "flexDirection": "column",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "comment_btn": {
      "styles": {
        "color": "#94A3B8",
        "backgroundColor": "#fcfcfcff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#94A3B8",
        "cursor": "pointer",
        "userSelect": "none",
        "marginTop": "",
        "width": "300px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Leave a comment"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "incorrect": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/wrong-disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "exclaim": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/warning_disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "correct": {
      "styles": {
        "width": "28px",
        "height": "28px",
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/right_disabled.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex334": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "0.3rem",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "marginTop": "",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex337": {
      "styles": {
        "display": "flex",
        "marginTop": "20px",
        "justifyContent": "center",
        "flexDirection": "column",
        "alignItems": "center",
        "paddingLeft": "100px",
        "paddingRight": "100px",
        "width": "",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex338": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "columnGap": "30px",
        "paddingTop": "",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "Flex340": {
      "styles": {
        "display": "flex",
        "paddingTop": "40px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "TextBox175": {
      "styles": {
        "borderWidth": "",
        "fontSize": "24px",
        "fontFamily": "IBM Plex Serif",
        "fontWeight": 600,
        "marginTop": "80px",
        "paddingLeft": "",
        "paddingTop": ""
      },
      "custom": {
        "text": "View Test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex341": {
      "styles": {
        "display": "flex",
        "paddingTop": "60px",
        "height": "100%",
        "boxSizing": "border-box",
        "flexDirection": "column",
        "paddingLeft": "40px",
        "paddingRight": "40px"
      },
      "callbacks": {}
    },
    "Image141": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/check.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox177": {
      "styles": {},
      "custom": {
        "text": "Save Test"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "save_test": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#0F766E",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#ffffff",
        "marginTop": "",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "paddingLeft": "10px",
        "columnGap": "10px",
        "borderWidth": "",
        "borderStyle": "none",
        "borderRadius": "4px",
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex344": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "Button53": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#eb4b43",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox187": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button54": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#d0d020",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox188": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Expiry Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button55": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#f1a39a",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox189": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button56": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#ef7939",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox190": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox191": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button57": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#f4b446",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "15px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "address": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex355": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "expiry": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex356": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "dob": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex357": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "license": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex358": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "driver_name": {
      "styles": {
        "width": "15rem"
      },
      "custom": {
        "text": "Jane Doe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex359": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "output_img": {
      "styles": {
        "width": "600px"
      },
      "custom": {
        "alt": "No preview available",
        "src": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex360": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex361": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex362": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex363": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex364": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex365": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "Flex366": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "rowGap": "24px",
        "paddingTop": "20px",
        "paddingBottom": "20px",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex367": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex368": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-start",
        "marginTop": "20px",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "comment_btn_wrapper": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image153": {
      "styles": {
        "width": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/account_circle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "login": {
    "Flex345": {
      "styles": {
        "display": "flex",
        "height": "100%",
        "flexWrap": "wrap"
      },
      "callbacks": {}
    },
    "Image142": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/login_wallpaper.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex346": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "justifyContent": "center",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "Image145": {
      "styles": {
        "width": "",
        "height": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/driving_license_demo/app-assets/logo%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex348": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "fontFamily": "IBM Plex Sans",
        "alignItems": "center",
        "paddingTop": "40px",
        "paddingBottom": "40px",
        "justifyContent": "center",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "borderColor": "#94A3B8",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderRadius": "6px"
      },
      "callbacks": {}
    },
    "TextBox178": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Login to Workbench"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox179": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 400,
        "color": "#9CA3AF",
        "paddingBottom": "40px"
      },
      "custom": {
        "text": "Contact your team for credentials"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex349": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "TextBox181": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Username"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "username": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "8px",
        "paddingLeft": "11px",
        "paddingBottom": "8px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "outlineStyle": "none",
        "width": "15rem"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "Flex351": {
      "styles": {
        "display": "flex",
        "width": "",
        "justifyContent": "center",
        "paddingTop": "",
        "columnGap": "",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "password": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "8px",
        "paddingLeft": "11px",
        "paddingBottom": "8px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "outlineStyle": "none",
        "width": "15rem",
        "alignSelf": "center"
      },
      "custom": {
        "value": "",
        "placeholder": "",
        "isPasswordField": true
      },
      "callbacks": {}
    },
    "TextBox183": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 600,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Password"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex352": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "6px"
      },
      "callbacks": {}
    },
    "Button48": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1E293B",
        "paddingTop": "6px",
        "paddingLeft": "10px",
        "paddingBottom": "6px",
        "paddingRight": "10px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 700,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Login"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex353": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "paddingTop": "40px"
      },
      "callbacks": {}
    },
    "errorbox": {
      "styles": {
        "backgroundColor": "#FEE2E2",
        "height": "",
        "alignSelf": "center",
        "paddingTop": "6px",
        "paddingBottom": "6px",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "borderRadius": "2px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#991B1B"
      },
      "custom": {
        "text": "Incorrect login credentials. Please try again. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "errorwrapper": {
      "styles": {
        "display": "none",
        "height": "4rem",
        "alignItems": "center",
        "paddingTop": ""
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {
    "478": {
      "Flex2": {
        "styles": {
          "columnGap": "20px"
        }
      }
    },
    "991": {
      "Flex4": {
        "styles": {
          "paddingLeft": "20px",
          "paddingRight": "20px"
        }
      }
    }
  },
  "viewtest": {
    "478": {
      "Flex182": {
        "styles": {
          "columnGap": "20px"
        }
      }
    },
    "991": {
      "Flex184": {
        "styles": {
          "paddingLeft": "20px",
          "paddingRight": "20px"
        }
      }
    }
  },
  "newtest": {
    "478": {
      "Flex232": {
        "styles": {
          "columnGap": "20px"
        }
      }
    },
    "991": {
      "Flex234": {
        "styles": {
          "paddingLeft": "20px",
          "paddingRight": "20px"
        }
      }
    }
  },
  "newtestresult": {
    "478": {
      "Flex302": {
        "styles": {
          "columnGap": "20px"
        }
      }
    },
    "991": {
      "Flex304": {
        "styles": {
          "paddingLeft": "20px",
          "paddingRight": "20px"
        }
      }
    }
  },
  "login": {}
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
